import { TrashCan } from "@/Components/Icon";
import { CommonButton } from "@/Components/ui/button";
import { Popover, PopoverTrigger } from "@/Components/ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";

const StudentPopover = ({ children }) => {
  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent className="rounded border">
        <CommonButton
          variant={"ghost"}
          className="flex gap-1 text-sm text-primary-color-600"
        >
          <span>
            <TrashCan className={"h-4 w-4 text-primary-color-600"} />
          </span>
          <span>Delete</span>
        </CommonButton>
      </PopoverContent>
    </Popover>
  );
};

export default StudentPopover;
