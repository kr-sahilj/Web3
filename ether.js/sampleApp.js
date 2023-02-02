const { ethers } = require("ethers");
const { toHex } = require("web3-utils");
require('dotenv').config();
//connect with ethereum blockchain using JsonRpcProvider

const provider = new ethers.providers.JsonRpcProvider('https://goerli.infura.io/v3/abe3751076cc41e4b667f40d4430dd4c')
const account = '0x37Ec74cb3eD95fA140E03fAFc79a80bbFb76b344'
// const account2 = '0x37Ec74cb3eD95fA140E03fAFc79a80bbFb76b344'

const Private = process.env.PRIVATE_KEY;
// const HttpUrl = process.env.IN_URL;
const ContractAddress = '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0'

const ERC20_ABI = [
    "function balanceOf(address who) external view returns (uint256)",
    "function transfer(address to, uint256 value) external returns (bool)",
    "function decimals() public view returns (uint8)",
    "function totalSupply() external view returns (uint256)"
]
const wallet = new ethers.Wallet(Private,provider)

const contract = new ethers.Contract(ContractAddress,ERC20_ABI,provider)


const main = async() => {
    
    //account1 balance before transaction
    const balance = await provider.getBalance(account);
    console.log(balance.toString());

    const decimals = 18
    const totalsupply = contract.totalSupply()
    console.log(ethers.utils.parseUnits(totalsupply.toString()));
    // const connnectWithWallet = contract.connect(wallet)
    // const tranc = await connnectWithWallet.transfer(account,'0.1')

    // await tranc.wait()

    // console.log(tranc)


    //account1 balance after transaction
    
    const balance1 = await provider.getBalance(account);
    console.log(balance1.toString());



    
}

main()
