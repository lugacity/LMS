import { IoSearch } from "react-icons/io5";
import CreatedCourseCard from "@/Components/admindashboard/course-management/CreatedCourseCard";
import { createdCourses } from "@/lib/courses";
import Modal from "@/pages/auth/components/Modal";
import BorderCard from "@/Components/BorderCard";
import ProjectCohortSelection from "../project-area/ProjectCohortSelection";
import ProjectAreaTools from "@/Components/admindashboard/project-area/ProjectAreaTools";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "@/lib/utils";

function CourseWorkAreaWithCourse({ data }) {
  const [modal, setModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState({});
  const [selectedCohort, setSelectedCohort] = useState({
    cohort: "",
    cohortId: "",
  });
  const navigate = useNavigate();

  const handleModal = (id) => {
    setModal((prev) => !prev);

    const course = data.find((course) => course.id === id);
    setSelectedCourse(course);
  };

  const handleNext = (id) => {
    navigate(
      `${id}/documents?cohortId=${selectedCohort.cohortId}&title=${selectedCourse.title}&cohort=${selectedCohort.cohort}`,
    );
  };

  return (
    <div>
      <header className="mt-7 flex items-center justify-between px-4 py-5">
        <p className="text-xl text-[#475367]">Courses({data.length})</p>
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
      </header>
      <main className="grid grid-cols-3 gap-[18px]">
        {data.map((course) => {
          return (
            <div
              key={course.id}
              onClick={() => {
                handleModal(course.id);
              }}
            >
              <CreatedCourseCard
                title={course.title}
                rating={course.rating}
                review={course.reviews}
                imgSrc={course.cover_image}
                path=""
                date={
                  course?.cohorts[0]
                    ? formatDate(course?.cohorts[0].created_at)
                    : "not published"
                }
              />
            </div>
          );
        })}
      </main>
      {modal && (
        <Modal>
          <BorderCard className="w-full max-w-[980px] rounded-[10px] bg-white">
            <div className="grid grid-cols-[1fr_2fr] gap-10">
              <CreatedCourseCard
                title={selectedCourse.title}
                rating={selectedCourse.rating}
                review={selectedCourse.reviews}
                path=""
              />

              <ProjectCohortSelection
                setModal={setModal}
                onClick={() => handleNext(selectedCourse.id)}
                selectedCourse={selectedCourse}
                cohorts={selectedCourse?.cohorts || []}
                selectedCohort={selectedCohort}
                setSelectedCohort={setSelectedCohort}
              />
            </div>
          </BorderCard>
        </Modal>
      )}
    </div>
  );
}

export default CourseWorkAreaWithCourse;
