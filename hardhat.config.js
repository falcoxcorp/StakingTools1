require('@nomiclabs/hardhat-waffle');
require('hardhat-etherscan');

const PRIVATE_KEY = process.env.VITE_APP_PRIVATE_KEY || '';
const BSCSCAN_API_KEY = process.env.VITE_APP_BSCSCAN_API_KEY || '';
const ETHSCAN_API_KEY = process.env.VITE_APP_ETHSCAN_API_KEY || '';

module.exports = {
  networks: {
    development: {
      url: 'http://localhost:8545',
      chainId: 1337,
    },
    bsctestnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
      chainId: 97,
      gasPrice: 10000000000, // 10 gwei
      gas: 'auto',
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
      networkCheckTimeout: 1000000,
    },
  },
  solidity: {
    version: '0.8.7',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  etherscan: {
    apiKey: ETHSCAN_API_KEY,
  },
  paths: {
    artifacts: './src/hardhat/artifacts',
    sources: "./src/hardhat/contracts",
    tests: "./src/hardhat/test",
    cache: "./src/hardhat/cache",
  },
};