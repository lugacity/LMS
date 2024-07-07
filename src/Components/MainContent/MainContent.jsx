import React from "react";
import "./MainContent.css";
import bgVideo from "../../assets/homeBG.mp4";
import Hero from "../Hero";
const MainContent = () => {
	return (
		<Hero videoSrc={bgVideo}>
			<h1 className="font-light font-sans text-7xl text-white text-left  ">
				Expert Consultants for <br /> Sustainable Success
			</h1>

			<div className="w-full h-[1px] mt-16 mb-6 bg-white" />

			<div className="grid items-center grid-cols-[5fr_1fr] place-items-center ">
				<p className="text-white font-sans">
					We provide customised solutions to address commercial, technical, and
					operational challenges for sustained profitability. Our certified
					professionals cover various disciplines, including Product Management,
					Data Analytics, and more.
				</p>
				<button className="border border-white rounded text-base cursor-pointer bg-transparent justify-self-end text-white py-2 px-3 ">
					Contact Us
				</button>
			</div>
		</Hero>
	);
};

export default MainContent;
