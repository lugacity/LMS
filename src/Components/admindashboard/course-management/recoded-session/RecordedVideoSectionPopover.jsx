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

import { useDeleteRecordedVideo } from "@/hooks/course-management/recorded-session/use-delete-recorded-section";

import {
  useMoveRecordedVideoDown,
  useMoveRecordedVideoToBottom,
  useMoveRecordedVideoToTop,
  useMoveRecordedVideoUP,
} from "@/hooks/course-management/recorded-session/use-move-recorded-video";

function RecordedVideoSectionPopover({ children, className, id, section }) {
  const { moveUP, status } = useMoveRecordedVideoUP();
  const { moveDown, moveDownStatus } = useMoveRecordedVideoDown();
  const { moveTop, moveTopStatus } = useMoveRecordedVideoToTop();
  const { moveToBottom, moveBottomStatus } = useMoveRecordedVideoToBottom();
  const { deleteRecordedVideo, isDeleting } = useDeleteRecordedVideo();

  const handleMoveUp = (id, sect) => {
    console.log("move up", id, sect);

    const data = {
      videoId: id,
      direction: "forward",
    };
    moveUP({
      data,
      section: sect,
    });
  };

  const handleMoveDown = (id, sect) => {
    console.log("move up", id, sect);

    const data = {
      videoId: id,
      direction: "backward",
    };
    moveDown({
      data,
      section: sect,
    });
  };
  const handleMoveTop = (id, sect) => {
    console.log("move up", id, sect);

    const data = {
      videoId: id,
      direction: "toFront",
    };
    moveTop({
      data,
      section: sect,
    });
  };

  const handleMoveBottom = (id, sect) => {
    console.log("move up", id, sect);

    const data = {
      videoId: id,
      direction: "toBack",
    };
    moveToBottom({
      data,
      section: sect,
    });
  };

  const handleDelete = (sect, id) => {
    deleteRecordedVideo({ section: sect, id });
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
            className="flex w-full items-center gap-1 py-3 text-[#667185] hover:bg-accent disabled:cursor-not-allowed"
            onClick={() => handleMoveTop(id, section)}
            disabled={moveTopStatus === "pending"}
          >
            <span className="text-2xl">
              <IoIosArrowRoundUp />
            </span>
            {moveTopStatus === "pending" ? (
              "loading..."
            ) : (
              <span className="text-nowrap text-sm">
                Move to the top of the list
              </span>
            )}
          </button>
          <button
            className="flex w-full items-center gap-1 py-3 text-[#667185] hover:bg-accent disabled:cursor-not-allowed"
            onClick={() => handleMoveUp(id, section)}
            disabled={status === "pending"}
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
            className="flex w-full items-center gap-1 py-3 text-[#667185] hover:bg-accent disabled:cursor-not-allowed"
            onClick={() => handleMoveBottom(id, section)}
            disabled={moveBottomStatus === "pending"}
          >
            <span className="text-xl">
              <GoArrowDown />
            </span>
            {moveBottomStatus === "pending" ? (
              "loading..."
            ) : (
              <span className="text-sm">Move to the bottom of the list</span>
            )}
          </button>
          <button
            className="flex w-full items-center gap-1 py-3 text-[#667185] hover:bg-accent disabled:cursor-not-allowed"
            onClick={() => handleMoveDown(id, section)}
            disabled={moveDownStatus === "pending"}
          >
            <span className="text-xl">
              <GoArrowDownRight />
            </span>
            {moveDownStatus === "pending" ? (
              "loading..."
            ) : (
              <span className="text-sm">Move down</span>
            )}
          </button>
          <button
            className="flex w-full items-center gap-1 py-3 text-[#667185] hover:bg-accent disabled:cursor-not-allowed"
            onClick={() => handleDelete(section, id)}
            disabled={isDeleting}
          >
            <span className="text-xl">
              <TrashCan />
            </span>
            <span className="text-sm">{isDeleting ? "Loading" : "Delete"}</span>
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default RecordedVideoSectionPopover;
