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
} from "@/hooks/course-management/on-demand/use-move-onDemand-section";
import Modal from "@/pages/auth/components/Modal";
import BorderCard from "@/Components/BorderCard";
import { useState } from "react";
import CreateOndemandForm from "./CreateOndemandForm";
import { X } from "lucide-react";
import { useDeleteDemandSection } from "@/hooks/course-management/on-demand/use-delete-ondemand-section";

function SectionPopover({ children, className, section, course }) {
  const { moveUP } = useMoveSectionUP();
  const { moveDown } = useMoveSectionDown();
  const { moveToTop } = useMoveSectionToTop();
  const { moveToBottom } = useMoveSectionToBotton();

  const { DeleteSection, isDeleting } = useDeleteDemandSection();

  const [edit, setEdit] = useState(false);

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

  const handleDelete = (sect) => {
    DeleteSection(sect);
  };

  return (
    <>
      <Popover className={cn(className)}>
        <PopoverTrigger>{children}</PopoverTrigger>
        <PopoverContent className="mr-10 w-[259px] rounded-sm bg-white shadow-lg">
          <div className="px-3 py-[14px]">
            <button
              className="flex items-center gap-1 py-3 text-[#667185]"
              onClick={() => setEdit((prev) => !prev)}
            >
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
            <button
              className="flex items-center gap-1 py-3 text-[#667185]"
              onClick={() => handleDelete(section)}
            >
              <span className="text-xl">
                <TrashCan />
              </span>
              <span className="text-sm">Delete</span>
            </button>
          </div>
        </PopoverContent>
      </Popover>
      {edit && (
        <Modal>
          <BorderCard className="baby mx-auto max-h-screen w-full max-w-[800px] overflow-y-scroll rounded bg-white">
            <button
              type="button"
              className="ml-auto block w-max"
              onClick={() => setEdit((prev) => !prev)}
            >
              <X className="m h-5 w-5" />
            </button>
            <div className="mx-auto max-w-[650px]">
              <CreateOndemandForm sectionToEdit={course} setEdit={setEdit} />
            </div>
            <p> {section.id}</p>
          </BorderCard>
        </Modal>
      )}
    </>
  );
}

export default SectionPopover;
