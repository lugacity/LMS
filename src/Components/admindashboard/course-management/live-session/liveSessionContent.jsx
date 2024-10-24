import { getSingleCohort } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const LiveSessionContent = () => {
  const {
    data: cohortData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["get-single-cohort"],
    queryFn: getSingleCohort,
  });
  if (isLoading) return <p>Loading....</p>;

  if (isError) return <p>something went wrong!!</p>;

  return (
    <div className="col-span-4">
      <div className="text-16px font-500 text-[#667185]">
        <p>Section 1</p>
        <p className="pt-4 capitalize">
          {cohortData.data.data.live_session.title}
        </p>
        <p className="py-4 capitalize">
          {cohortData.data.data.live_session.subtitle}
        </p>
      </div>

      <div>
        <button className="w-[300px] truncate rounded px-4 py-2 lg:bg-primary-color-600 lg:text-white lg:hover:bg-[#727988] lg:hover:text-[#313335]">
          {cohortData.data.data.live_session.lecture_link}
        </button>
      </div>
    </div>
  );
};

export default LiveSessionContent;
