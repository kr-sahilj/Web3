const Web3 = require('web3')

const web3 = new Web3('https://mainnet.infura.io/v3/abe3751076cc41e4b667f40d4430dd4c')

web3.eth.getGasPrice().then((result) => {
    console.log(web3.utils.fromWei(result, 'ether'))
})

console.log("Sha3 ciper text:  " + web3.utils.sha3('Sahil Jaiswal'))

console.log(web3.utils.sha3('123'))

console.log("Solidity Sha3 ciper text:  " + web3.utils.soliditySha3('Sahil Jaiswal'))

console.log("Hex Generation: "+web3.utils.randomHex(32))

// underscore library (_)

const _ = web3.utils._

console.log(_)