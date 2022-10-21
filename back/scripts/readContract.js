// interact.js

const API_KEY = process.env.API_KEY;
const MUMBAI_URL = process.env.MUMBAI_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const Web3 = require('web3');
const contract = require("../utils/pacientes.json");

// provider - Alchemy
const provider = new Web3.providers.HttpProvider(
    "https://polygon-mumbai.g.alchemy.com/v2/qraT9zVjWviqeyyU1DYcn0V9HbT-fGnA"
);




// contract instance
//const contracto = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    const web3 = new Web3(provider);

    //signer
    const signer = web3.eth.accounts.privateKeyToAccount("89dbdfa1ee63e932518f6b10eb01c0b7b1168a2920e2cd25e2774a8ceb574073");
    console.log(signer);
    web3.eth.accounts.wallet.add(signer);
    web3.eth.defaultAccount = signer.address;
    const contracto = new web3.eth.Contract(contract.abi, "0x6e1e3add9245A8e6151BC08183ce26CF4023158b");
    console.log("Trying to add Hospital...", contracto)
    //call a function addHospital with gas limit
    const result = await contracto.methods.addHospital("0x6e1e3add9245A8e6151BC08183ce26CF4023158b").send({from: signer.address, gas: 1000000});
    console.log("Hospital added!", result);
   // await tx.wait();

}

main();