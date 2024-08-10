import { ClosedSidnav } from "@/Components/other-layout/ClosedSidbar";
import OtherSideNav from "@/Components/other-layout/OtherSideNav";
import OtherTopNav from "@/Components/other-layout/OtherTopNav";
import { Outlet } from "react-router-dom";

const OtherLayout = () => {
  return (
    <div>
      {/* <OtherSideNav /> */}
      {/* className="ml-[76px]" */}
      <div className=" p-6">
        <OtherTopNav />
        <Outlet />
      </div>
    </div>
  );
};

export default OtherLayout;
