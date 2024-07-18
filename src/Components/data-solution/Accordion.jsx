import { useState } from "react";
import AccordionButton from "./AccordionButton";
import { dataManagement } from "./accordion";
import AccordionSlide from "./AccordionSlide";
import AccordionContent from "./AccordionContent";

function Accordion() {
	const [datas, setData] = useState(dataManagement);
	const handleClick = (title) => {
		const newdata = datas.map((data) => {
			if (data.heading === title) {
				return { ...data, isOpen: true };
			}
			return { ...data, isOpen: false };
		});
		setData(newdata);
	};
	return (
		<div className="parent h-fit ">
			<div className="baby lg:px-52 lg:p-0">
				<div className=" accordion md:flex items-center justify-center  flex-nowrap   m-auto  py-0">
					<div className=" ">
						{/* <AccordionSlide> */}
						<div className="flex gap-4 flex-col ">
							{datas.map((data) => (
								<div
									key={data.heading}
									className={`${
										data.isOpen &&
										"flex-grow w-full md:w-max accord-button flex items-center justify-center"
									}`}>
									{!data.isOpen && (
										<AccordionButton
											heading={data.heading}
											onClick={() => handleClick(data.heading)}
										/>
									)}
									{data.isOpen && (
										<AccordionContent
											src={data.img}
											heading={data.heading}
											description={data.description}
										/>
									)}
								</div>
							))}
						</div>
						{/* </AccordionSlide> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Accordion;
