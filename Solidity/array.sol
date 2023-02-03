// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Array {
    uint[] public uintArray = [1,2,3];
    uint256[][] public array2D = [[1,2,3], [7,8,9]];
    string[] public stringArray = ["sahil", "jaiswal", "daman"];
    string[] public values;

    function addValue(string memory _value) public {
        values.push(_value);
    }

    function valueCount() public view returns(uint256){
        return values.length;
    }
}