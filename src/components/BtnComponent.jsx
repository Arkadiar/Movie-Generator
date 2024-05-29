import React from "react";

function BtnComponent({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="text-2xl bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded "
    >
      {children}
    </button>
  );
}

export default BtnComponent;
