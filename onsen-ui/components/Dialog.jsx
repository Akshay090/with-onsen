import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Dialog = ({ close }) => {
  return (
    <div
      className="absolute inset-0 flex justify-center items-center z-10 overflow-hidden"
      onClick={close}
    >
      <div
        className="w-full h-full  max-w-md md:max-h-96 bg-blue-200 rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end text-xl px-4 pt-3 text-blue-800">
          <AiOutlineCloseCircle onClick={close} />
        </div>
        <div className="mt-6 mx-3 font-bold text-xl text-blue-800 ">
          Twitter Verification
        </div>
        <div className="text-center mt-4">
          <span className="mx-3 mt-4 text-blue-600">Tweet below text</span>
          <div>
            <textarea className="mx-3 w-2/3 resize-none p-2 text-blue-600 bg-blue-100 rounded-md mt-2"></textarea>
          </div>
          <button className="bg-blue-700 text-blue-200 mt-3 py-2 px-3 rounded-md">
            Tweet it
          </button>
          <hr className="mt-4 border-2 border-dashed border-blue-600 mx-4 " />

          <button className="bg-blue-700 text-blue-200 mt-5 py-2 px-3 rounded-md">
            Verify Tweet/Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
