require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    "optimism": {
      url: 'https://mainnet.optimism.io',
      accounts: [process.env.WALLET_KEY],
      gasPrice: 1000000000,
    },
    "optimism-goerli": {
      url: 'https://goerli.optimism.io',
      accounts: [process.env.WALLET_KEY],
      gasPrice: 1000000000,
   },
    'base-mainnet': {
      url: 'https://mainnet.base.org',
      accounts: [process.env.WALLET_KEY],
      gasPrice: 1000000000,
    },
    // for testnet
    'base-goerli': {
      url: 'https://goerli.base.org',
      accounts: [process.env.WALLET_KEY],
      gasPrice: 1000000000,
    },
  },
  etherscan: {
    apiKey: {
     "baseGoerli": process.env.BASE_SCAN_API_KEY,
     "optimisticGoerli": process.env.OPTIMISM_SCAN_API_KEY,
     "optimisticEthereum": process.env.OPTIMISM_SCAN_API_KEY,
    },
    customChains: [
      {
        network: "baseGoerli",
        chainId: 84531,
        urls: {
         apiURL: "https://api-goerli.basescan.org/api",
         browserURL: "https://goerli.basescan.org"
        }
      },
      {
        network: "base",
        chainId: 8453,
        urls: {
         apiURL: "https://api.basescan.org",
         browserURL: "https://basescan.org"
        }
      }
    ]
  },
};
