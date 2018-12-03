const ContractOne = artifacts.require("../Contract/ContractOne.sol");
const ContractTwo = artifacts.require("../contracts/ContractTwo.sol");

module.exports = function(deployer) {
    deployer.deploy(ContractOne).then (function() {
        console.log("ContractOne.address", ContractOne.address);
        deployer.deploy(ContractTwo, ContractOne.address).then (function() {
            console.log("ContractTwo.address", ContractTwo.address);
        });
    });
}