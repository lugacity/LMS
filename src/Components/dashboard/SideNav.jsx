import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mobileLogo from "../../assets/images/mobile-dark.png";

import {
  MoreVertical,
  ChevronLast,
  ChevronFirst,
  MenuIcon,
  ShieldCloseIcon,
} from "lucide-react";
import { useContext, createContext, useState } from "react";
import { DarkLogo } from "../Logo";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
// import { FaHamburger } from "react-icons/fa";
// import { RiEyeCloseLine } from "react-icons/ri";
// import { MdOutlineClose } from "react-icons/md";

const SidebarContext = createContext();

export function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);
  // fixed left-0 top-0 z-10
  return (
    <aside className="fixed left-0 top-0 h-screen w-min">
      <nav className="flex h-full flex-col border-r bg-white shadow-sm">
        <div className="flex items-center justify-between p-4 pb-2">
          {/* <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          /> */}
          <DarkLogo
            className={`overflow-hidden transition-all ${
              expanded ? "w-40" : "w-0"
            }`}
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="rounded-lg p-1.5"
          >
            {expanded ? (
              <FontAwesomeIcon
                icon={faClose}
                className="transition-transform ease-linear hover:scale-110"
              />
            ) : (
              <img src={mobileLogo} alt="" className="w-8" />
            )}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="flex border-t p-3">
          {/* <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="h-10 w-10 rounded-md"
          /> */}
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div
            className={`flex items-center justify-between overflow-hidden transition-all ${expanded ? "ml-3 w-52" : "w-0"} `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`group relative my-1 flex cursor-pointer items-center px-3 py-2 font-medium transition-colors ${
        active
          ? "border-l-4 border-l-primary-color-600 bg-primary-color-100/30"
          : "text-gray-600 hover:bg-indigo-50"
      } `}
    >
      <span
        className={`${active ? "text-primary-color-600" : "text-gray-500"}`}
      >
        {icon}
      </span>
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "ml-3 w-52" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 h-2 w-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`absolute left-full ml-6 hidden w-0 -translate-x-3 rounded-md bg-indigo-100 px-2 py-1 text-sm text-indigo-800 opacity-20 transition-all group-hover:visible group-hover:translate-x-0 group-hover:opacity-100`}
        >
          {text}
        </div>
      )}
    </li>
  );
}
