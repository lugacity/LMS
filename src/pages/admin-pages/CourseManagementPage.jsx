import { useCourseManagementInfo } from "@/hooks/useCourseManagementInfo";
import SaveButton from "@/Components/admindashboard/course-management/courses/SaveButton";
import { ScrollRestoration } from "react-router-dom";

import CourseCreationForm from "@/Components/admindashboard/course-management/CourseCreationForm";
// import MyCKEditor from '../Components/pages/CDKEditor'

const CourseManagementPage = () => {
  const { setActiveTab } = useCourseManagementInfo();

  return (
    <>
      <ScrollRestoration />

      <div className="mb-4 flex items-center justify-between">
        <h2 className="mb-2 mt-5 text-[24px] font-[500] text-[#344054]">
          Course Information
        </h2>

        <SaveButton onClick={() => setActiveTab((prev) => prev + 1)}>
          Save and Continue
        </SaveButton>
      </div>
      <CourseCreationForm />
    </>
  );
};

export default CourseManagementPage;
