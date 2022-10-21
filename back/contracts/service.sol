//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract service {
    
    // Variable para posteriormente la direccion del creador del contrato
    address payable owner;
    // Mapa clave-valor para almacenar los hospitales, 1 si es autorizado y 0 si no lo esta.
    mapping(address => uint256) private hospitals;
    // Mapa clave-valor para almacenar los doctores, 1 si es autorizado y 0 si no lo esta.
    mapping(address => uint256) private doctors;

    // Constructor que inicializa la variable owner con la direccion del creador del contrato
    constructor() {
        owner = payable(msg.sender);
    }

    /*
     *  Función que añade un hospital al sistema, además se comprueba que el que la llama es el creador del contrato
     *  puesto que nadie (que no sea el owner) puede añadir un hospital al sistema.
     *  Por ultimo, se verifica que el hospital no existe en el sistema.
     */
    function addHospital(address _address) public {
        require(
            msg.sender == owner,
            "Only owner of the service can add a new hospital"
        );
        require(
            hospitals[_address] == 0,
            "Hospital already exists in the system"
        );
        hospitals[_address] = 1;
    }

    /*
     *  Función que añade un doctor al sistema, además se comprueba que el que la llama es un hospital autorizado
     *  ya que solo los hospitales pueden añadir doctores al sistema.
     *  Por ultimo, se verifica que el doctor no existe en el sistema.
     */
    function addDoctor(address _address) public {
        require(
            hospitals[msg.sender] == 1,
            "Only authorized hospital can add a new doctor"
        );
        require(doctors[_address] == 0, "Doctor already exists in the system");
        doctors[_address] = 1;
    }

    /*
     *  Función que devuelve si un doctor esta autorizado o no lo esta.
     */
    function getDoctor(address _address) public view returns (uint256) {
        return doctors[_address];
    }
}
