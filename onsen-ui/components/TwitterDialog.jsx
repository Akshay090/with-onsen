import React, { useState } from "react";

const TwitterDialog = ({ wallet, verifyTweetAddress }) => {
  const [handle, setHandle] = useState("");
  const [tweet, setTweet] = useState("");
  const [tweetLink, setTweetLink] = useState("");
  const generateTweet = () => {
    const text = `Linking my address ${wallet} to my social handle with-onsen.`;
    setTweet(text);
    textToLink(text);
  };
  const textToLink = (text) => {
    const uri = encodeURIComponent(text);
    const link = `https://twitter.com/intent/tweet?text=${uri}`;
    setTweetLink(link);
  };
  return (
    <div>
      <div className="mt-6 mx-3 font-bold text-xl text-blue-800 ">
        Twitter Verification
      </div>
      <div className="text-center mt-4">
        <div className="flex justify-center items-center mb-4">
          <input
            className="w-40 bg-blue-300 rounded-md text-blue-900 placeholder-blue-800 outline-none px-2"
            placeholder="Twitter handle"
            type="text"
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
          />
          <button
            onClick={generateTweet}
            className="bg-blue-800 ml-3 p-1 rounded-md text-xs text-blue-100"
          >
            Generate
          </button>
        </div>
        <span className="mx-3 mt-6 text-blue-600">Tweet below text</span>
        <div>
          <textarea
            onChange={(e) => setTweet(e.target.value)}
            value={tweet}
            onBlur={() => textToLink(tweet)}
            className="mx-3 w-2/3 resize-none p-2 text-blue-600 bg-blue-100 rounded-md mt-2"
          ></textarea>
        </div>
        <a href={tweetLink} target="_blank">
          <button className="bg-blue-700 text-blue-200 mt-3 py-2 px-3 rounded-md">
            Tweet it
          </button>
        </a>
        <hr className="mt-4 border-2 border-dashed border-blue-600 mx-4 " />

        <button
          onClick={() => verifyTweetAddress(handle)}
          className="bg-blue-700 text-blue-200 mt-5 py-2 px-3 rounded-md"
        >
          Verify Tweet/Address
        </button>
      </div>
    </div>
  );
};

export default TwitterDialog;
