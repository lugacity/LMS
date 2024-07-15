import { dataManagement } from "../../assets/lib/data";
import AccordionButton from "./AccordionButton";

function Accordion() {
	return (
		<div className="max-w-lg -rotate-90 gap-4">
			<div className="flex gap-4 flex-col items-stretch">
				{dataManagement.map((data) => (
					<AccordionButton key={data.heading} heading={data.heading} />
				))}
			</div>
		</div>
	);
}

export default Accordion;
