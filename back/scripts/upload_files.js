'use strict';

const {createReadStream} = require('fs');
const {CarReader} = require('@ipld/car');
const {packToFs} = require('ipfs-car/pack/fs');
const {FsBlockStore} = require('ipfs-car/blockstore/fs');
const {Web3Storage} = require('web3.storage');


/* ------- CONFIGURABLE PARAMS --------------- */
const WEB3_STORAGE_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEE1OTBhNkQ0Y0VGNWE5MWI2ODNEYTk5RkE4Rjg4ZjY0QmM1NjNGNzgiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjYzNDg3NTIzNjcsIm5hbWUiOiJoYWNrNGdvb2QifQ.X-QOzk2auZdD7r_gG5D-87rewA-v-AIeP__8QPjHFuM";
const RELATIVE_IMAGES_PATH = 'Consultas/';                //
/* ------------------------------------------------ */


function makeStorageClient() { return new Web3Storage({ token: WEB3_STORAGE_TOKEN }) }

async function storeCarFile(filename) {
  const inStream = createReadStream(filename)
  const car = await CarReader.fromIterable(inStream)
  const client = makeStorageClient()
  const cid = await client.putCar(car)
  console.log('Stored CAR file! CID:', cid)
}

async function write() {
  var car = await packToFs({
    input: `${process.cwd()}/${RELATIVE_IMAGES_PATH}`,
    output: `${process.cwd()}consultas.car`,
    blockstore: new FsBlockStore()
  });
  storeCarFile(car.filename)
}

async function main() {
  write();
}

main()