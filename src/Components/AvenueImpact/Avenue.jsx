import overlay from "../../assets/images/overlay-img.png";

const Avenue = ({ img, number, heading, text }) => {
	return (
		<div className="relative rounded-3xl h-[350px] w-[350px] overflow-hidden group">
			<img src={img} alt={heading} />
			<div className="group-hover:bg-[#CC1747] bg-[#FAFCFF] rounded-l-3xl rounded-tr-3xl absolute bottom-0 left-0  max-w-[320px] overflow-hidden">
				<div className="relative ">
					<img
						src={overlay}
						alt="Overlay"
						className="w-full h-full object-cover absolute top-0 left-0 mix-blend-overlay"
					/>
					<div className="relative z-10 px-6 py-4 ">
						<p className="group-hover:text-[#FF7EA0] text-[#D6E3FA] font-light text-xl">
							{number}
						</p>
						<p className="text-2xl text-[#23314A] group-hover:text-[#FFEBF0] font-poppins font-light mt-1 mb-4 ">
							{heading}
						</p>
						<p className="text-lg font-light text-[#FF7EA0] opacity-0 invisible h-0 group-hover:visible group-hover:opacity-100 group-hover:h-auto transition-all ease-linear duration-300">
							{text}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Avenue;
