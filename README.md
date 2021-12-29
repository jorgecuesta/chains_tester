## Chains Tester

This tool allows you to test your chains.json file to see if your chains are available, syncing, or in sync. This is an open source tool for the community, and any help, fixes or improvements are more than welcome. For now most common chains are handled, but there are several of them not tested because I don't have access.

After you start the process it will make an initial run, followed by additional runs every 5 minutes until complete.

### Requirements
Nodejs + NPM|Yarn

### Install
1. git clone
   npm install

### How to use

1. Create a chains.json next to index.js and run `npm start`
2. Alternative: Create any .json file that follows the chains.json structure and run: node index.js my-file.json to run your own custom chains file.
   *. `node index.js -c <file_path> -i <interval_minutes>`

When executed, you will see something like this:

```bash
starting chains check...
reading chains from: /home/overlordyorch/Pocket/chain_tester/jorge-chains.json
Chain POKT Mainnet (0001) not supported yet. Skipping...
Ethereum (0021): Height = 13901263 Sync Status = Sync
ETH Archival Trace (0028): Height = 13901263 Sync Status = Sync
xDAI (0027): Height = 16550511 Sync Status = Syncing
xDAI Archival (000C): Height = 16550514 Sync Status = Syncing
FUSE Mainnet (0005): Height = 14688797 Sync Status = Sync
FUSE Archival (000A): Height = 14688797 Sync Status = Sync
Harmony Shard 0 (0040): Height = 21089416 Sync Status = Sync
Ethereum Goerli (0026): Height = 6107882 Sync Status = Sync
IoTeX Mainnet (0044): Height = 15040014 Sync Status = Sync
Polygon Mainnet (0009): Height = 23109270 Sync Status = Sync
Ethereum Rinkeby (0025): Height = 9899985 Sync Status = Sync
Ethereum Ropsten (0023): Height = 11713691 Sync Status = Sync
BSC Mainnet (0004): Height = 13902907 Sync Status = Sync
Avalanche Mainnet (0003): Height = 1085211 Sync Status = Sync
Avalanche Mainnet (0003): Height = Unavailable Sync Status = Syncing
chains check done
Scheduling next check in 2 minutes
```

### Commands
* `node index.js -V` - Print version
* `node index.js -h` - Print available commands
* `node index.js -c <file_path> -i <interval_minutes>`
