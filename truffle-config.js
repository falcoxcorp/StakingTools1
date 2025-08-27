const HDWalletProvider = require('@truffle/hdwallet-provider');
const PRIVATE_KEY = import.meta.env.VITE_APP_PRIVATE_KEY// 'tu frace secreta aqui'; // Reemplaza con tu frase mnemotécnica
const MY_WALLET = import.meta.env.VITE_APP_ADDRESS_WALLET
const BSCSCAN_API_KEY = import.meta.env.VITE_APP_BSCSCAN_API_KEY
const ETHSCAN_API_KEY = import.meta.env.VITE_APP_ETHSCAN_API_KEY



module.exports = {
  
  contracts_build_directory: path.join(__dirname, 'src/contracts/deploy'),
  networks: {
    bsc: {
      provider: function () {
        return new HDWalletProvider(PRIVATE_KEY, 'https://bsc-dataseed.binance.org/');
      },
      from: MY_WALLET,
      network_id: 56, // Binance Smart Chain Mainnet
      confirmations: 10,
      gasPrice: 10000000000, // 10 gwei
      timeoutBlocks: 200,
      skipDryRun: true,
      production: true,
      networkCheckTimeout: 1000000,
      etherscan: {
        apiKey: BSCSCAN_API_KEY,
      },
    },
    bsc_testnet: {
      provider: function () {
        return new HDWalletProvider(PRIVATE_KEY, 'https://data-seed-prebsc-1-s1.binance.org:8545', 0);
      },
      from: MY_WALLET, //tu wallet aqui
      network_id: 97, // Binance Smart Chain Testnet
      confirmations: 10,
      gasPrice: 10000000000, // 10 gwei
      timeoutBlocks: 200,
      skipDryRun: true,
      production: true,
      networkCheckTimeout: 1000000,
      etherscan: {
        apiKey: BSCSCAN_API_KEY,
      },
    },
    ethereum: {
      provider: function () {
        return new HDWalletProvider(PRIVATE_KEY, 'https://mainnet.infura.io/v3/your_infura_project_id', 0); // Reemplaza con tu Infura Project ID
      },
      from: MY_WALLET,
      network_id: 1, // Ethereum Mainnet
      gasPrice: 50000000000, // 50 gwei
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      networkCheckTimeout: 1000000,
      etherscan: {
        apiKey: ETHSCAN_API_KEY, // Reemplaza con tu API key de Etherscan
      },
    },
  },
  compilers: {
    solc: {
      version: '0.8.4', // La versión del compilador que deseas utilizar
    },
  },
  plugins: [
    'truffle-plugin-verify',
    'truffle-contract-size'
  ],
  api_keys: {
    etherscan: ETHSCAN_API_KEY // Reemplaza con tu API key de Etherscan
  },
};