import { useQuery } from "@tanstack/react-query";
import { formatDate } from "@/lib/format-date";

import { ClipLoader } from "react-spinners";
import { fetchCohorts } from "@/services/api";

const AllCohorts = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["get-cohorts"],
    queryFn: fetchCohorts,
  });
  return (
    <>
      {isLoading ? (
        <ClipLoader size={20} color={"#CC1747"} />
      ) : (
        <div className="col-span-7 space-y-3">
          {data?.data.data.map((cohortItem) => (
            <div
              key={cohortItem.id}
              className="w-full rounded-lg border border-primary-color-600 bg-[#FFEBF0] px-4 py-6 text-left"
            >
              <span className="mb-3 block text-lg font-semibold text-tertiary-color-700">
                {cohortItem.cohort}
              </span>
              <span className="block text-xs text-primary-color-600">
                {formatDate(cohortItem.created_at)}
              </span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default AllCohorts;
