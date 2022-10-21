'use strict';

const {createReadStream} = require('fs');
const {CarReader} = require('@ipld/car');
const {packToFs} = require('ipfs-car/pack/fs');
const {FsBlockStore} = require('ipfs-car/blockstore/fs');
const {Web3Storage} = require('web3.storage');


/* ------- CONFIGURABLE PARAMS --------------- */
const WEB3_STORAGE_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEE1OTBhNkQ0Y0VGNWE5MWI2ODNEYTk5RkE4Rjg4ZjY0QmM1NjNGNzgiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjYzNDg3NTIzNjcsIm5hbWUiOiJoYWNrNGdvb2QifQ.X-QOzk2auZdD7r_gG5D-87rewA-v-AIeP__8QPjHFuM";
/* ------------------------------------------------ */

function makeStorageClient() { return new Web3Storage({ token: WEB3_STORAGE_TOKEN }) }

async function write(file) {
  var car = await packToFs({
    input: file,
    blockstore: new FsBlockStore()
  });
  const inStream = createReadStream(car.filename)
  const car2 = await CarReader.fromIterable(inStream)
  const client = makeStorageClient()
  const cid = await client.putCar(car2)
  console.log('Stored CAR file! CID:', cid)
  return cid;
}

async function main() {
  write("./scripts/file.txt");
}

module.exports = { write };