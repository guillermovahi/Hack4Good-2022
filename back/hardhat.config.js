require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const MUMBAI_URL = process.env.MUMBAI_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: MUMBAI_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};