import fowardArrow from "../../assets/images/foward-arrow.png";

const AccordionButton = ({ heading }) => {
	return (
		<div className=" py-9 px-4 bg-[#F4F5F7] flex items-center justify-between">
			<div className="   text-left   ">
				<p className="  text-[#98A2B3] font-light text-3xl capitalize align-bottom  ">
					{heading}
				</p>
			</div>
			<div>
				<img src={fowardArrow} alt="" className="block  w-14" />
			</div>
		</div>
	);
};

export default AccordionButton;
