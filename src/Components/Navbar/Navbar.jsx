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
		{
			path: "/service",
			label: "Services",
		},
		{
			path: "/contact",
			label: "Contact",
		},
	];

	return (
		<div className="flex justify-between px-12 py-4 absolute top-0 left-0 z-10 w-full group transition-all ease-linear duration-300 hover:bg-white">
			<div className="nav-logo">
				<WhiteLogo />
				<DarkLogo />
			</div>

			<ul className="nav-menu">
				{menus.map((menu) => {
					return (
						<li
							key={menu}
							className="transition-all duration-150 hover:border-b-[2px] hover:border-b-red-600">
							<NavLink to={menu.path} className={"group-hover:text-[#23314A]"}>
								{menu.label}
							</NavLink>
						</li>
					);
				})}
				{/* <li
					onClick={() => setMenu("Home")}
					className={menu === "Home" ? "active" : ""}>
					<Link style={{ textDecoration: "none", color: "white" }} to="/">
						Home
					</Link>
				</li>
				<li
					onClick={() => setMenu("About")}
					className={menu === "About" ? "active" : ""}>
					<Link style={{ textDecoration: "none" }} to="/about">
						About us
					</Link>
				</li>
				<li
					onClick={() => setMenu("Services")}
					className={menu === "Services" ? "active" : ""}>
					<Link style={{ textDecoration: "none" }} to="/services">
						Services
					</Link>
				</li>
				<li
					onClick={() => setMenu("Contact")}
					className={menu === "Contact" ? "active" : ""}>
					<Link style={{ textDecoration: "none" }} to="/contact">
						Contact us
					</Link>
				</li> */}
			</ul>
		</div>
	);
};

export default Navbar;
