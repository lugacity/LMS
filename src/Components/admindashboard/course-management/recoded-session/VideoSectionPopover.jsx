import { HiOutlinePencil } from "react-icons/hi";
import { IoIosArrowRoundUp } from "react-icons/io";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import { GoArrowDown } from "react-icons/go";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ui/popover";

import { cn } from "@/lib/utils";
import { TrashCan } from "@/Components/Icon";

function VideoSectionPopover({ children, className, id, section }) {
  const handleMoveUp = (id, sect) => {
    console.log("move up", id, sect);

    const data = {
      videoId: id,
      direction: "forward",
    };
  };

  const handleMoveDown = (id, sect) => {
    console.log("move up", id, sect);

    const data = {
      videoId: id,
      direction: "backward",
    };
  };
  const handleMoveTop = (id, sect) => {
    console.log("move up", id, sect);

    const data = {
      videoId: id,
      direction: "toFront",
    };
  };

  const handleMoveBottom = (id, sect) => {
    console.log("move up", id, sect);

    const data = {
      videoId: id,
      direction: "toBack",
    };
  };

  const handleDelete = (sect, id) => {};

  return (
    <Popover className={cn(className)}>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent className="mr-10 w-[259px] rounded-sm bg-white shadow-lg">
        <div className="px-3 py-[14px]">
          <button className="flex items-center gap-1 py-3 text-[#667185]">
            <span className="text-sm">
              <HiOutlinePencil />
            </span>
            <span className="text-sm">Edit</span>
          </button>
          <button
            className="flex items-center gap-1 py-3 text-[#667185]"
            onClick={() => handleMoveTop(id, section)}
          >
            <span className="text-2xl">
              <IoIosArrowRoundUp />
            </span>
            {/* {'moveTopStatus' === "pending" ? (
              "loading..."
            ) : ( */}
            <span className="text-nowrap text-sm">
              Move to the top of the list
            </span>
            {/* )} */}
          </button>
          <button
            className="flex items-center gap-1 py-3 text-[#667185]"
            onClick={() => handleMoveUp(id, section)}
          >
            <span className="text-xl">
              <GoArrowUpRight />
            </span>
            {status === "pending" ? (
              "loading"
            ) : (
              <span className="text-sm">Move up</span>
            )}
          </button>
          <button
            className="flex items-center gap-1 py-3 text-[#667185]"
            onClick={() => handleMoveBottom(id, section)}
          >
            <span className="text-xl">
              <GoArrowDown />
            </span>
            {/* {moveBottomStatus === "pending" ? (
              "loading..."
            ) : ( */}
            <span className="text-sm">Move to the bottom of the list</span>
            {/* )} */}
          </button>
          <button
            className="flex items-center gap-1 py-3 text-[#667185]"
            onClick={() => handleMoveDown(id, section)}
          >
            <span className="text-xl">
              <GoArrowDownRight />
            </span>
            {/* {moveDownStatus === "pending" ? (
              "loading..."
            ) : ( */}
            <span className="text-sm">Move down</span>
            {/* )} */}
          </button>
          <button
            className="flex items-center gap-1 py-3 text-[#667185]"
            onClick={() => handleDelete(section, id)}
          >
            <span className="text-xl">
              <TrashCan />
            </span>
            <span className="text-sm">Delete</span>
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default VideoSectionPopover;