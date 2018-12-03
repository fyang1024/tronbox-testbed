const ContractOne = artifacts.require("../Contract/ContractOne.sol");
const ContractTwo = artifacts.require("../contracts/ContractTwo.sol");

module.exports = function(deployer) {
    deployer.deploy(ContractOne, "TAKP3YdojyaVxNunHFmHwF467H3KXaMj64").then (function() {
        console.log("ContractOne.address", ContractOne.address);
        deployer.deploy(ContractTwo, ContractOne.address).then (function() {
            console.log("ContractTwo.address", ContractTwo.address);
        });
    });
}