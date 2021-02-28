import React, { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
import Header from "../components/Header";

const LookUp = ({ portis, web3, contract, _wallet, network }) => {
  const [view, setView] = useState("address"); // address , handle
  const [platform, setPlatform] = useState(0);
  const [addressResp, setAddressResp] = useState();
  const [handleResp, setHandleResp] = useState();
  const [addressInput, setAddressInput] = useState("");
  const [handleInput, setHandleInput] = useState("");
  const [wallet, setWallet] = useState(_wallet);
  const [isSettingOpen, setSetting] = useState(false);
  useEffect(() => {
    console.log(portis, wallet, "here");
    if (portis) {
      portis.onLogin((wallet) => {
        setWallet(wallet);
      });
      if (!wallet) {
        portis.showPortis();
      }
    }
  }, [portis]);

  const LookUpData = async () => {
    setAddressResp();
    setHandleResp();
    if (view == "address" && addressInput) {
      console.log("by address lookup for ", addressInput, platform);
      const _username = await contract.methods
        .addressHandleMap(addressInput, platform)
        .call();
      setAddressResp(_username);
    }
    if (view == "handle" && handleInput) {
      console.log("by handle lookup for ", handleInput, platform);
      const _addresss = await contract.methods
        .getByHandle(platform, handleInput)
        .call();
      setHandleResp(_addresss);
    }
  };
  return (
    <div
      className="flex flex-col items-center min-h-screen py-2"
      onClick={() => isSettingOpen && setSetting(false)}
    >
      <div className="max-w-5xl w-full">
        <Header
          network={network}
          wallet={wallet}
          toggleSetting={() => setSetting((prev) => !prev)}
          isSettingOpen={isSettingOpen}
          portis={portis}
        />
        <div className="mt-10 flex items-center justify-around">
          <button
            onClick={() => setView("address")}
            className="px-5 py-3 text-2xl bg-blue-700 rounded-md text-blue-100"
          >
            Find By Address
          </button>
          <button
            onClick={() => setView("handle")}
            className="px-5 py-3 text-2xl bg-blue-700 rounded-md text-blue-100"
          >
            Find By Social Handle
          </button>
        </div>
        <div className="flex justify-center items-center mt-4">
          <input
            type="text"
            className="bg-blue-200 rounded-md placeholder-blue-700 text-blue-800 px-3 py-2"
            placeholder={view == "address" ? "address" : "handle"}
            value={view == "address" ? addressInput : handleInput}
            onChange={(e) =>
              view == "address"
                ? setAddressInput(e.target.value)
                : setHandleInput(e.target.value)
            }
          />
          <div className="ml-4">
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              class="py-2 px-3 rounded-md bg-blue-200 text-blue-800"
            >
              <option value={0}>Twitter</option>
              <option value={1}>GitHub</option>
              <option value={2}>Instagram</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={LookUpData}
            className="px-3 py-2 ml-2 bg-blue-800 text-lg text-blue-100 rounded-md flex items-center justify-center"
          >
            <FcSearch />
            <span className="ml-2">Look up</span>
          </button>
        </div>
        <div className="flex justify-center mt-5">
          {handleResp ||
            (addressResp && (
              <div className="bg-blue-200 text-blue-800 px-4 py-5 rounded-md">
                {handleResp && `Address : ${handleResp}`}
                {addressResp && `Handle : ${addressResp}`}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LookUp;
