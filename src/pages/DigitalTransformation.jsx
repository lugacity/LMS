import React from "react";
import ImageHero from "../Components/ImageHero";
import img from "../assets/images/digital-hero.png";
import HeroHeading from "../Components/MainContent/HeroHeading";
import Card from "../Components/digital-transformation/Card";
import { digitalData } from "../assets/lib/data";
import ImpactCard from "../Components/digital-transformation/ImpactCard";

const DigitalTransformation = () => {
	return (
		<>
			<ImageHero imageSrc={img}>
				<div className="flex gap-8 items-center lg:mt-0 mt-32 ">
					<div className="w-36 h-px bg-white hidden lg:block" />
					<HeroHeading>
						digital <br /> transformation
					</HeroHeading>
				</div>
				<div className="w-full h-px bg-white lg:hidden block mt-6 mb-8" />
				<p className="text-white md:text-xl text-base  lg:text-2xl max-w-[45.375rem] ml-auto mt-0 lg:mt-32 ">
					<span className="font-medium">
						Navigating the Future with Avenue Impact Consulting
					</span>
					<span className="font-light italic">
						{" "}
						In the dynamic landscape of today, Digital Transformation is not
						merely a choice;{" it’s"} a necessity. Avenue Impact Consulting
						stands at the forefront of empowering organizations to embrace the
						future through comprehensive Digital Transformation Services
					</span>
				</p>
			</ImageHero>
			<section className="py-24 lg:px-20 px-0">
				<h2 className="text-[#3A4C6C] lg:text-[2.5rem] lg:font-bold lg:px-0 px-6 md:text-3xl text-2xl font-light font-poppins ">
					Our Digital Transformation <br /> Offerings{" "}
				</h2>
				<div className="mt-10">
					<div className="hidden   md:grid  md:grid-cols-2 lg:grid-cols-3 md:gap-6 overflow-hidden">
						{digitalData.map((item) => (
							<Card key={item.heading} heading={item.heading}>
								{item.lists.map((list, i) => (
									<li key={i} className="font-poppins">
										{list}
									</li>
								))}
							</Card>
						))}
					</div>
				</div>
			</section>
			<section className="md:py-24 md:px-20">
				<h2 className="text-[#3A4C6C] text-[2.5rem] font-bold font-poppins">
					Our Digital Transformation <br /> Offerings{" "}
				</h2>
				<div className="grid md:grid-cols-2 gap-0 mt-10">
					<ImpactCard
						heading={"Expertise"}
						number={"01"}
						className={"bg-[#FAFCFF]"}>
						Our team comprises seasoned experts with a proven track record in
						facilitating successful digital transformations.
					</ImpactCard>
					<ImpactCard
						heading={"	Custom Solution"}
						number={"02"}
						className={"bg-[#fafcff80]"}>
						We recognize that each organization’s journey is unique. Our
						solutions are tailored to meet your specific challenges and
						aspirations.
					</ImpactCard>
					<ImpactCard
						heading={"	Result-Oriented Approach"}
						number={"03"}
						className={"bg-[#fafcff80]"}>
						We focus on delivering measurable results and tangible business
						outcomes through our digital transformation initiatives.
					</ImpactCard>
					<ImpactCard
						heading={"Collaboration"}
						number={"04"}
						className={"bg-[#FAFCFF]"}>
						Working closely with your teams ensures alignment between digital
						strategies and broader business objectives.
					</ImpactCard>
				</div>
			</section>
		</>
	);
};

export default DigitalTransformation;
