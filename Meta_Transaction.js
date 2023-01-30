const {ethers} = require('ethers');

require('dotenv').config();
const Account = process.env.ACCOUNT_ADD;
const Private = process.env.PRIVATE_KEY;
const HttpUrl = process.env.IN_URL;

console.log(Account);

const Provider  = new ethers.getDefaultProvider(HttpUrl);
const HexPrivateKey  = new Buffer.from(Private,"hex");

// get the signer

const Signer = new ethers.Wallet(HexPrivateKey,Provider); //used to authenticate the tranction
async function run_basics(){
    // get balance
    const balance = await Provider.getBalance(Account);
    console.log(balance.toString());
    
    // convert wei to ether
    const balanceInEth = ethers.utils.formatEther(balance);
    console.log(balanceInEth);

    //colnvert ether to wei
    console.log(ethers.utils.parseEther("1.0").toString());

}

async function transfer_eth(){
    // transfer ETH to others
    const transaction = await Signer.sendTransaction({
        to: "0x37Ec74cb3eD95fA140E03fAFc79a80bbFb76b344",
        value: ethers.utils.parseEther("0.1")

    })
    console.log(transaction.hash);
}

run_basics()
transfer_eth()
