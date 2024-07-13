import React from "react";
import { DarkLogo } from "../Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";

const AviNav = () => {
	return (
		<nav className="flex items-center justify-between py-4 px-6 lg:px-20 ">
			<div>
				<DarkLogo />
			</div>
			<button>
				<FontAwesomeIcon icon={faHamburger} />
			</button>
			<div className="md:flex items-center gap-4 hidden">
				<ul className="*:text-[#23314A] flex items-center gap-4 *:capitalize *:cursor-pointer ">
					<li className="relative  after:absolute after:left-0 after:w-full after:h-[2px] after:bg-[#CC1747] contents-[''] after:bottom-0 ">
						home
					</li>
					<li>login</li>
				</ul>
				<button className=" rounded-lg px-4 py-2 capitalize text-[#FFEBF0] bg-[#CC1747] ">
					contact
				</button>
			</div>
		</nav>
	);
};

export default AviNav;
