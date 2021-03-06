const PrivateKeyConnector = require('connect-privkey-to-provider')
const NETWORK_ID = '1001' // Baobab Network 고유 ID
const GASLIMIT = '20000000'
const URL = 'https://api.baobab.klaytn.net:8651' // Baobab TestNET
const PRIVATE_KEY = '0xb1a7781046c1c7850831bd5555f09db35319956da7f63afed15314764ad60b28'
module.exports = {
  networks: {
    klaytn: {
      provider: new PrivateKeyConnector(PRIVATE_KEY, URL),
      network_id: NETWORK_ID,
      gas: GASLIMIT,
      gasPrice: null, // Baobab Network 에서 자동으로 값 지정
    }
  }
}