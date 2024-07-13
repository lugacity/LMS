import React from "react";

const Slide = ({ heading, text }) => {
	return (
		<article className="px-6 lg:px-10 text-left text-[#667185] h-full py-8">
			<p className=" text-2xl font-light font-poppins">{heading}</p>
			<p className="text-xl font-light font-poppins mt-4">{text}</p>
		</article>
	);
};

export default Slide;
