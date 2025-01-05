import ShareDocumentModal from "@/Components/admindashboard/course-work-area/ShareDocumentModal";
import BorderCard from "@/Components/BorderCard";
import { CommonButton } from "@/Components/ui/button";
import { documents } from "@/lib/documents";
import Modal from "@/pages/auth/components/Modal";
import { Input } from "postcss";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { RxDownload } from "react-icons/rx";

function CourseWorkAreaWithDocs({ data }) {
  const [modal, setModal] = useState(false);

  return (
    <div className="py-6">
      <h2 className="text-2xl font-medium text-[#344054]">Shared documents</h2>
      <p className="my-3 text-sm text-[#667185]">
        Access and manage documents shared across courses and sections for
        streamlined collaboration.
      </p>
      <CommonButton
        variant={"outline"}
        onClick={() => setModal((prev) => !prev)}
      >
        Share new document
      </CommonButton>
      <div className="mt-8 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4">
        {data?.data?.data?.documents.map((document, i) => {
          return (
            <div key={i} className="">
              <div className="h-32 overflow-hidden rounded-tl-xl rounded-tr-xl md:h-36">
                <img
                  src={document.url}
                  alt={document.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between gap-1 px-2 py-[10px] sm:gap-2 md:px-3">
                <p className="truncate text-[10px] font-light text-tertiary-color-700 md:text-sm">
                  Material for {data?.data?.data?.title}
                </p>
                <button
                  type="button"
                  className="cursor-pointer rounded-full bg-[#FFEBF0] p-1 text-primary-color-600 md:p-3 md:text-xl"
                >
                  <RxDownload />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {modal && <ShareDocumentModal setModal={setModal} />}
    </div>
  );
}

export default CourseWorkAreaWithDocs;
