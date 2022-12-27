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
  },
  '000D': {
    name: 'Algorand Archival (000D)',
    type: 'algorand',
  },
  '0045': {
    name: 'Algorand Testnet (000G)',
    type: 'algorand',
  },
  '0A45': {
    name: 'Algorand Archival Testnet (0A45)',
    type: 'algorand',
  },

  '0030': {
    name: 'Arweave Mainnet (0030)',
    type: 'arweave',
  },

  '0003': {
    name: 'Avalanche Mainnet (0003)',
    type: 'avax',
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
  },
  '03CB': {
    name: 'Swimmer Network Mainnet (03CB)',
    type: 'avax',
  },

  '0004': {
    name: 'BSC Mainnet (0004)',
    type: 'eth',
  },
  '0010': {
    name: 'BSC Archival (0010)',
    type: 'eth',
  },
  '0011': {
    name: 'BSC Testnet (0011)',
    type: 'eth',
  },
  '0012': {
    name: 'BSC Testnet Archival (0012)',
    type: 'eth',
  },

  '0002': {
    name: 'Bitcoin Mainnet (0002)',
    type: 'btc',
  },

  '0021': {
    name: 'Ethereum (0021)',
    type: 'eth',
  },
  '0022': {
    name: 'Ethereum Archival (0022)',
    type: 'eth',
  },
  '0023': {
    name: 'Ethereum Ropsten (0023)',
    type: 'eth',
  },
  '0024': {
    name: 'Ethereum Kovan (0024)',
    type: 'eth',
  },
  '0025': {
    name: 'Ethereum Rinkeby (0025)',
    type: 'eth',
  },
  '0026': {
    name: 'Ethereum Goerli (0026)',
    type: 'eth',
  },
  '0028': {
    name: 'ETH Archival Trace (0028)',
    type: 'eth',
  },

  '0046': {
    name: 'Evmos (0046)',
    type: 'evmos',
  },

  '0005': {
    name: 'FUSE Mainnet (0005)',
    type: 'eth',
  },
  '000A': {
    name: 'FUSE Archival (000A)',
    type: 'eth',
  },

  '0040': {
    name: 'Harmony Shard 0 (0040)',
    type: 'hmy',
  },
  '0A40': {
    name: 'Harmony Shard 0 Archival (0A40)',
    type: 'hmy',
  },
  '0041': {
    name: 'Harmony Shard 1 (0041)',
    type: 'hmy',
  },
  '0A41': {
    name: 'Harmony Shard 1 Archival (0A41)',
    type: 'hmy',
  },
  '0042': {
    name: 'Harmony Shard 2 (0042)',
    type: 'hmy',
  },
  '0A42': {
    name: 'Harmony Shard 2 Archival (0A42)',
    type: 'hmy',
  },
  '0043': {
    name: 'Harmony Shard 0 (0043)',
    type: 'hmy',
  },
  '0A43': {
    name: 'Harmony Shard 0 Archival (0A43)',
    type: 'hmy',
  },

  '0044': {
    name: 'IoTeX Mainnet (0044)',
    type: 'eth',
  },
  '0049': {
    name: 'Fantom Mainnet (0049)',
    type: 'eth',
  },

  '0001': {
    name: 'POKT Mainnet (0001)',
    type: 'pokt',
  },

  '0009': {
    name: 'Polygon Mainnet (0009)',
    type: 'eth',
  },
  '000B': {
    name: 'Polygon Archival (000B)',
    type: 'eth',
  },
  '000F': {
    name: 'Polygon Mumbai (000F)',
    type: 'eth',
  },
  '00AF': {
    name: 'Polygon Mumbai Archival (00AF)',
    type: 'eth',
  },

  '0006': {
    name: 'Solana Mainnet (0006)',
    type: 'sol',
  },
  '0031': {
    name: 'Solana Testnet (0031)',
    type: 'sol',
  },

  '0027': {
    name: 'xDAI (0027)',
    type: 'eth',
  },
  '000C': {
    name: 'xDAI Archival (000C)',
    type: 'eth',
  },

  '0053': {
    name: 'Optimism Mainnet (0053)',
    type: 'eth',
  },
  '0059': {
    name: 'Dogechain (0059)',
    type: 'eth',
  },
  '0047': {
    name: 'OkExChain (0047)',
    type: 'eth',
  },
  '0052': {
    name: 'Near (0052)',
    type: 'near',
  }
}

module.exports = {
  CHAIN_SYNCING_PAYLOAD,
  CHAIN_TYPE_PAYLOAD,
  CHAIN_MAP,
}
