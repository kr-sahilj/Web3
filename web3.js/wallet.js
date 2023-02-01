const Web3 = require('web3')

const web3 = new Web3()
// create Acoount
web3.eth.accounts.create()

//encrypt private key and data with password
const PEncryt = web3.eth.accounts.encrypt('0xefd505f38b3de01a45dcd344fee8f3df6346e0cc9a1248982e82cad4735b0a20','sahil')
// console.log(PEncryt)

//decrypt data and private key with the same password
const data = web3.eth.accounts.decrypt(PEncryt,'sahil')
// console.log(data);

//create wallets
const wallets = web3.eth.accounts.wallet.create(1)
// console.log(wallets)
const keystore = web3.eth.accounts.wallet.encrypt('sahil')
// console.log(keystore)

const walletData= web3.eth.accounts.decrypt(keystore,'sahil');
// console.log(walletData)