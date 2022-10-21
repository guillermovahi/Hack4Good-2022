require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const GOERLI_URL = process.env.GOERLI_URL;
const MUMBAI_URL = process.env.MUMBAI_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY_SERVICE;

module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: MUMBAI_URL,
      accounts: [PRIVATE_KEY],
    },
	goerli: {
	  url: GOERLI_URL,
	  accounts: [PRIVATE_KEY],
	}
  },
};