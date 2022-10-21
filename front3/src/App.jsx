

import "./App.css";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import  abi  from "./utils/patients.json";

//import ipfsProvider from "./utils/uploadFiles.js";

const CONTRACT_ADDRESS = "0x5313884f9b46CD5098A320a00DB1C80DF2B77Eb1";
const HOSPITAL1 = "0x7d26600E22c2d7ed433D1deEBA73160bb629CbE9";
const DOCTOR2 = "0xc62d51c341BB6EA6F7c3C006539Dad033B05930a";

export default function Home() {
  const contractAddress = CONTRACT_ADDRESS;
  const contractABI = abi.abi;
  const [currentAccount, setCurrentAccount] = useState("");

  const isWalletConnected = async () => {
    try {
      const { ethereum } = window;

      const accounts = await ethereum.request({ method: "eth_accounts" });
      console.log("accounts: ", accounts);

      if (accounts.length > 0) {
        const account = accounts[0];
        console.log("wallet is connected! " + account);
      } else {
        console.log("make sure MetaMask is connected");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("please install MetaMask");
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const addHospital = async () => {
    try {
	console.log("Adding hospital to contract...");
      const { ethereum } = window;
      if (ethereum) {
		  const provider = new ethers.providers.Web3Provider(ethereum, "any");
		  const signer = provider.getSigner();
		  const patientContract = new ethers.Contract(
			  contractAddress,
			  contractABI,
			  signer
			  );
        const hospitalTxn = await patientContract.addHospital(HOSPITAL1);
        await hospitalTxn.wait();
        console.log("Hospital added in tx: ", hospitalTxn.hash);

      }
    } catch (error) {
      console.log(error);
    }
  };

  const addDoctor = async () => {
    try {
	console.log("Adding doctor to hospital...");
      const { ethereum } = window;
      if (ethereum) {
		  const provider = new ethers.providers.Web3Provider(ethereum, "any");
		  const signer = provider.getSigner();
		  const patientContract = new ethers.Contract(
			  contractAddress,
			  contractABI,
			  signer
			  );
        const hospitalTxn = await patientContract.addDoctor(DOCTOR2);
        await hospitalTxn.wait();
        console.log("Doctor added in tx: ", hospitalTxn.hash);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addFile = async () => {
    try {
	console.log("Adding file to patient...");
      const { ethereum } = window;
      if (ethereum) {
		  const provider = new ethers.providers.Web3Provider(ethereum, "any");
		  const signer = provider.getSigner();
		  const patientContract = new ethers.Contract(
			  contractAddress,
			  contractABI,
			  signer
			  );
        const hospitalTxn = await patientContract.addFile(1234, "dasd");
        await hospitalTxn.wait();
        console.log("Doctor added in tx: ", hospitalTxn.hash);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isWalletConnected();
  }, []);

  //	function App() {
  return (
    <div className="App">
      <h1>42 BLOCKERS</h1>

      <main className="App-header">
        <button type="button" className="add-button" onClick={addHospital}>
          Add Hospital
        </button>
        <button type="button" className="add-button" onClick={addDoctor}>
          Add Doctor
        </button>
        <button type="button" className="add-button">
          Add File to patient
        </button>

        <button className="App-button" onClick={connectWallet}>
          {" "}
          Connect your wallet on Mumbai Testnet
        </button>
      </main>
      <footer>
        <h1>
          <a
            href="https://hackforgood.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Created by 42Blockers for HackForGood Hackathon 2022
          </a>
        </h1>
      </footer>
    </div>
  );
  //}
}
