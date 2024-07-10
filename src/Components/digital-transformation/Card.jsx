import React from "react";

const Card = ({ heading, children }) => {
	return (
		<article className="py-10 px-9 rounded bg-[#FAFCFF] space-y-8 w-full basis-full ">
			<h3 className="capitalize text-[#667185] text-3xl ">{heading}</h3>
			<ul className=" list-disc *:text-[#667185] *:text-lg *:ml-6 space-y-4">
				{children}
			</ul>
		</article>
	);
};

export default Card;
