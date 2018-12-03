const ContractOne = artifacts.require("../contracts/ContractOne.sol");

contract('ContractOne', async () => {

    let contractOne;

    beforeEach(async () => {
        contractOne = await ContractOne.deployed();
    });

    it("My number is 1", async () => {
        let n = await contractOne.myNumber();
        assert.equal(n, 1, "My number wasn't 1");
    });
});