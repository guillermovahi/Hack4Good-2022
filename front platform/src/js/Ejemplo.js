import '../css/Ejemplo.css';
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import abi from "../utils/patients.json";

function Ejemplo() {
	const contractAddress = "0x13BE81E939EC473065B39c915a5f3392Ac1288dc";
  	const contractABI = abi.abi;
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
			
			const cipa = 654643564;
			const cid = "bafybeigvtutchyr74bgac7kzz5ojk63sh66hvmcrulkcgpjk44hpdrfe3u";
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
	
  return (

	<div class="Ejemplo">
		<div class="Ejemplo-form">
			<h2>Informe médico</h2>
			<p>981203749801273412734</p>
			<textarea name="informe" placeholder='Escriba su informe aquí...'></textarea>
			<br/>
			<button type="submit" class="Ejemplo-button">Generar informe</button>
		</div>
		<vl/>
		<div class="Ejemplo-user">
			<h2>Médico - 980752982754372</h2>
			<img src='https://bafybeigvtutchyr74bgac7kzz5ojk63sh66hvmcrulkcgpjk44hpdrfe3u.ipfs.nftstorage.link/' class='Ejemplo-image'></img>
		</div>
		<div class="Ejemplo-data">
			<p> </p>
			<p> </p>
			<p> </p>

{/* 			<button type="submit" class="Ejemplo-button" onClick={popUp()}>Escanear QR CIPA </button>
 */}			<button type="submit" class="Ejemplo-button" onClick={addFile}>Alta paciente</button>
			<div class="Ejemplo-columns">
				<h2>Lista informes</h2>
				<ul>
					<li>Analítica(10-07-2022).pdf</li>
					<li>Informe patologías médicas(30-01-2007).pdf</li>
					<li>Ecografía #1(02-05-2000).pdf</li>
					<li>Recetas/Reconocimiento(29-03-1990).pdf</li>
					<li>Consulta general(22-10-2022).pdf</li>
				</ul>
			</div>
			<div class="Ejemplo-columns">
				<h2>Lista CIDs</h2>
				<ul class="Ejemplo-list">
				<li><a href="https://bafybeihjm6rkrwklnbdnhjnmj5gj4regtaamhadp4sr2nju7uxoo53n5my.ipfs.nftstorage.link/informes/Anal%C3%ADtica(10-07-2022).pdf">bafybeihjm6rk....</a>	</li>
					<li><a href="https://bafybeihjm6rkrwklnbdnhjnmj5gj4regtaamhadp4sr2nju7uxoo53n5my.ipfs.nftstorage.link/informes/Informe%20patolog%C3%ADas%20m%C3%A9dicas(30-01-2007).pdf">bafyjqg24vn13....</a>	</li>
					<li><a href="https://bafybeihjm6rkrwklnbdnhjnmj5gj4regtaamhadp4sr2nju7uxoo53n5my.ipfs.nftstorage.link/informes/Anal%C3%ADtica(10-07-2022).pdf">bafyu2i7std6rk....</a>	</li>
					<li><a href="https://bafybeihjm6rkrwklnbdnhjnmj5gj4regtaamhadp4sr2nju7uxoo53n5my.ipfs.nftstorage.link/informes/Anal%C3%ADtica(10-07-2022).pdf">bafyn29yssv2s....</a>	</li>
					<li><a href="https://bafybeihjm6rkrwklnbdnhjnmj5gj4regtaamhadp4sr2nju7uxoo53n5my.ipfs.nftstorage.link/informes/Anal%C3%ADtica(10-07-2022).pdf">bafyn21sadw1k....</a>	</li>
				</ul>
			</div>
		</div>
    </div>
  );
}

export default Ejemplo;
