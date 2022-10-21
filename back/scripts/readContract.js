// interact.js
require("dotenv").config();

const MUMBAI_URL = process.env.MUMBAI_URL;
const PRIVATE_KEY_SERVICE = process.env.PRIVATE_KEY_SERVICE;
const PRIVATE_KEY_HOSPITAL = process.env.PRIVATE_KEY_HOSPITAL;
const CONTRACT_ADDRESS = process.env.MUMBAI_CONTRACT_ADDRESS;
const HOSPITAL1 = process.env.HOSPITAL_1_ADDRESS;
const MEDICO1 = process.env.DOCTOR_1_ADDRESS;

const Web3 = require('web3');
const contract = require("../artifacts/contracts/patients.sol/patients.json");

// provider - Alchemy
const provider = new Web3.providers.HttpProvider(
    MUMBAI_URL
);

async function main() {
    const web3 = new Web3(provider);

    //* INSTANCIAMOS EL CONTRATO PARA USAR SUS FUNCIONES
    const signerService = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY_SERVICE);
    web3.eth.accounts.wallet.add(signerService);
    web3.eth.defaultAccount = signerService.address;
    const contracto = new web3.eth.Contract(contract.abi, CONTRACT_ADDRESS);
   
	//* AÑADIMOS UN HOSPITAL AL MAPPING
	console.log("Trying to add Hospital...")
    try {
		const result = await contracto.methods.addHospital(HOSPITAL1).send({from: signerService.address, gas: 1000000});
		console.log("Hospital added! look in tx: ", result.transactionHash);
	} catch (error) {
		console.log("Error adding hospital: ", error.message);
	}

	//* AÑADIMOS UN MÉDICO AL MAPPING
	console.log("Trying to add a new doctor...")
	const signerHospital = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY_HOSPITAL);
    web3.eth.accounts.wallet.add(signerHospital);
    web3.eth.defaultAccount = signerHospital.address;
    const result = await contracto.methods.addDoctor(MEDICO1).send({from: signerHospital.address, gas: 1000000});
	console.log("Doctor added! look in tx: ", result.transactionHash);
	

	//* AÑADIMOS UN PACIENTE AL MAPPING
	console.log("Trying to add a new patient...")
	const signerDoctor = web3.eth.accounts.privateKeyToAccount(PRIVATE_KEY_DOCTOR);
	web3.eth.accounts.wallet.add(signerDoctor);
	web3.eth.defaultAccount = signerDoctor.address;
	result = await contracto.methods.addPatient("Cipa", "CID").send({from: signerDoctor.address, gas: 1000000});
	console.log("Patient added! look in tx: ", result.transactionHash);

}

main();
