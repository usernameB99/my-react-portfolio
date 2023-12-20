import React from "react";
import catTyping from "../content/catTyping.gif";

const Popup = ({ onClose }) => {
  return (
    <div
      className="min-w-screen backdrop-blur-sm h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none"
      id="modal-id"
    >
      <div className="w-full max-w-sm p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-black border-4 border-cyan-400">
        <div>

          <div className="text-center p-5 flex-auto justify-center items-center">
            <img className="w-40 mx-auto block" src={catTyping} alt="" />

            <h3 className="text-xl font-bold py-4 text-white">
              Thank you for your interest in this project.
            </h3>
            <p className="text-sm text-gray-500 px-8">
              this project is in construction and will be released after finish.
              The code can be shown in an interview{" "}
            </p>
          </div>

          <div className="p-3 mt-2 text-center space-x-4 md:block">
            <button
              onClick={onClose}
              className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
