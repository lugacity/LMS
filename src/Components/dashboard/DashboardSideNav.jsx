import { faBell, faHeart, faHome } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Sidebar, SidebarItem } from "./SideNav";
const navItem = [
  {
    id: 1,
    text: "Dashboard",
    icon: faHome,
    active: true,
    alert: "alert",
    path: "/dashboard",
  },
  {
    id: 2,
    text: "Notification",
    icon: faBell,
    active: false,
    alert: "alert",
    path: "notification",
  },
  {
    id: 3,
    text: "Wishlist",
    icon: faHeart,
    active: false,
    alert: "alert",
    path: "wishlists",
  },
];
function DashboardSideNav() {
  const [active, setActive] = useState(navItem);
  const hadleClick = (id) => {};
  return (
    <Sidebar>
      {navItem.map((item) => (
        <SidebarItem
          key={item.text}
          icon={item.icon}
          text={item.text}
          path={item.path}
          onClick={() => hadleClick(item.id)}
          active={item.active}
        />
      ))}
    </Sidebar>
  );
}

export default DashboardSideNav;
