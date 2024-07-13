import React from "react";

const PreviewButton = ({ children }) => {
	return (
		<button className="border border-white rounded-lg  text-center cursor-pointer text-white bg-[#CC1747] py-4 px-2 gap-2 w-full font-light w-auto">
			<span className="self-end text-normal  "> {children}</span>
		</button>
	);
};

export default PreviewButton;
