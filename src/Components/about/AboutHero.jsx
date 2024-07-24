import Hero from "../Hero";
import HeroHeading from "../MainContent/HeroHeading";
import bgVideo from "../../assets/video/about-bg.mp4";

const AboutHero = () => {
  return (
    <Hero videoSrc={bgVideo}>
      <div className="flex h-full items-end justify-end">
        <div className="h-max justify-self-end align-bottom">
          <HeroHeading>About Us</HeroHeading>

          <div className="mb-6 mt-16 h-[1px] w-full bg-white" />

          <div className="">
            <p className="text-justify text-2xl font-light text-white md:text-left">
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
