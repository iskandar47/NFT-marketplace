require('@nomiclabs/hardhat-waffle')
const fs = require('fs')

const PRIVATE_KEY = fs.readFileSync('.secret').toString()
const ID = 'a2c3e009b68848c88df84fbe503e02a4'

module.exports = {
  solidity: '0.8.12',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai : {
      url = 'https://3qahgax8zyvj.usemoralis.com:2053/server/ROlreoCcjZ0S2WBDaXUPYdyCeBHSEuVCMmsmNI0U',
      accounts : [PRIVATE_KEY]
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${ID}`,
      accounts: [
        'ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
      ],
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${ID}`,
      accounts: [
        'ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
      ],
    },
  },
}
