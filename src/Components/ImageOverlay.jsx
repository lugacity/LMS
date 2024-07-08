import overlay from "../assets/images/overlay-img.png";

const ImageOverlay = ({ children }) => {
	return (
		<div className="bg-[#23314a] relative img-background">
			<img
				src={overlay}
				alt=""
				className="w-full h-full object-cover absolute top-0 left-0 mix-blend-overlay "
			/>
			{children}
		</div>
	);
};

export default ImageOverlay;
