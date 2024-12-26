import { CommonButton } from "@/Components/ui/button";
import EditLiveRecordedSectionForm from "./EditLiveRecordedSectionForm";
import { useState } from "react";
import EditLiveSectionForm from "./EditLiveSectionForm";

function EditLiveSession({ setIsEdit }) {
  const [tab, setTab] = useState(1);
  return (
    <div className="mt-6">
      <div className="mb-4 flex w-max gap-4 border-b border-[#98A2B3]">
        <button
          className={`border-b-2 px-4 py-2 font-[600] ${tab === 1 ? "border-b-2 border-[#CC1747] text-[#CC1747]" : "border-b-transparent text-[#344054]"} `}
          onClick={() => setTab(1)}
        >
          Live Session
        </button>

        <button
          className={`border-b-2 px-4 py-2 font-[600] ${tab === 2 ? "border-b-primary-color-600 text-primary-color-600" : "border-b-transparent text-[#344054]"} `}
          onClick={() => setTab(2)}
        >
          Recorded
        </button>
      </div>

      {tab === 1 && <EditLiveSectionForm />}
      <CommonButton
        onClick={() => {
          localStorage.removeItem("recordedSection");
          setIsEdit((prev) => !prev);
        }}
        className="mb-5 ml-auto block w-max"
        variant={"secondary"}
      >
        Back
      </CommonButton>

      {tab === 2 && <EditLiveRecordedSectionForm />}
    </div>
  );
}

export default EditLiveSession;
