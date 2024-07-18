import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { DarkLogo, WhiteLogo } from "../Logo";
import navImg from "../../assets/images/navImg.png";
import mobile from "../../assets/images/mobile-dark.png";
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faTwitter,
	faInstagram,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons/faClose";

const Navbar = () => {
	// const [enterNav, setEnterNa] = useState("Home");
	const [dropdown, setDropDown] = useState(false);
	const [showNav, setShowNav] = useState(false);
	const handleNav = () => {
		setShowNav((prev) => !prev);
		setDropDown((prev) => !prev);
	};
	const menus = [
		{
			path: "/",
			label: "Home",
		},
		{
			path: "/about",
			label: "About Us",
		},
	];

	return (
		<div className="absolute top-0 left-0 z-10 w-full  group">
			<div className="flex justify-between px-12 py-4   transition-all ease-linear duration-300 group-hover:bg-white">
				<div className="nav-logo">
					<WhiteLogo className={"group-hover:hidden lg:w-1/6 block"} />
					<DarkLogo className={"group-hover:block hidden "} />
				</div>
				<div
					className={` absolute w-full md:w-auto ${
						showNav
							? "translate-x-0 transition-transform duration-150 ease-linear"
							: "translate-x-full transition-transform duration-150 ease-linear"
					} md:translate-x-0 md:pb-0 pb-12 bg-white md:bg-transparent top-0 left-0 md:relative  md:flex gap-6`}>
					<div className="md:hidden flex justify-between py-6 px-12 ">
						<img src={mobile} alt="mobile logo" />
						<button
							className="  md:hidden  text-2xl text-[rgb(35,49,74)] inline-flex items-center bg-transparent "
							onClick={() => setShowNav((prev) => !prev)}>
							<FontAwesomeIcon icon={faClose} />
						</button>
					</div>
					<ul className="flex md:flex-row flex-col px-12 md:px-0 items-start md:items-center gap-6 md:*:text-white text-[#23314A]">
						{menus.map((menu) => {
							return (
								<li
									key={menu}
									className="transition-all duration-150 relative after:absolute after:contents-[''] after:bg-red-500 after:w-0 after:block after:h-[2px] after:left-0 hover:after:w-full after:transition-[width] after:ease-in after:duration-100 after:m-auto"
									onClick={() => {
										setDropDown(false);
										setShowNav(false);
									}}>
									<NavLink
										to={menu.path}
										className={"group-hover:text-[#23314A]"}>
										{menu.label}
									</NavLink>
								</li>
							);
						})}
						<div>
							<li
								className="transition-all duration-150  md:text-white text-[#23314A] group-hover:text-[#23314A] service  cursor-pointer space-x-2 flex items-center "
								onClick={() => setDropDown((prev) => !prev)}>
								<span className="relative after:absolute after:contents-[''] after:bg-red-500 after:w-0 after:block after:h-[2px] after:left-0 hover:after:w-full after:transition-[width] after:ease-in after:duration-100 after:m-auto m-auto ">
									Services
								</span>
								<span
									className={`inline-flex   transition-transform ease-linear duration-150  mr-auto ${
										dropdown ? " rotate-180  w-min" : " ease-in  w-min"
									}`}>
									<FontAwesomeIcon icon={faChevronDown} />
								</span>
							</li>
						</div>
						{dropdown && (
							<div className="md:hidden mt-5 py-3 text-left transition-all duration-150 ease-linear border-t border-t-[#D6E3FA] w-full">
								<ul className=" space-y-3 pl-12 mt-8 *:cursor-pointer *:text-[#23314A] font-poppins *:capitalize">
									<li
										onClick={handleNav}
										className="transition-all duration-150 relative after:absolute after:contents-[''] after:bg-red-500 after:w-0 after:block after:h-[2px] after:left-0 hover:after:w-full after:transition-[width] after:ease-in after:duration-100 after:m-auto w-max">
										<Link to={"/digital-transformation"}>
											digital transformation
										</Link>
									</li>
									<li
										onClick={handleNav}
										className="transition-all duration-150 relative after:absolute after:contents-[''] after:bg-red-500 after:w-0 after:block after:h-[3px] after:left-0 hover:after:w-full after:transition-[width] after:ease-in after:duration-100 after:m-auto w-max">
										<Link to={"/data-solution"}> data solution</Link>
									</li>
									<li
										onClick={handleNav}
										className="transition-all duration-150 relative after:absolute after:contents-[''] after:bg-red-500 after:w-0 after:block after:h-[2px] after:left-0 hover:after:w-full after:transition-[width] after:ease-in after:duration-100 after:m-auto w-max">
										<Link to={"/avenue-impact-development"}>
											avenue impact development CIC
										</Link>
									</li>
									<li
										onClick={handleNav}
										className="transition-all duration-150 relative after:absolute after:contents-[''] after:bg-red-500 after:w-0 after:block after:h-[2px] after:left-0 hover:after:w-full after:transition-[width] after:ease-in after:duration-100 after:m-auto w-max">
										<Link to={"/avi"}>Digital learning hub</Link>
									</li>
								</ul>
							</div>
						)}
						<div className="mt-3 md:hidden">
							<img src={navImg} alt="" />
							<div className="space-y-1 mt-4">
								<p className="text-[#98A2B3] font-light">+4480005410720</p>
								<p className="text-[#98A2B3] font-light">London, UK</p>
								<p className="text-[#98A2B3] font-light">
									Mon - Sat 8:00 - 18:0
								</p>
								<div className="flex gap-3">
									<a
										href="#"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center text-[#F53366] p-2 rounded-full bg-[#ffebf0]">
										<FontAwesomeIcon icon={faFacebook} className=" text-xl" />
									</a>
									<a
										href="#"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center text-[#F53366] p-2 rounded-full bg-[#ffebf0]">
										<FontAwesomeIcon icon={faTwitter} className=" text-xl" />
									</a>
									<a
										href="#"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center text-[#F53366] p-2 rounded-full bg-[#ffebf0]">
										<FontAwesomeIcon icon={faInstagram} className=" text-xl" />
									</a>
									<a
										href="#"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center text-[#F53366] p-2 rounded-full bg-[#ffebf0]">
										<FontAwesomeIcon icon={faLinkedin} className=" text-xl" />
									</a>
								</div>
							</div>
						</div>
					</ul>
					<button className="bg-[#f4f5f7] text-[#23314A] hidden md:block rounded-lg px-4 py-2 capitalize group-hover:text-[#FFEBF0] group-hover:bg-[#CC1747] ">
						contact
					</button>
				</div>
				<button
					className="md:hidden text-white text-2xl group-hover:text-[rgb(35,49,74)] inline-flex items-center"
					role="show and hide menu"
					onClick={() => setShowNav((prev) => !prev)}>
					<FontAwesomeIcon icon={faBars} />
				</button>
			</div>
			{dropdown && (
				<div
					className="bg-white px-12 mb-16  dropdown md:block hidden "
					onMouseLeave={() => setDropDown(false)}>
					<div className="border-t border-[#D6E3FA] grid grid-cols-2 divide-x divide-[#D6E3FA] pb-10">
						<div className="mt-3">
							<img src={navImg} alt="" />
							<div className="space-y-1 mt-4">
								<p className="text-[#98A2B3] font-light">+4480005410720</p>
								<p className="text-[#98A2B3] font-light">London, UK</p>
								<p className="text-[#98A2B3] font-light">
									Mon - Sat 8:00 - 18:0
								</p>
								<div className="flex gap-3">
									<a
										href="#"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center text-[#F53366] p-2 rounded-full bg-[#ffebf0]">
										<FontAwesomeIcon icon={faFacebook} className=" text-xl" />
									</a>
									<a
										href="#"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center text-[#F53366] p-2 rounded-full bg-[#ffebf0]">
										<FontAwesomeIcon icon={faTwitter} className=" text-xl" />
									</a>
									<a
										href="#"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center text-[#F53366] p-2 rounded-full bg-[#ffebf0]">
										<FontAwesomeIcon icon={faInstagram} className=" text-xl" />
									</a>
									<a
										href="#"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center text-[#F53366] p-2 rounded-full bg-[#ffebf0]">
										<FontAwesomeIcon icon={faLinkedin} className=" text-xl" />
									</a>
								</div>
							</div>
						</div>
						<div>
							<ul className=" space-y-3 pl-12 mt-8 *:cursor-pointer *:text-[#23314A] font-poppins *:capitalize">
								<li
									onClick={handleNav}
									className="transition-all duration-150 relative after:absolute after:contents-[''] after:bg-red-500 after:w-0 after:block after:h-[2px] after:left-0 hover:after:w-full after:transition-[width] after:ease-in after:duration-100 after:m-auto w-max">
									<Link to={"/digital-transformation"}>
										digital transformation
									</Link>
								</li>
								<li
									onClick={handleNav}
									className="transition-all duration-150 relative after:absolute after:contents-[''] after:bg-red-500 after:w-0 after:block after:h-[3px] after:left-0 hover:after:w-full after:transition-[width] after:ease-in after:duration-100 after:m-auto w-max">
									<Link to={"/data-solution"}> data solution</Link>
								</li>
								<li
									onClick={handleNav}
									className="transition-all duration-150 relative after:absolute after:contents-[''] after:bg-red-500 after:w-0 after:block after:h-[2px] after:left-0 hover:after:w-full after:transition-[width] after:ease-in after:duration-100 after:m-auto w-max">
									<Link to={"/avenue-impact-development"}>
										avenue impact development CIC
									</Link>
								</li>
								<li
									onClick={handleNav}
									className="transition-all duration-150 relative after:absolute after:contents-[''] after:bg-red-500 after:w-0 after:block after:h-[2px] after:left-0 hover:after:w-full after:transition-[width] after:ease-in after:duration-100 after:m-auto w-max">
									<Link to={"/avi"}>Digital learning hub</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
