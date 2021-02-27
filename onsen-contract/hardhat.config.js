require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const PRIVATE_KEY = require("./privateKeys");

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: "0.7.3",
  defaultNetwork: "hardhat",

  networks: {
    kovan: {
      url: "https://kovan.infura.io/v3/c2987e998fe648048c35552b41537ce8",
      accounts: [`0x${PRIVATE_KEY}`],
    },
    matic: {
      url: "https://rpc-mumbai.matic.today",
      accounts: [`0x${PRIVATE_KEY}`],
      chainId: 80001,
    },
  },
};
