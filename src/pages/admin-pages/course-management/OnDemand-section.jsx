import { CommonButton } from "@/Components/ui/button";

import CoursesRecordedSection from "@/Components/admindashboard/course-management/recoded-session/CoursesRecordedSection";

// import { useCourseManagementInfo } from "@/hooks/useCourseManagementInfo";
import { ScrollRestoration } from "react-router-dom";

import { useCourseManagementInfo } from "@/hooks/useCourseManagementInfo";

import CreateOndemandForm from "@/Components/admindashboard/course-management/on-demand-section/CreateOndemandForm";

function OnDemandCourseSection() {
  const { setActiveTab } = useCourseManagementInfo();

  return (
    <>
      <ScrollRestoration />

      <div className="mb-4 flex items-center justify-between">
        <h2 className="mb-2 mt-5 text-[24px] font-[500] text-[#344054]">
          On-Demand Course Sections
        </h2>

        <button className="flex items-center rounded border border-[#667185] bg-transparent px-4 py-2 text-[#667185] hover:bg-[#f0f0f0]">
          Preview
        </button>
      </div>
      <main className="grid grid-cols-[3fr_1fr] gap-10 rounded-[10px] border-2 border-[#F0F2F5] p-12 pr-6">
        <div>
          <CreateOndemandForm />
        </div>
        <div className="overflow-y-hidden">
          <CoursesRecordedSection />
        </div>
      </main>
      <div>
        <CommonButton
          className="ml-auto mt-8 block bg-primary-color-600 font-normal"
          onClick={() => setActiveTab((prev) => prev + 1)}
        >
          Save and Continue
        </CommonButton>
      </div>
    </>
  );
}

export default OnDemandCourseSection;
