const ContractTwo = artifacts.require("../contracts/ContractTwo.sol");

contract('ContractTwo', async () => {

    let contractTwo;

    beforeEach(async () => {
        contractTwo = await ContractTwo.deployed();
    });

    it("My number is 2", async () => {
        let n = await contractTwo.myNumber();
        assert.equal(n, 2, "My number wasn't 2");
    });
});