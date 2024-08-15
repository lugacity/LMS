import React from "react";

const DashButton = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded bg-[#CC1747] px-4 py-2 transition duration-300 hover:bg-slate-200 lg:hover:bg-[#B3123F] ${className}`}
    >
      {children}
    </button>
  );
};

export default DashButton;
