import React from "react";
import ImageHero from "./ImageHero";
import footerImg from "../assets/images/footer-img.jpg";
import HeroHeading from "./MainContent/HeroHeading";
import Button from "./Button";
import { WhiteLogo } from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialMediaLinks, { socialMediaData } from "./SocialMediaLink";

const Footer = () => {
  return (
    <ImageHero imageSrc={footerImg} className={"items-start md:items-end"}>
      <div className="flex h-full lg:items-end lg:justify-end">
        <footer className="h-max">
          <HeroHeading>
            Interested in a Free <br className="hidden md:block" /> Introductory
            Call?
          </HeroHeading>

          <div className="my-6 h-[2px] w-full bg-white lg:mb-8 lg:mt-12" />

          <div className="grid place-items-center items-start gap-y-5 md:mb-0 lg:grid-cols-[5fr_1fr]">
            <p className="text-sm font-light text-white md:text-lg">
              Please provide your email address. During this call, we will
              discuss your business requirements and goals, and determine how we
              can support you in reaching your objectives
            </p>
            <Button>send us a message</Button>
          </div>
          <div className="mt-28 flex flex-wrap items-center justify-between gap-y-4 text-white md:mt-10">
            <div>
              <SocialMediaLinks data={socialMediaData} />
            </div>
            <small className="text-nowrap font-poppins text-sm lg:text-wrap">
              © 2024 Avenue Impact Limited. All rights reserved
            </small>
            <WhiteLogo />
          </div>
        </footer>
      </div>
    </ImageHero>
  );
};

export default Footer;
