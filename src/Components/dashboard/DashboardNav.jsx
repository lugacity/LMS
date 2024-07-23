import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";

function DashboardNav() {
  return (
    <nav className="grid grid-cols-[3fr_1fr] gap-36 bg-white px-16 py-6">
      <div className="flex w-full rounded-lg bg-[#FDFDFD] px-4 py-2">
        <FontAwesomeIcon icon={faSearch} className="text-[#475367]" />
        <input
          type="text"
          placeholder=" what do you want to learn?"
          className="w-full rounded-none border-none bg-transparent text-[#667185]"
        />
      </div>
      <div className="flex items-center gap-6 justify-self-end">
        <div className="flex items-center gap-4">
          <p className="text-[#667185]">View all Courses</p>
          <FontAwesomeIcon icon={faBell} />
        </div>
        <div className="relative">
          <div className="absolute right-0 top-0 z-10 h-3 w-3 rounded-full bg-[#008000]"></div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="bg-primary-color-100 text-primary-color-600">
              CN
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
}

export default DashboardNav;
