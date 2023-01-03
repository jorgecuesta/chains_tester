const CHAIN_SYNCING_PAYLOAD = {
  'eth': { 'jsonrpc': '2.0', 'method': 'eth_syncing', 'params': [], 'id': 1 },
  'hmy': { 'jsonrpc': '2.0', 'method': 'hmyv2_syncing', 'params': [], 'id': 0 },
  'avax': { 'jsonrpc': '2.0', 'id': 1, 'method': 'info.isBootstrapped', 'params': { 'chain': 'P' } },
  'sol': { 'jsonrpc': '2.0', 'id': 1, 'method': 'getHealth'},
  'near': { 'jsonrpc': '2.0', 'method': 'status', 'params':[], 'id': 1}
}

const CHAIN_TYPE_PAYLOAD = {
  'eth': { 'jsonrpc': '2.0', 'method': 'eth_blockNumber', 'params': [], 'id': 1 },
  'avax': { 'jsonrpc': '2.0', 'id': 1, 'method': 'platform.getHeight', 'params': {} },
  'hmy': { 'jsonrpc': '2.0', 'method': 'hmyv2_blockNumber', 'params': [], 'id': 0 },
  'sol': { 'jsonrpc': '2.0', 'method': 'getBlockHeight', 'params': [], 'id': 1 },
  'near': { 'jsonrpc': '2.0', 'method': 'status', 'params': [], 'id': 1 }
}

const CHAIN_MAP = {
  '0029': {
    name: 'Algorand Mainnet (0029)',
    type: 'algorand',
    height: 0
  },
  '000D': {
    name: 'Algorand Archival (000D)',
    type: 'algorand',
    height: 0
  },
  '0045': {
    name: 'Algorand Testnet (000G)',
    type: 'algorand',
    height: 0
  },
  '0A45': {
    name: 'Algorand Archival Testnet (0A45)',
    type: 'algorand',
    height: 0
  },

  '0030': {
    name: 'Arweave Mainnet (0030)',
    type: 'arweave',
    height: 0
  },

  '0003': {
    name: 'Avalanche Mainnet (0003)',
    type: 'avax',
    height: 0
  },
  '00A3': {
    name: 'Avalanche Archival (00A3)',
    type: 'avax',
  },
  '000E': {
    name: 'Avalanche Fuji (000E)',
    type: 'avax',
  },
  '03DF': {
    name: 'DFKchain Subnet (03DF)',
    type: 'avax',
    height: 0
  },
  '03CB': {
    name: 'Swimmer Network Mainnet (03CB)',
    type: 'avax',
    height: 0
  },

  '0004': {
    name: 'BSC Mainnet (0004)',
    type: 'eth',
    height: 0
  },
  '0010': {
    name: 'BSC Archival (0010)',
    type: 'eth',
    height: 0
  },
  '0011': {
    name: 'BSC Testnet (0011)',
    type: 'eth',
    height: 0
  },
  '0012': {
    name: 'BSC Testnet Archival (0012)',
    type: 'eth',
    height: 0
  },

  '0002': {
    name: 'Bitcoin Mainnet (0002)',
    type: 'btc',
    height: 0
  },

  '0021': {
    name: 'Ethereum (0021)',
    type: 'eth',
    height: 0
  },
  '0022': {
    name: 'Ethereum Archival (0022)',
    type: 'eth',
    height: 0
  },
  '0023': {
    name: 'Ethereum Ropsten (0023)',
    type: 'eth',
    height: 0
  },
  '0024': {
    name: 'Ethereum Kovan (0024)',
    type: 'eth',
    height: 0
  },
  '0025': {
    name: 'Ethereum Rinkeby (0025)',
    type: 'eth',
    height: 0
  },
  '0026': {
    name: 'Ethereum Goerli (0026)',
    type: 'eth',
    height: 0
  },
  '0028': {
    name: 'ETH Archival Trace (0028)',
    type: 'eth',
    height: 0
  },

  '0046': {
    name: 'Evmos (0046)',
    type: 'evmos',
    height: 0
  },

  '0005': {
    name: 'FUSE Mainnet (0005)',
    type: 'eth',
    height: 0
  },
  '000A': {
    name: 'FUSE Archival (000A)',
    type: 'eth',
    height: 0
  },

  '0040': {
    name: 'Harmony Shard 0 (0040)',
    type: 'hmy',
    height: 0
  },
  '0A40': {
    name: 'Harmony Shard 0 Archival (0A40)',
    type: 'hmy',
    height: 0
  },
  '0041': {
    name: 'Harmony Shard 1 (0041)',
    type: 'hmy',
    height: 0
  },
  '0A41': {
    name: 'Harmony Shard 1 Archival (0A41)',
    type: 'hmy',
    height: 0
  },
  '0042': {
    name: 'Harmony Shard 2 (0042)',
    type: 'hmy',
    height: 0
  },
  '0A42': {
    name: 'Harmony Shard 2 Archival (0A42)',
    type: 'hmy',
    height: 0
  },
  '0043': {
    name: 'Harmony Shard 0 (0043)',
    type: 'hmy',
    height: 0
  },
  '0A43': {
    name: 'Harmony Shard 0 Archival (0A43)',
    type: 'hmy',
    height: 0
  },

  '0044': {
    name: 'IoTeX Mainnet (0044)',
    type: 'eth',
    height: 0
  },
  '0049': {
    name: 'Fantom Mainnet (0049)',
    type: 'eth',
    height: 0
  },

  '0001': {
    name: 'POKT Mainnet (0001)',
    type: 'pokt',
    height: 0
  },

  '0009': {
    name: 'Polygon Mainnet (0009)',
    type: 'eth',
    height: 0
  },
  '000B': {
    name: 'Polygon Archival (000B)',
    type: 'eth',
    height: 0
  },
  '000F': {
    name: 'Polygon Mumbai (000F)',
    type: 'eth',
    height: 0
  },
  '00AF': {
    name: 'Polygon Mumbai Archival (00AF)',
    type: 'eth',
    height: 0
  },

  '0006': {
    name: 'Solana Mainnet (0006)',
    type: 'sol',
    height: 0
  },
  '0031': {
    name: 'Solana Testnet (0031)',
    type: 'sol',
    height: 0
  },

  '0027': {
    name: 'xDAI (0027)',
    type: 'eth',
    height: 0
  },
  '000C': {
    name: 'xDAI Archival (000C)',
    type: 'eth',
    height: 0
  },

  '0053': {
    name: 'Optimism Mainnet (0053)',
    type: 'eth',
    height: 0
  },
  '0059': {
    name: 'Dogechain (0059)',
    type: 'eth',
    height: 0
  },
  '0047': {
    name: 'OkExChain (0047)',
    type: 'eth',
    height: 0
  },
  '0052': {
    name: 'Near (0052)',
    type: 'near',
    height: 0
  }
}

module.exports = {
  CHAIN_SYNCING_PAYLOAD,
  CHAIN_TYPE_PAYLOAD,
  CHAIN_MAP,
}
