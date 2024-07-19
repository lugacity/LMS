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
		<ImageHero imageSrc={footerImg}>
			<div className="h-full flex lg:justify-end lg:items-end">
				<footer className="h-max">
					<HeroHeading>
						Interested in a Free <br className="hidden md:block " /> Introductory Call?
					</HeroHeading>

					<div className="w-full h-[1px] my-6 lg:my-16 bg-white" />

					<div className="grid items-center gap-y-7 lg:grid-cols-[5fr_1fr] place-items-center ">
						<p className="text-white text-base lg:text-2xl font-light">
							Please provide your email address. During this call, we will
							discuss your business requirements and goals, and determine how we
							can support you in reaching your objectives
						</p>
						<Button>send us a message</Button>
					</div>
					<div className="flex items-center justify-between text-white mt-14 gap-y-3 flex-wrap">
						<div>
							<SocialMediaLinks data={socialMediaData} />
						</div>
						<small className="text-sm font-poppins">
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
