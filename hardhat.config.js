require('@nomiclabs/hardhat-waffle');
require('hardhat-etherscan');
require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = import.meta.env.VITE_APP_PRIVATE_KEY
const BSCSCAN_API_KEY = import.meta.env.VITE_APP_BSCSCAN_API_KEY
const ETHSCAN_API_KEY = import.meta.env.VITE_APP_ETHSCAN_API_KEY

module.exports = {
  networks: {
    development: {
      url: 'http://localhost:8545',
      chainId: 1337,
    },
   /*  bsc: {
      url: 'https://bsc-dataseed.binance.org/',
      accounts: { mnemonic: PRIVATE_KEY },
      chainId: 56,
      gasPrice: 10000000000, // 10 gwei
      gas: 'auto',
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
      networkCheckTimeout: 1000000,
      etherscan: {
        apiKey: BSCSCAN_API_KEY,
      },
    }, */
    bsctestnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      accounts: { mnemonic: PRIVATE_KEY },
      chainId: 97,
      gasPrice: 10000000000, // 10 gwei
      gas: 'auto',
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
      networkCheckTimeout: 1000000,
      etherscan: {
        apiKey: BSCSCAN_API_KEY,
      },
    },
    /* ethereum: {
      url: 'https://mainnet.infura.io/v3/your_infura_project_id', // Reemplaza con tu Infura Project ID
      accounts: { mnemonic: PRIVATE_KEY },
      chainId: 1,
      gasPrice: 50000000000, // 50 gwei
      gas: 'auto',
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      networkCheckTimeout: 1000000,
      etherscan: {
        apiKey: ETHSCAN_API_KEY, // Reemplaza con tu API key de Etherscan
      },
    }, */
  },
  solidity: {
    version: '0.8.7', // La versión del compilador que deseas utilizar
  },
  etherscan: {
    apiKey: ETHSCAN_API_KEY, // Reemplaza con tu API key de Etherscan
  },
  paths: {
    artifacts: './src/hardhat/artifacts',
    sources: "./src/hardhat/contracts",
    tests: "./src/hardhat/test",
    cache: "./src/hardhat/cache",
  },
};