import React from "react";
import whiteLogo from "../assets/images/logo_white.png";
import darkLogo from "./Assets/black-logo.png";
export const WhiteLogo = () => {
	return (
		<img
			src={whiteLogo}
			alt=""
			className="group-hover:hidden block cursor-pointer lg:w-1/6"
		/>
	);
};

export const DarkLogo = () => {
	return (
		<img
			src={darkLogo}
			alt=""
			className="group-hover:block hidden cursor-pointer"
		/>
	);
};
