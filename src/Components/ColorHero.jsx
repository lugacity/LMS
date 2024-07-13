import React from "react";

const ColorHero = ({ children, backgroundColor }) => {
	return (
		<div className={`relative bg-${backgroundColor} h-screen text-white`}>
			<div className="object-cover absolute text-black top-0 left-0 w-full h-full bg-white/50">
				{children}
            
            </div>
		</div>
	);
};

export default ColorHero;
