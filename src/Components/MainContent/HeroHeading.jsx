function HeroHeading({ children }) {
	return (
		<h1 className="lg:font-light font-thin font-poppins text-[2.5rem] md:text-5xl lg:text-7xl text-white text-left capitalize ">
			{children}
		</h1>
	);
}

export default HeroHeading;