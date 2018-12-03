pragma solidity ^0.4.23;

contract ContractTwo {

  address public contractA;

  constructor(address _contractA) public {
    contractA = _contractA;
  }


  function myNumber() public pure returns(uint256) {
    return 2;
  }
}
