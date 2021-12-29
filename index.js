const axios = require('axios')
const web3 = require('web3')
const _ = require('lodash')
const fs = require('fs')
const path = require('path')
const commander = require('commander')
const pkg = require('./package.json')
const {CHAIN_SYNCING_PAYLOAD, CHAIN_TYPE_PAYLOAD, CHAIN_MAP} = require('./constants')

commander.program.version(pkg.version)
commander.program.showHelpAfterError()

const myParseInt = (value) => {
  // parseInt takes a string and a radix
  const parsedValue = parseInt(value, 10)

  if (isNaN(parsedValue)) {
    throw new commander.InvalidArgumentError('Not a number.')
  }

  return parsedValue
}

const parsePath = (pathStr) => {
  const chainsFilePath = path.resolve(pathStr)

  if (!fs.existsSync(chainsFilePath)) {
    throw new commander.InvalidArgumentError(`Provided file does not exists: ${chainsFilePath}`)
  }

  return chainsFilePath
}

commander.program
  .option('-i, --interval <minutes>', 'interval in minutes', myParseInt, 5)
  .option('-c, --chains <path>', 'chains file path', parsePath, './chains.json')

commander.program.parse(process.argv)

const options = commander.program.opts()

const chainsFilePath = options.chains

const check = async (chainData) => {
  const chain = CHAIN_MAP[chainData.id]
  const heightPayload = CHAIN_TYPE_PAYLOAD[chain.type]
  const syncingPayload = CHAIN_SYNCING_PAYLOAD[chain.type]

  if (!CHAIN_TYPE_PAYLOAD[chain.type]) {
    console.log(`Chain ${chain.name} not supported yet. Skipping...`)
    return
  }

  let syncStatus = 'Unavailable'
  if (syncingPayload) {
    let urlExt = chain.type === 'avax' ? '/ext/info' : ''
    const syncingResponse = await axios.post(chainData.url + urlExt, syncingPayload, {
      auth: chainData.basic_auth,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (syncingResponse.status !== 200) console.log(`${chain.name} returns non 200 code for syncing status`)
    else {
      if (chain.type === 'eth' || chain.type === 'hmy') {
        syncStatus = syncingResponse.data.result === false ? 'Sync' : 'Syncing'
      } else if (chain.type === 'avax') {
        syncStatus = syncingResponse.data.result.isBootstrapped === true ? 'Sync' : 'Syncing'
      }
    }
  }

  let height = 'Unavailable'

  if (chain.type === 'avax' && syncStatus === 'Sync') {
    const heightResponse = await axios.post(chainData.url + '/ext/P', heightPayload, {
      auth: chainData.basic_auth,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (heightResponse.status !== 200) console.log(`${chain.name} returns non 200 code.`)
    height = heightResponse.data.result.height
  } else if (chain.type !== 'avax') {
    const heightResponse = await axios.post(chainData.url, heightPayload, {
      auth: chainData.basic_auth,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (heightResponse.status !== 200) console.log(`${chain.name} returns non 200 code.`)
    if (chain.type === 'eth' || chain.type === 'hmy') {
      height = web3.utils.toNumber(heightResponse.data.result)
    } else {
      height = JSON.stringify(heightResponse.data)
    }
  }

  console.log(`${chain.name}: Height = ${height} Sync Status = ${syncStatus}`)
}

const run = async () => {
  console.log(`reading chains from: ${chainsFilePath}`)
  let rawData = fs.readFileSync(chainsFilePath)
  let chains = JSON.parse(rawData)

  const orderedChains = _.orderBy(chains, [ 'id' ], [ 'asc' ])

  for (let i = 0; i < orderedChains.length; i++) {
    const chainData = chains[i]

    try {
      await check(chainData)
    } catch (e) {
      console.log(`${CHAIN_MAP[chainData.id].name}: Sync Status Check Error = ${e.message}`)
    }
  }

  console.log('chains check done')
}

(() => {
  console.log('starting chains check...')
  run().then(() => {
    console.log(`Scheduling next check in ${options.interval} minutes`)
    setInterval(() => {
      console.log('starting chains check...')
      run().catch(e => console.error(e))
    }, 1000 * 60 * options.interval)
  }).catch(e => console.error(e))
})()