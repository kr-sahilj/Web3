const Web3 = require('web3')

const web3 = new Web3('https://mainnet.infura.io/v3/abe3751076cc41e4b667f40d4430dd4c')

// web3.eth.getBlockNumber().then((latest) => {
//     for(let i=0;i<10;i++){
//         web3.eth.getBlock(latest-i).then((block) => {
//             console.log({
//                 blockHash: block.hash,
//                 blockNumber: block.number,
//             })
//         })
//     }
// })

web3.eth.getBlockTransactionCount('latest').then(console.log)

const Hash = '0x79c98adda5e7beb8aefca69e1ab4314c4b0cc1c081d19d25d49e84549748c3f6'
web3.eth.getTransactionFromBlock(Hash, 2).then(console.log)
