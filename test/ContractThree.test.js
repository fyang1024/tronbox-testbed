const ContractThree = artifacts.require("../contracts/ContractThree.sol");

contract('ContractThree', async () => {

    let contractThree;

    beforeEach(async () => {
        contractThree = await ContractThree.new();
    });

    it("My number is 3", async () => {
        let n = await contractThree.myNumber();
        assert.equal(n, 3, "My number wasn't 3");
    });
});