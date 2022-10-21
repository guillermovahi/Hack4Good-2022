// 'use strict';

// const { createReadStream } = require('fs');
// const { CarReader } = require('@ipld/car');
// const { packToFs } = require('ipfs-car/pack/fs');
// const { FsBlockStore } = require('ipfs-car/blockstore/fs');
// const { Web3Storage } = require('web3.storage');


// /* ------- CONFIGURABLE PARAMS --------------- */
// // Token de Web3Storage que permite subir ficheros a la red IPFS
// const WEB3_STORAGE_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEE1OTBhNkQ0Y0VGNWE5MWI2ODNEYTk5RkE4Rjg4ZjY0QmM1NjNGNzgiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjYzNDg3NTIzNjcsIm5hbWUiOiJoYWNrNGdvb2QifQ.X-QOzk2auZdD7r_gG5D-87rewA-v-AIeP__8QPjHFuM";
// /* ------------------------------------------------ */

// // Instanciamos el cliente 
// function makeStorageClient() { return new Web3Storage({ token: WEB3_STORAGE_TOKEN }) }

// /* Función que sube un fichero a la red IPFS
//   * @param {string} file - Ruta del fichero a subir
//   * @return {string} - CID del fichero subido
//   * Car es un tipo de fichero que contiene un conjunto de bloques de datos (carpeta dentro de IPFS)
// */
// async function write(file) {
//   var carFile = await packToFs({
//     input: file,
//     blockstore: new FsBlockStore()
//   });
//   const inStream = createReadStream(carFile.filename)
//   const car = await CarReader.fromIterable(inStream)
//   const client = makeStorageClient()
//   const cid = await client.putCar(car)
//   console.log('Stored CAR file! CID:', cid)
//   return cid;
// }

// module.exports = { write };