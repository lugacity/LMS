import React from "react";

const ImageHero = ({ children, imageSrc }) => {
	return (
		<div className="text-center bg-white/80 relative">
			<div className="w-full h-screen bg-black/40 absolute top-0 left-0 "></div>
			<div>
				<img src={imageSrc} className="w-full h-screen object-cover" />
			</div>
			<div className="w-full absolute top-0 left-0 py-20 lg:px-12 px-6 h-full  text-left ">
				{children}
			</div>
		</div>
	);
};

export default ImageHero;
