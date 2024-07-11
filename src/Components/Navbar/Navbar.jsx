import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { DarkLogo, WhiteLogo } from "../Logo";

const Navbar = () => {
	// const [enterNav, setEnterNa] = useState("Home");
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
		<div className="flex justify-between px-12 py-4 absolute top-0 left-0 z-10 w-full group transition-all ease-linear duration-300 hover:bg-white">
			<div className="nav-logo">
				<WhiteLogo />
				<DarkLogo />
			</div>
			<div className="flex gap-4">
				<ul className="nav-menu">
					{menus.map((menu) => {
						return (
							<li
								key={menu}
								className="transition-all duration-150 hover:border-b-[2px] hover:border-b-red-600">
								<NavLink
									to={menu.path}
									className={"group-hover:text-[#23314A]"}>
									{menu.label}
								</NavLink>
							</li>
						);
					})}
					<li className="transition-all duration-150 hover:border-b-[2px] hover:border-b-red-600 text-white group-hover:text-[#23314A]">
						Services
					</li>
				</ul>
				<button className="bg-[#f4f5f7] text-[#23314A] rounded-lg px-4 py-2 capitalize group-hover:text-[#FFEBF0] group-hover:bg-[#CC1747] ">
					contact
				</button>
			</div>
		</div>
	);
};

export default Navbar;
