import Button from "@/Components/Button";
import { CommonButton } from "@/Components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import CreateOndemandForm from "./CreateOnDemandForm";
import EditOnDemandSectionForm from "./EditOnDemandSectionForm";

const OnDemandEditModal = ({ children, section }) => {
  return (
    <div>
      {" "}
      <Dialog>
        <DialogTrigger asChild>
          <CommonButton variant="ghost" className="w-full text-left">
            {children}
          </CommonButton>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[665px]">
          <DialogHeader>
            <DialogTitle>Edit on-demand section</DialogTitle>
            <DialogDescription></DialogDescription>
            <EditOnDemandSectionForm sectionToEdit={section} />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OnDemandEditModal;
