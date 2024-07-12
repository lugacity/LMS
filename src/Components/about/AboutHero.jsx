import Hero from "../Hero";
import HeroHeading from "../MainContent/HeroHeading";
import bgVideo from "../../assets/video/about-bg.mp4";

const AboutHero = () => {
	return (
		<Hero videoSrc={bgVideo}>
			<div className="flex items-end justify-end h-full ">
				<div className="h-max align-bottom justify-self-end">
					<HeroHeading>About Us</HeroHeading>

					<div className="w-full h-[1px] mt-16 mb-6 bg-white" />

					<div className="grid items-center grid-cols-[5fr_1fr] place-items-center ">
						<p className="text-white text-2xl font-light">
							We are a highly dedicated team of business and technology
							consultants offering expert guidance and practical support to
							established and growing companies.
						</p>
					</div>
				</div>
			</div>
		</Hero>
	);
};

export default AboutHero;
