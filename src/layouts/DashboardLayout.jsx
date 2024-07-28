import AviNav from "@/Components/avi/AviNav";
import DashboardNav from "@/Components/dashboard/DashboardNav";
import { Sidebar, SidebarItem } from "@/Components/dashboard/SideNav";
import { faBell, faHeart, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-[1fr_10fr] gap-0">
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
        <div className="h-full bg-[#FDFDFD] px-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
