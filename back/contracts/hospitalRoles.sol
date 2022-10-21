//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// medicos asociados a ese hospital
contract hospitales {
    //mapa para medicos autorizados

    address payable owner;

    mapping(address => uint256) private hospital;

    mapping(address => uint256) private medicos;

    constructor() {
        owner = payable(msg.sender);
    }

    function addHospital(address _address) public {
        require(msg.sender == owner, "Only owner can add admin");
        hospital[_address] = 1;
    }

    // add doctors
    function addMedico(address _address) public {
        require(hospital[msg.sender] == 1, "Only hospital can add admin");
        medicos[_address] = 1;
    }

    // get doctors
    function getMedico(address _address) public view returns (uint256) {
        return medicos[_address];
    }
}
