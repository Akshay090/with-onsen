import React, { useState } from "react";
import { useRouter } from "next/router";
import { FiTwitter, FiGithub } from "react-icons/fi";
import NotAuth from "../components/NotAuth";
import Dialog from "../components/Dialog";
const App = ({ portis, wallet, network }) => {
  const [isSettingOpen, setSetting] = useState(false);
  const [isTwitterDialog, setTwitterDialog] = useState(false);
  const router = useRouter();
  return (
    <>
      {!wallet ? (
        <NotAuth />
      ) : (
        <div
          className="flex flex-col items-center min-h-screen py-2"
          onClick={() => isSettingOpen && setSetting(false)}
        >
          {isTwitterDialog && <Dialog close={() => setTwitterDialog(false)} />}
          <main className="max-w-5xl w-full">
            <section className="flex flex-wrap justify-between mt-4 px-4">
              <span className="text-blue-500 font-bold text-2xl">ONSEN</span>
              <div className="flex">
                <div className="cursor-default bg-blue-200 p-3 rounded-md text-blue-900">
                  <div>{network.networkName}</div>
                  <div title={wallet}>
                    {wallet.substring(0, 5) +
                      "..." +
                      wallet.substring(wallet.length - 3)}
                  </div>
                </div>
                <div className="ml-3 relative">
                  <div
                    className="p-3 rounded-full bg-blue-700 absolute"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSetting((prev) => !prev);
                    }}
                  ></div>
                  {isSettingOpen && (
                    <div className="absolute top-6 left-3 bg-blue-300 rounded-md w-24 text-center overflow-hidden">
                      <div
                        onClick={() => {
                          portis.logout();
                          router.push("/");
                        }}
                        className="text-blue-800 hover:bg-blue-400"
                      >
                        Logout
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
            <section className="mt-6 flex flex-wrap items-center justify-around max-w-4xl sm:w-full">
              <div className="p-3 text-left border-4 border-blue-200 border-dashed w-96 rounded-xl ">
                <div className="p-4 stroke-2 text-blue-600 text-4xl flex justify-around">
                  <FiTwitter />
                  <span>aks2899</span>
                </div>
                <button
                  onClick={() => setTwitterDialog(true)}
                  className="w-full rounded-lg bg-blue-500 hover:bg-blue-600 focus:outline-none px-4 py-3 flex justify-center text-xl font-semibold text-blue-100"
                >
                  + Connect Twitter
                </button>
              </div>
              <div className="p-3 text-left border-4 border-blue-200 border-dashed w-96 rounded-xl ">
                <div className="p-4 stroke-2 text-blue-600 text-4xl flex justify-around">
                  <FiGithub />
                  <span>Akshay090</span>
                </div>
                <button className="w-full rounded-lg bg-blue-500 hover:bg-blue-600 focus:outline-none px-4 py-3 flex justify-center text-xl font-semibold text-blue-100">
                  + Connect GitHub
                </button>
              </div>
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default App;
