const { ethers } = require("ethers");
const { toHex } = require("web3-utils");
require('dotenv').config();
//connect with ethereum blockchain using JsonRpcProvider

const provider = new ethers.providers.JsonRpcProvider('https://goerli.infura.io/v3/abe3751076cc41e4b667f40d4430dd4c')
const account1 = '0x3bd10D495e854785ec11fa832618c6D1a50Cb4df'
const account2 = '0x37Ec74cb3eD95fA140E03fAFc79a80bbFb76b344'

const Private = process.env.PRIVATE_KEY;
// const HttpUrl = process.env.IN_URL;

const wallet = new ethers.Wallet(Private,provider)

const main = async() => {

    //account1 balance before transaction
    const balance1 = await provider.getBalance(account1);
    console.log(balance1.toString());


    //account2 balance before transaction
    const balance2 = await provider.getBalance(account2);
    console.log(balance2.toString());
    
    //send georli ether
    const transaction = await wallet.sendTransaction({
        to: account2 ,
        value: ethers.utils.parseEther("0.1") 
    })
    // wait for transaction to be mined
    await transaction.wait()
    console.log(transaction)

    //account1 balance after transaction
    const balance3 = await provider.getBalance(account1);
    console.log(balance3.toString());


    //account2 balance after transaction
    const balance4 = await provider.getBalance(account2);
    console.log(balance4.toString());

    // const signer = await  wallet.signTransactions
}

main()
