import React from "react";

const Header = ({ network, wallet, toggleSetting, isSettingOpen, portis }) => {
  return (
    <section className="flex flex-wrap justify-between mt-4 px-4">
      <span className="text-blue-500 font-bold text-2xl">ONSEN</span>
      <div className="flex">
        <div className="cursor-default bg-blue-200 p-3 rounded-md text-blue-900">
          <div>{network?.networkName}</div>
          <div title={wallet}>
            {wallet &&
              wallet.substring(0, 5) +
                "..." +
                wallet.substring(wallet.length - 3)}
          </div>
        </div>
        <div className="ml-3 relative">
          <div
            className="p-3 rounded-full bg-blue-700 absolute"
            onClick={(e) => {
              e.stopPropagation();
              toggleSetting();
            }}
          ></div>
          {isSettingOpen && (
            <div className="absolute cursor-default top-6 left-3 bg-blue-300 rounded-md w-24 text-center overflow-hidden">
              <div
                onClick={() => {
                  portis.logout();
                  router.push("/");
                }}
                className="text-blue-800 hover:bg-blue-400"
              >
                Logout
              </div>
              <div
                onClick={() => {
                  portis.showPortis();
                }}
                className="text-blue-800 hover:bg-blue-400"
              >
                Open Portis
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Header;
