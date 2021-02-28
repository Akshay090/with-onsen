import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FiTwitter, FiGithub } from "react-icons/fi";
import { HiRefresh } from "react-icons/hi";
import { FcSearch } from "react-icons/fc";
import Dialog from "../components/Dialog";
import TwitterDialog from "../components/TwitterDialog";
import Header from "../components/Header";
const App = ({ portis, web3, contract, _wallet, network }) => {
  const [isSettingOpen, setSetting] = useState(false);
  const [isTwitterDialog, setTwitterDialog] = useState(false);
  const [twitterUsername, setTwitterUsername] = useState();
  const [wallet, setWallet] = useState(_wallet);
  const router = useRouter();
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
  useEffect(() => {
    if (contract && wallet) {
      loadTwitterContract();
    }
  }, [contract, wallet]);
  const verifyTweetAddress = (handle) => {
    fetch(
      "/api/tweetVerify?" +
        new URLSearchParams({
          address: wallet,
          username: handle,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        //address: "0x52f8de85d2007baf4fe07dac517b476b0c940d95"
        // status: true
        // username: "aks2899"
        // verification_url : urlhere
        console.log("handle ", data.username, "status ", data.status);
        // 0 -> Twitter
        // calling contract to update data if status true
        if (data.status) {
          console.log("for status ", data.statusj);
          contract.methods.set(wallet, 0, handle).send({ from: wallet });
          console.log("called contract");
        }
      });
  };
  const loadTwitterContract = async () => {
    const _username = await contract.methods.addressHandleMap(wallet, 0).call();
    console.log(_username, "contract twitter data");
    setTwitterUsername(_username);
  };
  const unlinkTwitter = () => {
    contract.methods.remove(wallet, 0).send({ from: wallet });
  };
  return (
    <div
      className="flex flex-col items-center min-h-screen py-2"
      onClick={() => isSettingOpen && setSetting(false)}
    >
      {isTwitterDialog && (
        <Dialog close={() => setTwitterDialog(false)}>
          <TwitterDialog
            wallet={wallet}
            verifyTweetAddress={verifyTweetAddress}
          />
        </Dialog>
      )}
      <main className="max-w-5xl w-full">
        <Header
          network={network}
          wallet={wallet}
          toggleSetting={() => setSetting((prev) => !prev)}
          isSettingOpen={isSettingOpen}
          portis={portis}
        />
        <div className="mx-2 flex items-center">
          <button
            onClick={loadTwitterContract}
            className="px-3 py-2 bg-blue-800 text-lg text-blue-100 rounded-md flex items-center justify-center"
          >
            <HiRefresh />
            <span className="ml-2">Refresh</span>
          </button>
          <button
            onClick={() => router.push("/lookup")}
            className="px-3 py-2 ml-2 bg-blue-800 text-lg text-blue-100 rounded-md flex items-center justify-center"
          >
            <FcSearch />
            <span className="ml-2">Look up</span>
          </button>
        </div>
        <section className="mt-6 flex flex-wrap items-center justify-around max-w-4xl sm:w-full">
          <div className="p-3 text-left border-4 border-blue-200 border-dashed w-96 rounded-xl ">
            <div className="p-4 stroke-2 text-blue-600 text-4xl flex justify-around">
              <FiTwitter />
              {twitterUsername && <span>{twitterUsername}</span>}
            </div>
            <button
              onClick={() => {
                twitterUsername ? unlinkTwitter() : setTwitterDialog(true);
              }}
              className="w-full rounded-lg bg-blue-500 hover:bg-blue-600 focus:outline-none px-4 py-3 flex justify-center text-xl font-semibold text-blue-100"
            >
              {twitterUsername ? (
                <span className="text-red-300">Unlink Twitter</span>
              ) : (
                <span>+ Connect Twitter</span>
              )}
            </button>
          </div>
          <div className="p-3 text-left bg-gray-400 border-4 border-blue-200 border-dashed w-96 rounded-xl ">
            <div className="p-4 stroke-2 text-blue-600 text-4xl flex justify-around">
              <FiGithub />
              <span>Adding Soon</span>
            </div>
            <button className="w-full rounded-lg bg-gray-800 hover:bg-gray-600 focus:outline-none px-4 py-3 flex justify-center text-xl font-semibold text-blue-100">
              + Connect GitHub
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
