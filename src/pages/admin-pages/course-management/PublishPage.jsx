import CourseInfo from "@/Components/admindashboard/course-management/publish-page/CourseInfo";
import CourseType from "@/Components/admindashboard/course-management/publish-page/CourseType";
// import PublishCourseSection from "@/Components/admindashboard/course-management/publish-page/PublishCourseSection";
import { CommonButton } from "@/Components/ui/button";
import { useCourseManagementInfo } from "@/hooks/useCourseManagementInfo";

import { ScrollRestoration } from "react-router-dom";

function PublishPage() {
  const { setActiveTab } = useCourseManagementInfo();

  return (
    <>
      <ScrollRestoration />
      <div className="mb-4 flex items-center justify-between">
        <h2 className="mb-2 mt-5 text-[24px] font-[500] text-[#344054]">
          Publish
        </h2>

        <button className="flex items-center rounded border border-[#667185] bg-transparent px-4 py-2 text-[#667185] hover:bg-[#f0f0f0]">
          Publish
        </button>
      </div>

      <div>
        <div className="space-y-14">
          <CourseInfo />
          <CourseType />
          {/* <PublishCourseSection /> */}
        </div>

        <div className="flex items-center justify-around">
          <CommonButton
            onClick={() => setActiveTab((prev) => prev - 1)}
            className="ml-auto mt-14 block w-full max-w-[182px] bg-gray-400 hover:bg-gray-600"
          >
            Back
          </CommonButton>

          <CommonButton className="ml-auto mt-14 block w-full max-w-[182px] bg-primary-color-600">
            Publish
          </CommonButton>
        </div>
      </div>
    </>
  );
}

export default PublishPage;
