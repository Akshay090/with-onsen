import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { getPortisWeb3, web3networks } from "../services/web3";
import "../styles/globals.css";
import "../styles/custom.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [portis, setPortis] = useState();
  const [wallet, setWallet] = useState();
  const [network, setNetwork] = useState();
  useEffect(() => {
    const loadInitData = async () => {
      const [_portis, _web3] = getPortisWeb3();
      setPortis(_portis);
      _portis.onLogin((_wallet) => {
        setWallet(_wallet);
        router.push("/app");
      });
      const networkId = await _web3.eth.net.getId();
      const networkName = web3networks[networkId].name;
      const networkExplorer = web3networks[networkId].explorerAddress;
      setNetwork({ networkId, networkName, networkExplorer });
      console.log(networkId, networkName, networkExplorer, "ini data");
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
      wallet={wallet}
      network={network}
    />
  );
}

export default MyApp;
