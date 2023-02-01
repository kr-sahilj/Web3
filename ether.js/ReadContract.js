const { ethers } = require("ethers");

//connect with ethereum blockchain using JsonRpcProvider

const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/abe3751076cc41e4b667f40d4430dd4c')
const contarctAddress = '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0'
const address = '0x50d669f43b484166680ecc3670e4766cdb0945ce'


//using customized abi format for only required function
const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() external view returns (uint256)",
    "function balanceOf(address) external view returns (uint256)"
]

const contract = new ethers.Contract(contarctAddress,ERC20_ABI,provider)

const main = async () => {
    // const balance = await provider.getBalance(address)
    // console.log(`Ether Account Address: ${address} \nBalance is: ${ethers.utils.formatEther(balance)}`);
    const name = await contract.name()
    console.log(name)
    const balance = await contract.balanceOf(address)
    console.log(ethers.utils.formatEther(balance))
    const symbol = await contract.symbol();
    console.log(symbol)
    const totalsupply = await contract.totalSupply()
    console.log(ethers.utils.formatEther(totalsupply))

}

main()