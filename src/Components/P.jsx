import React from "react";

const P = ({ children, className }) => {
	return (
		<p
			className={`text-[#667185] font-poppins font-normal text-xl ${className}`}>
			{children}
		</p>
	);
};

export default P;
