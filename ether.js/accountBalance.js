const { ethers } = require("ethers");

//connect with ethereum blockchain using JsonRpcProvider

const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/abe3751076cc41e4b667f40d4430dd4c')
const address = '0xDAFEA492D9c6733ae3d56b7Ed1ADB60692c98Bc5'
const main = async () => {
    const balance = await provider.getBalance(address)
    console.log(`Ether Account Address: ${address} \nBalance is: ${ethers.utils.formatEther(balance)}`);
}

main()