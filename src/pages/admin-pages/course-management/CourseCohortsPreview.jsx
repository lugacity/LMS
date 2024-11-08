import BorderCard from "@/Components/BorderCard";
import { useGetAllCohorts } from "@/hooks/course-management/use-fetch-all-cohorts";
import DashButton from "@/pages/auth/ButtonDash";
import { Link, useParams } from "react-router-dom";

const cohorts = [
  {
    id: "01",
    month: "May Cohort",
    year: "2024",
    created: "Created: 01/02/2023",
  },
  {
    id: "01",
    month: "April Cohort",
    year: "2024",
    created: "Created: 01/02/2023",
  },
  {
    id: "01",
    month: "October Cohort",
    year: "2024",
    created: "Created: 01/02/2023",
  },
  {
    id: "01",
    month: "January Cohort",
    year: "2024",
    created: "Created: 01/02/2023",
  },
];

const CourseCohortsPreview = () => {
  const formatDate = (date) => {
    const createdAt = new Date(date);
    const locale = navigator.language;

    return new Intl.DateTimeFormat(locale).format(createdAt);
  };
  const { courseId } = useParams();

  const { data, isLoading } = useGetAllCohorts(courseId);

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
          "loading..."
        ) : (
          <div className="w-full max-w-[612px] space-y-4 justify-self-end">
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
