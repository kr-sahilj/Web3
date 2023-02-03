// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Counter {
    uint public count;

    // constructor() public {
    //     count=9;
    // }
    function getCount() public view returns(uint){
        return count;
    }

    function setCount(uint _count) public {
        count=_count;
    }

    function incrementCount() public{
        count+=1;
    }
    
}