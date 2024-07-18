import ImageHero from "../ImageHero";

const AccordionContent = ({ src, heading, description }) => {
	return (
		<div className="text-center bg-white/80 relative accordion-content">
			<div className="w-full h-full bg-black/50 absolute top-0 left-0 overflow-hidden"></div>
			<div>
				<img
					src={src}
					className=" accordion-img object-cover h-[400px] w-full md:w-[400px] lg:h-[500px] lg:w-[500px]"
					width={500}
					height={500}
				/>
			</div>
			<div className="w-full absolute top-0 left-0 py-20 lg:px-12 px-6 h-full  text-left text-white flex items-center justify-center ">
				<div className="space-y-10 py-14">
					<p className="font-light text-lg lg:text-2xl w-fit  capitalize">
						{heading}
					</p>
					<p className=" font-poppins text-base lg:text-xl max-w-[450px] m-auto">
						{description}
					</p>
				</div>
			</div>
		</div>
	);
};

export default AccordionContent;
