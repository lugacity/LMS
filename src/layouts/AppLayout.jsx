import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const AppLayout = () => {
	return (
		<div className="font-poppins">
			<Navbar />
			<Outlet />
		</div>
	);
};

export default AppLayout;
