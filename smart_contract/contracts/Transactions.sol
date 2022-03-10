//SPDX-License-Identifier: Unlicense
// Which solidity version to use
pragma solidity ^0.8.0;

// Transaction smart contract
contract Transactions {
	event Transfer (address sender, address receiver, uint amount, string message, uint256 timestamp, string keyword);

	function publishTransaction(address payable receiver, uint amount, string memory message, string memory keyword) public {
		emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
	}
}