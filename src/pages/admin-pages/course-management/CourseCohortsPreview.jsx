import BorderCard from "@/Components/BorderCard";
import Error from "@/Components/Error";
import { CommonButton } from "@/Components/ui/button";
import { useGetAllCohorts } from "@/hooks/course-management/use-fetch-all-cohorts";
import DashButton from "@/pages/auth/ButtonDash";
import { Link, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";

// const cohorts = [
//   {
//     id: "01",
//     month: "May Cohort",
//     year: "2024",
//     created: "Created: 01/02/2023",
//   },
//   {
//     id: "01",
//     month: "April Cohort",
//     year: "2024",
//     created: "Created: 01/02/2023",
//   },
//   {
//     id: "01",
//     month: "October Cohort",
//     year: "2024",
//     created: "Created: 01/02/2023",
//   },
//   {
//     id: "01",
//     month: "January Cohort",
//     year: "2024",
//     created: "Created: 01/02/2023",
//   },
// ];

const CourseCohortsPreview = () => {
  const formatDate = (date) => {
    const createdAt = new Date(date);
    const locale = navigator.language;

    return new Intl.DateTimeFormat(locale).format(createdAt);
  };
  const { courseId } = useParams();

  const { data, isLoading, error, refetch } = useGetAllCohorts(courseId);
  console.log(error);

  return (
    <div>
      {/* Live Session + Mentoring */}
      <BorderCard className="mb-4 mt-5 grid grid-cols-[1fr_2fr]">
        <div className="">
          <h3 className="text-[20px] font-[500] text-[#344054] lg:text-[24px]">
            Live Session + Mentoring
          </h3>
          <p>Add Course Cohort</p>

          <DashButton className="rounded px-4 py-2 text-white">
            Add Cohort
          </DashButton>
        </div>

        {isLoading ? (
          <div className="mt-6 h-full w-full">
            <p className="mx-auto w-min text-center">
              <ClipLoader color="#CC1747" />
            </p>
          </div>
        ) : error ? (
          <div className="mt-6 h-full w-full space-y-3">
            <p className="text-center">
              Something Went Wrong::{error?.response?.data?.message ?? ""}
            </p>

            <CommonButton
              className="mx-auto block bg-primary-color-600"
              onClick={refetch}
            >
              {"Retry"}
            </CommonButton>
          </div>
        ) : (
          <div className="w-full max-w-[612px] space-y-4 justify-self-end">
            {data?.data?.data.length === 0 && (
              <p className="italic text-slate-400">No cohorts present... </p>
            )}
            {data?.data?.data?.map((cohort) => (
              <Link
                to={`/admin/course/management/info/${courseId}?cohort=${cohort.cohort}&cohortId=${cohort.id}`}
                key={cohort.id}
                className="block w-full rounded-lg border px-4 py-6 text-left hover:border-primary-color-600 hover:bg-[#FFEBF0]"
              >
                <span className="mb-3 block text-lg font-semibold text-tertiary-color-700">
                  {`${cohort.cohort}`}
                </span>
                <span className="block text-xs text-primary-color-600">
                  Created {formatDate(cohort.created_at)}
                </span>
              </Link>
            ))}
          </div>
        )}
      </BorderCard>
    </div>
  );
};

export default CourseCohortsPreview;
