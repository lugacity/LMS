import { useState } from "react";
import { X } from "lucide-react";

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

import Modal from "@/pages/auth/components/Modal";
import BorderCard from "@/Components/BorderCard";
import CreateOndemandForm from "../on-demand-section/CreateOndemandForm";
import { useDeleteRecordedSection } from "@/hooks/course-management/recorded-session/use-delete-recorded-section";
import {
  useMoveSectionDown,
  useMoveSectionToBotton,
  useMoveSectionToTop,
  useMoveSectionUP,
} from "@/hooks/course-management/recorded-session/use-move-recorded-section";

function RecordedSectionPopover({ children, className, section, course }) {
  const { moveUP, isMovingUP } = useMoveSectionUP();
  const { moveDown, isMovingDown } = useMoveSectionDown();
  const { moveToTop, isMovingToTop } = useMoveSectionToTop();
  const { moveToBottom, isMovingToBottom } = useMoveSectionToBotton();

  const { deleteSection, isDeleting } = useDeleteRecordedSection();

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
    deleteSection(sect);
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
              disabled={isMovingToTop}
            >
              <span className="text-2xl">
                <IoIosArrowRoundUp />
              </span>
              <span className="text-nowrap text-sm">
                {isMovingToTop ? "Loading..." : "Move to the top of the list"}
              </span>
            </button>
            <button
              className="flex items-center gap-1 py-3 text-[#667185]"
              onClick={() => handleMoveUp(section)}
              disabled={isMovingUP}
            >
              <span className="text-xl">
                <GoArrowUpRight />
              </span>
              <span className="text-sm">
                {isMovingUP ? "Loading..." : "Move up"}
              </span>
            </button>
            <button
              className="flex items-center gap-1 py-3 text-[#667185]"
              onClick={() => handleMoveBottom(section)}
              disabled={isMovingToBottom}
            >
              <span className="text-xl">
                <GoArrowDown />
              </span>
              <span className="text-sm">
                {isMovingToBottom
                  ? "Loading"
                  : "Move to the bottom of the list"}
              </span>
            </button>
            <button
              className="flex items-center gap-1 py-3 text-[#667185]"
              onClick={() => handleMoveDown(section)}
              disabled={isMovingDown}
            >
              <span className="text-xl">
                <GoArrowDownRight />
              </span>
              <span className="text-sm">
                {isMovingDown ? "Loading..." : "Move down"}
              </span>
            </button>
            <button
              className="flex items-center gap-1 py-3 text-[#667185] disabled:cursor-not-allowed"
              onClick={() => handleDelete(section)}
              disabled={isDeleting}
            >
              <span className="text-xl">
                <TrashCan />
              </span>
              <span className="text-sm">
                {isDeleting ? "Loading..." : "Delete"}
              </span>
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

export default RecordedSectionPopover;
