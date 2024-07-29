import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";

function DashboardNav() {
  return (
    <nav className="grid grid-cols-2 gap-10 bg-white py-6 pl-16 pr-4 md:grid-cols-[3fr_1fr] md:gap-36 md:px-16">
      <div className="flex w-max items-center gap-3 rounded-lg bg-[#FDFDFD] px-4 py-2 lg:w-full">
        <FontAwesomeIcon icon={faSearch} className="text-[#475367]" />
        <input
          type="text"
          placeholder=" What do you want to learn?"
          className="w-28 rounded-none border-none bg-transparent text-[#667185] md:w-full"
        />
      </div>
      <div className="flex items-center gap-6 justify-self-end">
        <div className="flex items-center gap-4">
          <p className="hidden text-sm text-[#667185] md:block md:text-nowrap">
            View all Courses
          </p>
          <FontAwesomeIcon icon={faBell} className="text-sm md:text-base" />
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
