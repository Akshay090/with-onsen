import Head from "next/head";

export default function Home({ portis }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>ONSEN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 pl-20 md:px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            ONSEN
          </a>
        </h1>

        <p className="mt-1 text-2xl">ON Chain Social Entity</p>
        <p className="mt-1 text-2xl">
          Connect Social Media handles with your ethereum address
        </p>
        <button
          onClick={() => {
            portis.showPortis();
          }}
          className="mt-4 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-blue-100 font-medium rounded-md"
        >
          Get Started
        </button>

        <h2 className="text-2xl text-blue-500 mt-4 w-full text-left font-semibold">
          Goals:
        </h2>
        <div className="flex flex-wrap items-center justify-around max-w-4xl sm:w-full">
          <div className="p-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Empowers Social Tokens</h3>
            <p className="mt-4 text-xl">
              Bring more visibility to the supporters of the community.
            </p>
          </div>

          <div className="p-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Reward Influencers</h3>
            <p className="mt-4 text-xl">
              Send funds directly to the supporters
            </p>
          </div>
        </div>

        <h2 className="text-2xl text-blue-500 mt-4 w-full text-left font-semibold">
          Usage:
        </h2>
        <div className="flex flex-wrap items-center justify-around max-w-4xl sm:w-full">
          <div className="p-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">DAPP/Token Creators</h3>
            <p className="mt-4 text-xl">
              Know social media handles from ethereum address and vice versa.
            </p>
          </div>

          <div className="p-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Social Media Influencers</h3>
            <p className="mt-4 text-xl">
              Link your account get rewards from your community.
            </p>
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        Powered by{" "}
        <a
          className="flex items-center justify-center"
          href="https://docs.portis.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/portis_logo.svg" alt="Portis Logo" className="h-7 ml-2" />
        </a>
        <span className="ml-2">and</span>
        <a
          className="flex items-center justify-center"
          href="https://docs.matic.network/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/matic-logo.svg" alt="MATIC Logo" className="h-7 ml-2" />
        </a>
      </footer>
    </div>
  );
}
