const Web3 = require('web3')
const web3 = new Web3('HTTP://127.0.0.1:7545')

const account1 = '0x4D3874929748f090cbbb7C0B5E97413E1B02FDe2'

const account2 = '0xc7C235C89e7Cec2de83e1caD40172680152E8f86'

web3.eth.getBalance(account1, (err, result) => {console.log(result)})

web3.eth.getBalance(account2, (err, result) => {console.log(result)})

// web3.eth.getBa

// web3.eth.sendTransaction({from: account1, to:account2, value: web3.utils.toWei('1','ether')})

web3.eth.personal.unlockAccount
