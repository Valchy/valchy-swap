import transactionJSON from '../smart_contract/artifacts/contracts/Transactions.sol/Transactions.json';
import smartContractJSON from './smart-contract-address.json';

export const contractABI = transactionJSON.abi;
export const contractAddress = smartContractJSON['smart-contract-address'];
