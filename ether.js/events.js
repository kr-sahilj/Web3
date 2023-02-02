const { ethers } = require("ethers");
const { toHex } = require("web3-utils");
require('dotenv').config();
//connect with ethereum blockchain using JsonRpcProvider

const provider = new ethers.providers.JsonRpcProvider('https://goerli.infura.io/v3/abe3751076cc41e4b667f40d4430dd4c')
const account1 = '0x3bd10D495e854785ec11fa832618c6D1a50Cb4df'
const account2 = '0x37Ec74cb3eD95fA140E03fAFc79a80bbFb76b344'

const Private = process.env.PRIVATE_KEY;
// const HttpUrl = process.env.IN_URL;
const ContractAddress = '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0'

const ERC20_ABI = [
    //functions
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() external view returns (uint256)",
    "function balanceOf(address) external view returns (uint256)",

    // events
    "event Transfer(address indexed from, address indexed to, uint256 value)"
]

const wallet = new ethers.Wallet(Private,provider)

const contract = new ethers.Contract(ContractAddress,ERC20_ABI,provider)


const main = async() => {
    const block = await provider.getBlockNumber()
    const transferEvents = await contract.queryFilter('Transfer',block-10,block)
    console.log(transferEvents)
}

main()
