//SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

// contract C {
//     uint[] s;
//     uint[] t;

//     constructor() {
//         s.push(0x23);
//         t.push(0x24);
//     }

//     function g() internal returns(uint[] storage){
//         s.pop();
//         return t;
//     }

//     function f() public returns (uint[] memory){

//         (s.push(), g()[0]) = (0x42, 0x17);

//         s.push();
//         return s;
//     }
// }

contract C {
    bytes x = "012345678901234567890123456789";

    function test() external returns(uint) {
        (x.push(), x.push()) = (0x01, 0x02);
        return x.length;
    }
}