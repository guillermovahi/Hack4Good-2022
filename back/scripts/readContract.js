// interact.js

const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const contract = require("../utils/pacientes.json");

// provider - Alchemy
const provider = new ethers.providers.Web3Provider(ethereum, "any");

// signer - you
const signer = provider.getSigner();

// contract instance
const contracto = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
	console.log("Trying to add Hospital...")
    const tx = await contracto.addHospital("0xA381d1F7d286a1c8cf8Cbc21f9824195273C3dCD");

    await tx.wait();

}

main();