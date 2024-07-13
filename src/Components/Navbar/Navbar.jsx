import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { DarkLogo, WhiteLogo } from "../Logo";
import navImg from "../../assets/images/navImg.png";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons/faHamburger";

const Navbar = () => {
	// const [enterNav, setEnterNa] = useState("Home");
	const [dropdown, setDropDown] = useState(false);
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
					<WhiteLogo />
					<DarkLogo />
				</div>
				<div className=" hidden  md:flex gap-6">
					<ul className="flex items-center gap-6 *:text-white">
						{menus.map((menu) => {
							return (
								<li
									key={menu}
									className="transition-all duration-150 relative after:absolute after:contents-[''] after:bg-red-500 after:w-0 after:block after:h-[2px] after:left-0 hover:after:w-full after:transition-[width] after:ease-in after:duration-100 after:m-auto">
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
								className="transition-all duration-150  text-white group-hover:text-[#23314A] service cursor-pointer space-x-2 flex items-center"
								onClick={() => setDropDown((prev) => !prev)}>
								<span className="relative after:absolute after:contents-[''] after:bg-red-500 after:w-0 after:block after:h-[2px] after:left-0 hover:after:w-full after:transition-[width] after:ease-in after:duration-100 after:m-auto ">
									Services
								</span>
								<span
									className={
										dropdown
											? "inline-flex rotate-180 transition-transform ease-linear duration-150"
											: "inline-flex  transition-transform ease-in duration-150"
									}>
									<FontAwesomeIcon icon={faChevronDown} />
								</span>
							</li>
						</div>
					</ul>
					<button className="bg-[#f4f5f7] text-[#23314A] rounded-lg px-4 py-2 capitalize group-hover:text-[#FFEBF0] group-hover:bg-[#CC1747] ">
						contact
					</button>
				</div>
				<div className="md:hidden">
					<FontAwesomeIcon icon={faHamburger} />
				</div>
			</div>
			{dropdown && (
				<div
					className="bg-white px-12 mb-16  dropdown "
					onMouseLeave={() => setDropDown(false)}>
					<div className="border-t border-[#D6E3FA] grid grid-cols-2 divide-x divide-[#D6E3FA] pb-10">
						<div className="mt-3">
							<img src={navImg} alt="" />
						</div>
						<div>
							<ul className=" space-y-3 pl-12 mt-8 *:cursor-pointer *:text-[#23314A] font-poppins *:capitalize">
								<li onClick={() => setDropDown((prev) => !prev)}>
									<Link to={"/digital-transformation"}>
										digital transformation
									</Link>
								</li>
								<li onClick={() => setDropDown((prev) => !prev)}>
									<Link to={"/data-solution"}> data solution</Link>
								</li>
								<li onClick={() => setDropDown((prev) => !prev)}>
									<Link to={"/avenue-impact-development"}>
										avenue impact development CIC
									</Link>
								</li>
								<li onClick={() => setDropDown((prev) => !prev)}>
									Digital learning hub
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
