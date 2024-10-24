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
import {
  useMoveSectionDown,
  useMoveSectionToBotton,
  useMoveSectionToTop,
  useMoveSectionUP,
} from "@/hooks/course-management/use-move-onDemand-section";

function OndemandSectionPopover({ children, className, section }) {
  const { moveUP } = useMoveSectionUP();
  const { moveDown } = useMoveSectionDown();
  const { moveToTop } = useMoveSectionToTop();
  const { moveToBottom } = useMoveSectionToBotton();

  const handleMoveUp = (sect) => {
    console.log("move up", sect);

    const data = {
      section: sect,
      direction: "forward",
    };
    moveUP(data);
  };

  const handleMoveDown = (sect) => {
    console.log("move up", sect);

    const data = {
      section: sect,
      direction: "backward",
    };
    moveDown(data);
  };
  const handleMoveTop = (sect) => {
    console.log("move up", sect);

    const data = {
      section: sect,
      direction: "toFront",
    };
    moveToTop(data);
  };

  const handleMoveBottom = (sect) => {
    console.log("move up", sect);

    const data = {
      section: sect,
      direction: "toBack",
    };
    moveToBottom(data);
  };
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
            onClick={() => handleMoveTop(section)}
          >
            <span className="text-2xl">
              <IoIosArrowRoundUp />
            </span>
            <span className="text-nowrap text-sm">
              Move to the top of the list
            </span>
          </button>
          <button
            className="flex items-center gap-1 py-3 text-[#667185]"
            onClick={() => handleMoveUp(section)}
          >
            <span className="text-xl">
              <GoArrowUpRight />
            </span>
            <span className="text-sm">Move up</span>
          </button>
          <button
            className="flex items-center gap-1 py-3 text-[#667185]"
            onClick={() => handleMoveBottom(section)}
          >
            <span className="text-xl">
              <GoArrowDown />
            </span>
            <span className="text-sm">Move to the bottom of the list</span>
          </button>
          <button
            className="flex items-center gap-1 py-3 text-[#667185]"
            onClick={() => handleMoveDown(section)}
          >
            <span className="text-xl">
              <GoArrowDownRight />
            </span>
            <span className="text-sm">Move down</span>
          </button>
          <button className="flex items-center gap-1 py-3 text-[#667185]">
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

export default OndemandSectionPopover;
