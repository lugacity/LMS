import ProjectAreaNav from "@/Components/admindashboard/project-area/ProjectAreaNav";
import { useFetchAllAdminCourses } from "@/hooks/course-management/use-fetch-all-courses";
import { cn } from "@/lib/utils";
import { FaArrowLeft } from "react-icons/fa6";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

function General() {
  const { pathname } = useLocation();
   const { state } = useLocation();
  const { id } = useParams();
  // console.log("ID PROJECT AREA", id);
  const navigate = useNavigate();

  // const { data, isLoading, error, refetch } = useFetchAllAdminCourses(id);
  // console.log("General Project", data);

  const selectedCourse = state?.selectedCourse;
  const selectedCohort = state?.selectedCohort;
  console.log("Selected Course in Cohort of Month:", selectedCohort);

  // const cohort = state?.cohorts;

  // console.log("Selected Course in General:", selectedCourse);

  return (
    <div>
      <ProjectAreaNav title={"General Group"} />
      <section>
        <div className="my-12 flex items-center gap-3">
          <button
            className="flex items-center gap-4"
            onClick={() => navigate("/admin/project-area")}
          >
            <span className="rounded-sm border border-[#E4E7EC] px-[9px] py-[7.7px]">
              <FaArrowLeft />
            </span>
            <span className="capitalize text-[#667185]">Go back</span>
          </button>
          <h2 className="text-2xl font-medium text-[rgb(52,64,84)]">
            {/* {selectedCourse?.title || "Default Title"} */}
            {selectedCourse
              ? selectedCourse.title
              : "No course selected"} |{" "}
            {selectedCohort ? selectedCohort : "No cohort selected"}
            {/* Project Consultant Training Programme (Bundle) | May Cohort 2024 */}
          </h2>
        </div>
        <div className="w-max border-b border-b-[#E4E7EC]">
          <ul className="flex items-center gap-4 *:capitalize">
            <li
              className={cn(
                "after:contents-[''] relative h-full cursor-pointer py-4 text-sm font-medium capitalize text-[#344054] transition-colors duration-150 *:capitalize after:absolute after:-bottom-[2px] after:left-0 after:m-auto after:h-[2px] after:w-0 after:bg-primary-color-600 after:transition-all after:duration-150 hover:text-primary-color-600 hover:after:w-full",
                pathname.endsWith("/general")
                  ? "text-primary-color-600 after:w-full"
                  : "",
              )}
            >
              <Link to={`/admin/project-area/${id}/general`}>
                course management
              </Link>
            </li>
            <li
              className={cn(
                "after:contents-[''] relative h-full cursor-pointer py-4 text-sm font-medium capitalize text-[#344054] transition-colors duration-150 *:capitalize after:absolute after:-bottom-[2px] after:left-0 after:m-auto after:h-[2px] after:w-0 after:bg-primary-color-600 after:transition-all after:duration-150 hover:text-primary-color-600 hover:after:w-full",
                pathname.endsWith("/general/course-tool")
                  ? "text-primary-color-600 after:w-full"
                  : "",
              )}
            >
              <Link to={`/admin/project-area/${id}/general/course-tool`}>
                Course Tools & Resources
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <Outlet />
        </div>
      </section>
    </div>
  );
}

export default General;
