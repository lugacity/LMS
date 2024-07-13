import React from "react";
import "./MainContent.css";
import bgVideo from "../../assets/video/homeBG.mp4";
import Hero from "../Hero";
import HeroHeading from "./HeroHeading";
// import arrow from "../../assets/images/arrow-up.png";
import Button from "../Button";
const MainContent = () => {
	return (
		<Hero videoSrc={bgVideo}>
			<div className="flex items-end justify-end h-full ">
				<div className="h-max align-bottom justify-self-end">
					<HeroHeading>
						Expert Consultants <br className="md:hidden" /> for{" "}
						<br className="hidden md:block" /> Sustainable Success
					</HeroHeading>

					<div className="w-full h-[1px] my-4 md:mt-16 md:mb-6 bg-white" />

					<div className="grid items-center lg:grid-cols-[5fr_1fr] place-items-center gap-y-6 ">
						<p className="text-white md:text-2xl font-light">
							We provide customised solutions to address commercial, technical,
							and operational challenges for sustained profitability. Our
							certified professionals cover various disciplines, including
							Product Management, Data Analytics, and more.
						</p>
						<Button>Contact Us</Button>
					</div>
				</div>
			</div>
		</Hero>
	);
};

export default MainContent;
