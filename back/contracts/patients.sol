//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// aqui van CID con la CIPA
import "./service.sol";

contract patients is service {
    //address payable owner;
    // mapa con los cipas que contiene todos los cids
    // uint256 es cipa, array(string) de cids

    mapping(uint256 => string[]) private files;

    constructor() {
        owner = payable(msg.sender);
    }

    //add file
    function addFile(uint256 _cipa, string memory _cid) public {
        require(
            getDoctor(msg.sender) == 1,
            "Only authorized doctor can add file"
        );
		for (uint256 i = 0; i < files[_cipa].length; i++) {
            if (keccak256(abi.encodePacked(files[_cipa][i])) ==
                keccak256(abi.encodePacked(_cid))) {
                revert("File already exists");
            }
        }
        files[_cipa].push(_cid);
    }

    //get file
    function getFile(uint256 _cipa) public view returns (string[] memory) {
        return files[_cipa];
    }
}
