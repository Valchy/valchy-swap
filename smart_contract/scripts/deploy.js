const hre = require('hardhat');
const fs = require('fs');
const path = require('path');

const main = async () => {
	const transactionFactory = await hre.ethers.getContractFactory('Transactions');
	const transactionContract = await transactionFactory.deploy();

	await transactionContract.deployed();
	fs.writeFileSync(
		path.join(__dirname, '../../lib/smart-contract-address.json'),
		`{
	"smart-contract-address": "${transactionContract.address}"
}`,
		{
			encoding: 'utf8',
			flag: 'w'
		}
	);

	console.log(`\nTransactions.sol deployed to: ${transactionContract.address}\n`);
};

(async () => {
	try {
		await main();
		process.exit(0);
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
})();
