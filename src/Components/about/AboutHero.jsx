import Hero from "../Hero";
import HeroHeading from "../MainContent/HeroHeading";
import bgVideo from "../../assets/video/about-bg.mp4";

const AboutHero = () => {
  return (
    <Hero videoSrc={bgVideo} className={"items-end pb-16 md:pb-24"}>
      <div className="mb-6 md:mb-0">
        <HeroHeading>About Us</HeroHeading>

        <div className="mb-4 mt-10 h-[1px] w-full bg-white md:mb-6 md:mt-16" />

        <div className="">
          <p className="text-[14px] text-base font-light text-white md:text-left lg:text-[18px]">
            We are a highly dedicated team of business and technology
            consultants offering expert guidance and practical support to
            established and growing companies.
          </p>
        </div>
      </div>
    </Hero>
  );
};

export default AboutHero;
