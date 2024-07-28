import AviNav from "@/Components/avi/AviNav";
import DashboardNav from "@/Components/dashboard/DashboardNav";
import { Sidebar, SidebarItem } from "@/Components/dashboard/SideNav";
import { faBell, faHeart, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="">
      <Sidebar>
        <SidebarItem
          icon={<FontAwesomeIcon icon={faHome} />}
          text={"Dashboard"}
          active={true}
          // alert={"alert"}
        />
        <SidebarItem
          icon={<FontAwesomeIcon icon={faBell} />}
          text={"Notification"}
          alert={"alert"}
        />
        <SidebarItem
          icon={<FontAwesomeIcon icon={faHeart} />}
          text={"Wishlist"}
          // alert={"alert"}
        />
      </Sidebar>
      <div>
        <DashboardNav />
        <div className="ml-14 h-full bg-[#FDFDFD] p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
