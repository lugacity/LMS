import BorderCard from "@/Components/BorderCard";
import { CommonButton } from "@/Components/ui/button";
import { useDeleteAdmin } from "@/hooks/account-management/use-delete-admin";
import { useFetchAccountManagement } from "@/hooks/account-management/use-fetch-all-account-management";
import DashButton from "@/pages/auth/ButtonDash";
import Modal from "@/pages/auth/components/Modal";
import {
  faCheck,
  faDownload,
  faEdit,
  faQuestionCircle,
  faSave,
  faSearch,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

function formatDateString(dateString) {
  const date = new Date(dateString);

  // Define an array of month names
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get the month, day, and year
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  // Get the hours and minutes
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");

  // Determine AM/PM and adjust hours
  const amPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert 24-hour format to 12-hour format

  // Construct the formatted date string
  const formattedDate = `${month} ${day}, ${year} ${hours}:${minutes}${amPm}`;

  return formattedDate;
}

const AccountManagementPage = () => {
  const [modalDeleteAcc, setModalDeleteAcc] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);

  const { adminData, isLoading, isError } = useFetchAccountManagement();
  console.log(" Admin Info", adminData);
  console.log("Is Loading Admin Ifon", isLoading);

  const { delAdmin, isLoading: isDeleting } = useDeleteAdmin();
  console.log("Delete Admin Info", delAdmin);
  console.log("Is Pending Admin Ifon", isDeleting);

  // Function to delete account by id
  const handleDeleteAcc = () => {
    if (selectedAccount?.id) {
      delAdmin({ adminId: selectedAccount.id });
      setModalDeleteAcc(false);

      //   console.log("Deleted Admin",selectedAccount.id);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-12 py-10">
        <div className="font-[500]text-[#475367] col-span-4 text-[20px]">
          <p>Users ({adminData?.data?.data?.admins?.length})</p>
        </div>

        <div className="col-span-8">
          <div className="flex items-center justify-between">
            <div className="relative w-3/4">
              <input
                type="text"
                className="w-full rounded-md border bg-gray-50 px-1 py-2 pl-10 text-[14px] focus:outline-none"
                placeholder="Search here..."
              />
              <div className="absolute left-3 top-1.5 text-gray-400">
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>

            <div className="border-grey-300 flex items-center gap-2 rounded border-2 px-3 py-1.5">
              <span>
                <svg
                  width="14"
                  height="11"
                  viewBox="0 0 14 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.979126 0.864583C0.979126 0.438864 1.32424 0.09375 1.74996 0.09375H12.5416C12.9673 0.09375 13.3125 0.438864 13.3125 0.864583C13.3125 1.2903 12.9673 1.63542 12.5416 1.63542H1.74996C1.32424 1.63542 0.979126 1.2903 0.979126 0.864583Z"
                    fill="#667185"
                  />
                  <path
                    d="M2.52079 5.48958C2.52079 5.06386 2.86591 4.71875 3.29163 4.71875H11C11.4257 4.71875 11.7708 5.06386 11.7708 5.48958C11.7708 5.9153 11.4257 6.26042 11 6.26042H3.29163C2.86591 6.26042 2.52079 5.9153 2.52079 5.48958Z"
                    fill="#667185"
                  />
                  <path
                    d="M4.83329 9.34375C4.40757 9.34375 4.06246 9.68886 4.06246 10.1146C4.06246 10.5403 4.40757 10.8854 4.83329 10.8854H9.45829C9.88401 10.8854 10.2291 10.5403 10.2291 10.1146C10.2291 9.68886 9.88401 9.34375 9.45829 9.34375H4.83329Z"
                    fill="#667185"
                  />
                </svg>
              </span>

              <span>Filter by role </span>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-white text-[13px] text-[#344054]">
          <thead>
            <tr className="min-w-full border-0 border-red-500 bg-[#E4E7EC]">
              <th className="border-b p-4 text-left">S/N</th>
              <th className="border-b p-4 text-left">Name</th>
              <th className="border-b p-4 text-left">Email Address</th>
              <th className="border-b p-4 text-left">Roles</th>
              <th className="border-b p-4 text-left">Joined</th>
              <th className="border-b p-4 text-left">Action</th>
            </tr>
          </thead>
          {isError ? (
            "Network issue"
          ) : isLoading ? (
            "Loading.."
          ) : (
            <tbody className="text-[14px]">
              {adminData?.data?.data?.admins?.map((account, id) => (
                <tr key={id}>
                  <td className="border-b p-4">{id + 1}</td>
                  <td className="border-b p-4">
                    {account.firstname} {account.lastname}
                  </td>
                  <td className="border-b p-4">{account.email}</td>
                  <td className="border-b p-4">{account.role}</td>
                  <td className="border-b p-4">
                    {account.joined_date
                      ? formatDateString(account.joined_date)
                      : "N/A"}
                  </td>

                  <td className="flex justify-between gap-2 border-b p-3">
                    <DashButton className="rounded text-white">
                      <FontAwesomeIcon icon={faEdit} /> {account.actionEdit}
                    </DashButton>

                    <DashButton
                      onClick={() => {
                        setSelectedAccount(account);
                        setModalDeleteAcc(true);
                      }}
                      className="rounded border border-gray-500 bg-white text-gray-600 lg:hover:bg-white"
                    >
                      <FontAwesomeIcon icon={faTrash} /> {account.actionDel}
                    </DashButton>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>

      {modalDeleteAcc && selectedAccount && (
        <Modal>
          <BorderCard className="w-2/5 rounded-lg bg-white p-6 shadow-lg">
            <button
              className="float-right text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => setModalDeleteAcc((prev) => !prev)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>

            <div className="mt-4 text-center">
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className="rounded-full bg-[#F2A356] p-2 text-[24px] text-white"
              />
              <h2 className="mb-4 text-[16px] font-[600] text-[#23314A]">
                Delete {selectedAccount.firstname}?
              </h2>
              <p className="mb-6 text-[14px] text-[#98A2B3]">
                Are you sure you want to delete {selectedAccount.firstname} as{" "}
                {selectedAccount.role}.
              </p>

              <div className="flex justify-center space-x-4">
                <CommonButton
                  onClick={() => setModalDeleteAcc(false)}
                  className="rounded-md border border-gray-400 px-9 py-2 text-gray-600 hover:bg-gray-100"
                  variant="outline"
                >
                  Reject
                </CommonButton>

                <CommonButton
                  onClick={handleDeleteAcc}
                  className="hover:bg-primary-color-700 ml-6 rounded-md bg-primary-color-600 px-9 py-2 text-white"
                  disabled={isDeleting}
                >
                  {isDeleting ? "Deleting..." : "Delete"}
                </CommonButton>
              </div>
            </div>
          </BorderCard>
        </Modal>
      )}
    </div>
  );
};

export default AccountManagementPage;
