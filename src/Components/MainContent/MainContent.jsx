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
			<HeroHeading>
				Expert Consultants for <br /> Sustainable Success
			</HeroHeading>

			<div className="w-full h-[1px] mt-16 mb-6 bg-white" />

			<div className="grid items-center grid-cols-[5fr_1fr] place-items-center ">
				<p className="text-white text-2xl font-light">
					We provide customised solutions to address commercial, technical, and
					operational challenges for sustained profitability. Our certified
					professionals cover various disciplines, including Product Management,
					Data Analytics, and more.
				</p>
				<Button>Contact Us</Button>
			</div>
		</Hero>
	);
};

export default MainContent;
