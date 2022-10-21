const hre = require("hardhat");

/*
* Fichero que despliega el contrato llamado "patients"
*/

async function main() {
  const Patients = await hre.ethers.getContractFactory("patients");
  const patients = await Patients.deploy();
  await patients.deployed();
  console.log("Pacientes deployed to: ", patients.address);
  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
