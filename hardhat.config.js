require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ignition-ethers");
/** @type import('hardhat/config').HardhatUserConfig */
const SEPOLIA_PRIVATE_KEY = "";

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/Kg-QkKBYxywIbXW70OhuxDpOde_Z-YlI`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};
