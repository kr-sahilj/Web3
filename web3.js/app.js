const Tx  = require('ethereumjs-tx').Transaction
const Web3 = require('web3')
require('dotenv').config();
const web3 = new Web3('https://goerli.infura.io/v3/abe3751076cc41e4b667f40d4430dd4c')

const account1 = '0x3bd10D495e854785ec11fa832618c6D1a50Cb4df' 
const account2 = '0x37Ec74cb3eD95fA140E03fAFc79a80bbFb76b344'
const Private = process.env.PRIVATE_KEY;

// const privateKey1 = Buffer.from(Private, 'hex')
// const HexPrivateKey  = new Buffer.from(Private,"hex");
const privateKey1 = Buffer.from(Private, 'hex')

web3.eth.getTransactionCount(account1, (err, txCount) => {
  // Build the transaction
  const txObject = {
    nonce:    web3.utils.toHex(txCount),
    to:       account2,
    value:    web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
    gasLimit: web3.utils.toHex(21000),
    gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
  }

  // Sign the transaction
  const tx = new Tx(txObject , {chain: 'goerli'});
  tx.sign(privateKey1)

  const serializedTx = tx.serialize()
  const raw = '0x' + serializedTx.toString('hex')

  // Broadcast the transaction
  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log(err);
    console.log('txHash: ', txHash)


  })
})
