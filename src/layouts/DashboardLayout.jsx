import DashboardNav from "@/Components/dashboard/DashboardNav";
import DashboardSideNav from "@/Components/dashboard/DashboardSideNav";

import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="">
      <DashboardSideNav />
      <div>
        <DashboardNav />

        <div className="h-full bg-[#FDFDFD] px-6 pl-24">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
