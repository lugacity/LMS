import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import AdminNav from "@/Components/admindashboard/AdminNav";
// import { cn } from "@/lib/utils";
import DashButton from "@/pages/auth/ButtonDash";
import Modal from "@/pages/auth/components/Modal";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BorderCard from "@/Components/BorderCard";
import { Popover, PopoverContent } from "@/Components/ui/popover";
import { AdminSelectOption } from "@/Components/admindashboard/account-management/AdminSelectOption";
import CreateAdminRole from "@/Components/admindashboard/account-management/CreateAdminRole";

const AccountManagLayout = () => {
  const { pathname } = useLocation();
  const [adminModal, setAdminModal] = useState();



  return (
    <div>
      <AdminNav>
        <div className="flex items-center gap-8">
          <p className="text-[20px] font-[500] text-[#344054]">
            List All Admins
          </p>
          <DashButton
            onClick={() => setAdminModal(true)}
            className="text-[14px] text-[white]"
          >
            <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add New Admin
          </DashButton>
        </div>
      </AdminNav>
      <Outlet />

      {adminModal && (
        <Modal>
          <BorderCard className="w-2/5 rounded-lg bg-white p-6 shadow-lg">
            <button
              className="float-right text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => setAdminModal(false)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <CreateAdminRole/>
          </BorderCard>
        </Modal>
      )}
    </div>
  );
};

export default AccountManagLayout;

