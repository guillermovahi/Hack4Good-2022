const hre = require("hardhat");

async function main() {
  const Pacientes = await hre.ethers.getContractFactory("pacientes");
  const pacientes = await Pacientes.deploy();
  await pacientes.deployed();
  console.log("Pacientes deployed to: ", pacientes.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
