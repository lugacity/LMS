import DashboardNav from "@/Components/dashboard/DashboardNav";
import DashboardSideNav from "@/Components/dashboard/DashboardSideNav";

import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="">
      {/* <DashboardSideNav />  */}

      {/* ml-[58px] */}
      <div className=" h-full lg:ml-[272px]">

        <DashboardNav />

        <div className="h-full bg-[#FDFDFD] p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
