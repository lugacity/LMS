import { DarkLogo } from "../Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate, useNavigation } from "react-router-dom";

const AviNav = () => {
	const navigate = useNavigate()
	return (
		<nav className="flex items-center justify-between py-4 px-6 lg:px-20 ">
			<div>
				<Link to={"/"} className="cursor-pointer">
					<DarkLogo />
				</Link>
			</div>
			<button className="md:hidden">
				<FontAwesomeIcon icon={faBars} className="text-2xl text-[#23314A]" />
			</button>
			<div className="md:flex items-center gap-4 hidden">
				<ul className="*:text-[#23314A] flex items-center gap-4 *:capitalize *:cursor-pointer ">
					<li className="relative  after:absolute after:left-0 after:w-full after:h-[2px] after:bg-[#CC1747] contents-[''] after:bottom-0 ">
						home
					</li>
					<li>login</li>
				</ul>
				<button onClick={()=>navigate('/contact')} className=" rounded-lg px-4 py-2 capitalize text-[#FFEBF0] bg-[#CC1747] ">
					contact
				</button>
			</div>
		</nav>
	);
};

export default AviNav;
