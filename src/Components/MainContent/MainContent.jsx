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
      <div className="flex h-full items-end justify-end">
        <div className="h-max justify-self-end align-bottom">
          <HeroHeading>
            Expert Consultants <br className="md:hidden" /> for{" "}
            <br className="hidden md:block" /> Sustainable Success
          </HeroHeading>

          <div className="my-4 h-[1px] w-full bg-white md:mb-6 md:mt-16" />

          <div className="grid place-items-center items-center gap-y-6 lg:grid-cols-[5fr_1fr]">
            <p className="text-justify font-light text-white md:text-left md:text-2xl">
              We provide customized solutions to address commercial, technical,
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
