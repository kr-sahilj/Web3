//SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

contract fallback_receive{

    fallback() external payable {

    }

    receive() external payable {
 
    }

    function checkBal() public view returns(uint){
        return address(this).balance;
    }
    // function getData() public view returns(){
    //     return address(this).data;
    // }
}