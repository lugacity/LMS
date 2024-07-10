/* eslint-disable react/prop-types */
import React from "react";

const Hero = ({ videoSrc, children }) => {
	return (
		<div className="text-center bg-white/80 relative">
			<div className="w-full h-screen bg-black/40 absolute top-0 left-0 "></div>
			<div>
				<video
					src={videoSrc}
					autoPlay
					loop
					id="video-bg"
					className="w-full h-screen object-cover"></video>
			</div>
			<div className="w-full absolute top-1/4 left-0 py-0 px-12 text-left ">
				{children}
			</div>
		</div>
	);
};

export default Hero;
