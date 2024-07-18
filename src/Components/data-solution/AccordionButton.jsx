import fowardArrow from "../../assets/images/foward-arrow.png";

const AccordionButton = ({ heading, onClick }) => {
	return (
		<div
			className=" py-6 px-3 lg:py-7 lg:px-4 bg-[hsl(220,16%,96%)] flex items-center gap-8 justify-between  m-auto cursor-pointer"
			onClick={onClick}>
			<div className="   text-left   ">
				<p className="  text-[#98A2B3] font-light text-lg lg:text-3xl capitalize align-bottom  ">
					{heading}
				</p>
			</div>
			<div>
				<img src={fowardArrow} alt="" className="block w-7 lg:w-12 img-arr" />
			</div>
		</div>
	);
};

export default AccordionButton;
