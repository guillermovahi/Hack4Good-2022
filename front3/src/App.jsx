import "./App.css";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import abi from "./utils/patients.json";

//import ipfsProvider from "./utils/uploadFiles.js";

const CONTRACT_ADDRESS = "0x13BE81E939EC473065B39c915a5f3392Ac1288dc";
const HOSPITAL1 = "0x7d26600E22c2d7ed433D1deEBA73160bb629CbE9";
const DOCTOR2 = "0xc62d51c341BB6EA6F7c3C006539Dad033B05930a";

export default function Home() {
  const contractAddress = CONTRACT_ADDRESS;
  const contractABI = abi.abi;
  const [currentAccount, setCurrentAccount] = useState("");
  const [hospital, setHospital] = useState("");
  const [doctor, setDoctor] = useState("");
  const [cipa, setCipa] = useState("");
  const [cid, setCid] = useState("");

  const onHospitalAddressChange = (event) => {
    setHospital(event.target.value);
  }
  
  const onDoctorAddressChange = (event) => {
    setDoctor(event.target.value);
  }

  const onCipaChange = (event) => {
    setCipa(event.target.value);
  }

  const onCidChange = (event) => {
    setCid(event.target.value);
  }
  

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
		console.log(`The addres I am trying to add is -> ${hospital}`)
        const hospitalTxn = await patientContract.addHospital(hospital);
		console.log("I am deploying your transaction, wait just a moment...")
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
		console.log(`The addres I am trying to add is -> ${doctor}`)
        const hospitalTxn = await patientContract.addDoctor(doctor);
		console.log("I am deploying your transaction, wait just a moment...")
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
		console.log(`The cipa I am trying to add is -> ${cipa}`)
		console.log(`The cid I am trying to add is -> ${cid}`)
        const hospitalTxn = await patientContract.addFile(cipa, cid);
		console.log("I am deploying your transaction, wait just a moment...")
        await hospitalTxn.wait();
        console.log("File added in tx: ", hospitalTxn.hash);
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
		<div className="header-connect">
		<h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Admin Panel</h1>
        
		<button className="App-button" onClick={connectWallet}>
			<img src={require('./metamask.png')}/>&nbsp;
			Connect with Metamask
			</button>

		</div>
      <main className="App-header">
        <button type="button" className="App-button-big" onClick={addHospital}>
          Add Hospital
        </button>
        <input id="hospitalAddress" type="text" className="input-holder" placeholder="Hospital Address" onChange={onHospitalAddressChange}/> <br></br>
       {/*  <button type="button" className="add-button" onClick={addDoctor}>
          Add Doctor
        </button>
		<input id="doctorAddress" type="text" className="input-holder" placeholder="Doctor Address" onChange={onDoctorAddressChange}/> <br></br>
        <button type="button" className="add-button" onClick={addFile}>
          Add File to patient
        </button>
		<input id="cipa" type="text" className="input-holder" placeholder="CIPA" onChange={onCipaChange}/>
		<input id="cid" type="text" className="input-holder"placeholder="CID" onChange={onCidChange}/> <br></br>
 */}


        
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
