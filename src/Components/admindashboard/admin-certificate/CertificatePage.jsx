import { IoSearch } from "react-icons/io5";

// import { createdCourses } from "@/lib/courses";
import CreatedCourseCard from "@/Components/admindashboard/course-management/CreatedCourseCard";
import { useState } from "react";
import { Link } from "react-router-dom";
import joinTeam from "../../../assets/images/join_team.png";
import { useFetchAllAdminCourses } from "@/hooks/course-management/use-fetch-all-courses";
// import CertificateIssueHistory from "@/pages/admin-pages/certificate/CertificateIssueHistory";

// export const certCourses = [
//   {
//     id: '1',
//     title: 'Project Consultant Training Programme (Bundle)',
//     date: ' 01/02/2023',
//     duration: '3 Months',

//   },
//   {
//     id: '2',
//     title: 'Project Consultant Training Programme (Bundle)',
//     date: ' 01/02/2024',
//     duration: '1 Month',

//   },
//   {
//     id: '3',
//     title: 'Project Consultant Training Programme (Bundle)',
//     date: ' 01/02/2024',
//     duration: '2 Months',

//   },

// ]

const CertificatePage = () => {
  // const [selectedCourse, setSelectedCourse] = useState({});
  const { data, isLoading, isError } = useFetchAllAdminCourses();
  console.log("Fetch The courses", data);
  console.log("Is the Course fetching", isLoading);

  return (
    <div>
      <header className="mt-7 flex items-center justify-between px-4 py-5">
        <p className="text-xl text-[#475367]">
          Courses({data?.data?.data?.courses.length})
        </p>
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

      <div>
        {isError ? (
          "Network error"
        ) : isLoading ? (
          "Loading...."
        ) : (
          <main className="grid grid-cols-3 gap-[18px]">
            {data?.data?.data?.courses.map((course) => {
              const path = `/admin/certificate/certificate-issue?id=${course.id}&title=${course.title}&coursetypes=${
                course.available_course_types.live_session ||
                course.available_course_types.on_demand
              }`;
              return (
                <div key={course.id}>
                  <Link to={path}>
                    <div className="rounded-lg bg-[rgb(252,252,252)] shadow-md">
                      <div className="h-[90px] w-full overflow-hidden rounded-t-lg md:h-[120px] lg:h-[190px] xl:h-[206px]">
                        <img
                          className="h-full w-full object-cover"
                          src={course.cover_image}
                        />
                      </div>

                      <div className="rounded-b-lg px-[20px] text-[14px] text-[#667185] md:py-2 lg:py-[14px] lg:text-[16px]">
                        <p className="py-[14px] text-[18px] font-[500]">
                          {course.title.length > 40
                            ? course.title.substring(0, 40) + "..."
                            : course.title}
                        </p>

                        <div className="flex justify-between">
                          <div>
                            <p className="text-[12px] font-[300] text-[#CC1747]">
                              End Date
                            </p>
                            <p className="text-[14px] font-[400] text-[#23314A]">
                              {course.duration}
                            </p>
                          </div>

                          <div>
                            <p className="text-[12px] font-[300] text-[#CC1747]">
                              Course Duration
                            </p>
                            <p className="text-[14px] font-[400] text-[#23314A]">
                              {course.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </main>
        )}
      </div>
    </div>
  );
};

export default CertificatePage;
