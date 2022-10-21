//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

// medicos asociados a ese hospital
contract service {
    //mapa para medicos autorizados

    address payable owner;

    mapping(address => uint256) private hospitals;

    mapping(address => uint256) private doctors;

    constructor() {
        owner = payable(msg.sender);
    }

    function addHospital(address _address) public {
        require(msg.sender == owner, "Only owner of the service can add a new hospital");
		require(hospitals[_address] == 0, "Hospital already exists in the system");
        hospitals[_address] = 1;
    }

    // add doctors
    function addDoctor(address _address) public {
        require(hospitals[msg.sender] == 1, "Only authorized hospital can add a new doctor");
		require(doctors[_address] == 0, "Doctor already exists in the system");
        doctors[_address] = 1;
    }

    // get doctors
    function getDoctor(address _address) public view returns (uint256) {
        return doctors[_address];
    }
}
