import { CommonButton } from "@/Components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";

const EditModal = ({ children, form, header = "Edit on-demand section" }) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <CommonButton variant="ghost" className="w-full text-left">
            {children}
          </CommonButton>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[665px]">
          <DialogHeader>
            <DialogTitle>{header}</DialogTitle>
            <DialogDescription></DialogDescription>
            {form}
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditModal;
