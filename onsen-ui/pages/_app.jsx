import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { getPortisWeb3, web3networks } from "../services/web3";
import ONSEN_Contract from "../contract/ONSEN.json";
const CONTRACT_ADDRESS = "0xc186f34e969b0c9084b5b5db1fcc523ef24d05a5";
import "../styles/globals.css";
import "../styles/custom.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [portis, setPortis] = useState();
  const [web3, setWeb3] = useState();
  const [wallet, setWallet] = useState();
  const [network, setNetwork] = useState();
  const [contract, setContract] = useState();

  useEffect(() => {
    const loadInitData = async () => {
      const [_portis, _web3] = getPortisWeb3();
      setPortis(_portis);
      setWeb3(_web3);
      _portis.onLogin((_wallet) => {
        setWallet(_wallet);
        console.log("wallet here", _wallet);
        router.push("/app");
      });
      const networkId = await _web3.eth.net.getId();
      const networkName = web3networks[networkId].name;
      const networkExplorer = web3networks[networkId].explorerAddress;
      setNetwork({ networkId, networkName, networkExplorer });
      // Load contract
      const instance = new _web3.eth.Contract(
        ONSEN_Contract.abi,
        CONTRACT_ADDRESS
      );
      setContract(instance);
    };
    try {
      loadInitData();
    } catch (error) {
      console.log(error, "_app");
    }
  }, []);
  return (
    <Component
      {...pageProps}
      portis={portis}
      _wallet={wallet}
      network={network}
      web3={web3}
      contract={contract}
    />
  );
}

export default MyApp;
