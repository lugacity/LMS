import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function DashboardNav() {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex w-full rounded-lg pl-4">
        <FontAwesomeIcon icon={faSearch} className="text-[#475367]" />
        <input
          type="text"
          placeholder=" what do you want to learn?"
          className="w-full rounded-none border-none bg-transparent text-[#667185]"
        />
      </div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </nav>
  );
}

export default DashboardNav;
