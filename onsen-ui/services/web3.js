import Web3 from "web3";

export const getPortisWeb3 = () => {
  const Portis = require("@portis/web3");
  try {
    const portis = new Portis(
      "68d24ad4-cfbd-4575-997c-ed6de82a1ab7",
      "rinkeby"
    );
    const web3 = new Web3(portis.provider);
    return [portis, web3];
  } catch (error) {
    console.log("web3.js err", error);
  }
};

export const web3networks = {
  1: {
    name: "Ethereum",
    explorerTx: "https://etherscan.io/tx",
    explorerAddress: "https://etherscan.io/address",
  },
  3: {
    name: "Ethereum (ropsten)",
    explorerTx: "https://ropsten.etherscan.io/tx",
    explorerAddress: "https://ropsten.etherscan.io/address",
  },
  4: {
    name: "Ethereum (rinkeby)",
    explorerTx: "https://blockscout.com/eth/rinkeby/tx",
    explorerAddress: "https://blockscout.com/eth/rinkeby/address",
  },
  5: {
    name: "Ethereum (goerli)",
    explorerTx: "https://blockscout.com/eth/goerli/tx",
    explorerAddress: "https://blockscout.com/eth/goerli/address",
  },
  42: {
    name: "Ethereum (kovan)",
    explorerTx: "https://blockscout.com/eth/kovan/tx",
    explorerAddress: "https://blockscout.com/eth/kovan/address",
  },
};
