import Table from "@/Components/Table";
import { CommonButton } from "@/Components/ui/button";
import { Trash } from "lucide-react";
import { IoSearch } from "react-icons/io5";

const GroupStudentManagement = () => {
  return (
    <div>
      {" "}
      <header className="mt-7 flex items-center justify-between px-4 py-5">
        <p className="text-xl text-[#475367]">student(3)</p>
        <div className="flex items-center gap-6">
          <div className="flex w-full max-w-[528px] items-center gap-x-4 rounded-md border border-[#D0D5DD] px-4 py-2">
            <label htmlFor="search">
              <IoSearch className="text-xl text-[#667185]" />
            </label>

            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search here..."
              className="w-full placeholder:text-[#667185]"
            />
          </div>
          <CommonButton className="bg-primary-color-600">
            Add student
          </CommonButton>
        </div>
      </header>
      <Table cols={"0.5fr 2fr 2fr  1fr"}>
        <Table.Header className={"gap-1 *:text-sm *:font-medium *:capitalize"}>
          <div>S/N</div>
          <div>Name</div>
          <div>Email address</div>
          <div>Action</div>
        </Table.Header>
        <Table.Row>
          <p className="text-sm text-[#344054]">1</p>
          <p className="text-sm text-[#344054]">John Doe</p>
          <p className="text-sm text-[#344054]">johndoe@example.com</p>
          <CommonButton className="flex items-center gap-1 bg-primary-color-600">
            <span>
              <Trash />
            </span>
            <span>Remove from group</span>
          </CommonButton>
        </Table.Row>
      </Table>
    </div>
  );
};

export default GroupStudentManagement;
