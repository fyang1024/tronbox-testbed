pragma solidity ^0.4.23;

contract ContractTwo {

  address public contractOne;

  constructor(address _contractOne) public {
    contractOne = _contractOne;
  }


  function myNumber() public pure returns(uint256) {
    return 2;
  }
}
