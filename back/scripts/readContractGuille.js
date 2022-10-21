
const API_KEY = process.env.GOERLI_API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const GOERLI_CONTRACT_ADDRESS = process.env.GOERLI_CONTRACT_ADDRESS;

const contract = require("../utils/pacientes.json");

// provider - Alchemy
const alchemyProvider = new ethers.providers.AlchemyProvider(network="goerli", API_KEY);

// signer - you
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// contract instance
const contracto = new ethers.Contract(GOERLI_CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
	console.log("Trying to add Hospital...")
    const tx = await contracto.addHospital("0xA381d1F7d286a1c8cf8Cbc21f9824195273C3dCD");

    await tx.wait();

}

main();
