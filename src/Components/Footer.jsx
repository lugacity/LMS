import React from "react";
import ImageHero from "./ImageHero";
import footerImg from "../assets/images/footer-img.jpg";
import HeroHeading from "./MainContent/HeroHeading";
import Button from "./Button";
import { WhiteLogo } from "./Logo";

const Footer = () => {
	return (
		<ImageHero imageSrc={footerImg}>
			<div className="h-full flex justify-end items-end">
				<footer className="h-max">
					<HeroHeading>
						Interested in a Free <br /> Introductory Call?
					</HeroHeading>

					<div className="w-full h-[1px] mt-16 mb-6 bg-white" />

					<div className="grid items-center grid-cols-[5fr_1fr] place-items-center ">
						<p className="text-white text-2xl font-light">
							Please provide your email address. During this call, we will
							discuss your business requirements and goals, and determine how we
							can support you in reaching your objectives
						</p>
						<Button>send us a message</Button>
					</div>
					<div className="flex items-center justify-between text-white mt-14">
						<div>socials</div>
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
