import React, { Children, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Dialog = ({ close, children }) => {
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

        {children}
      </div>
    </div>
  );
};

export default Dialog;
