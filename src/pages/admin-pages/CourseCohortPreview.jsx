import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

import SaveButton from "@/Components/admindashboard/course-management/courses/SaveButton";
import { ScrollRestoration } from "react-router-dom";

import { Form } from "@/Components/ui/form";
import FormInput from "@/Components/ui/form-input";
import CohortSelection from "@/Components/admindashboard/course-management/courses/CohortSelection";
import { CommonButton } from "@/Components/ui/button";

import { ClipLoader } from "react-spinners";
import { formatCurrency } from "@/lib/formatNumber";

import { cohorts } from "@/lib/cohorts";
import { cn } from "@/lib/utils";
import { useCreateCourseType } from "@/hooks/course-management/use-create-course-type";
import { courseTypeSchema } from "@/lib/form-schemas/forms-schema";
import DashButton from "../auth/ButtonDash";
import { fetchCohorts } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { useCreateSingleCohort } from "@/hooks/course-management/use-create-single-cohorts";


const formatDate = (date) => {
    // Create a Date object from the ISO string
    const createdAt = new Date(date);
  
    // Check if date is valid
    if (isNaN(createdAt.getTime())) {
      return "Invalid Date";
    }
  
    // Format date and time
    const day = createdAt.getDate();
    const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(createdAt);
    const year = createdAt.getFullYear();
  
    // Extract time parts and handle 12-hour format
    const hour = createdAt.getHours();
    const min = createdAt.getMinutes().toString().padStart(2, '0'); // Add leading zero if needed
    const get12hrs = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    const amOrPm = hour >= 12 ? "PM" : "AM";
  
    return `${day} ${month}, ${year} | ${get12hrs}:${min}${amOrPm}`;
  };
  


const CourseCohortPreview = () => {
  const [cohort, setCohort] = useState("");
  const [cohortErr, setCohortErr] = useState("");
  
  const {createSingleCohort, isCreating} = useCreateSingleCohort()
  
//   let firstCohort = getFromLocalStorage("cohorts");
//   const [cohortPreview, setCohortPreview] = useState([{ cohort: firstCohort, created_at: "" }]);

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["get-cohorts"],
        queryFn: fetchCohorts,
    });

    

    const handleAddCohort = () =>{
        createSingleCohort( {
            "cohort": cohort
        })
    }

//   const onSubmit = async (data) => {
//     if (!cohort) return setCohortErr("Input cohort");
//     if (data.duration.length < 1) return setCohortErr("Input duration");

    

//     // createCourseType(data, {
//     //   onSuccess: () => {
//     //     setCohortPreview((prev) => [...prev, { cohort, created_at: new Date().toLocaleString() }]);
//     //     localStorage.setItem("cohorts", cohort);
//     //   },
//     // });
//   };

  const form = useForm({
    resolver: zodResolver(courseTypeSchema),
    defaultValues: {
      duration: "",
    },
  });

  return (
    <>
      <ScrollRestoration />

      <div className="mb-4 flex items-center justify-between">
        <h2 className="mb-2 mt-5 text-[24px] font-[500] text-[#344054]">
          Course Cohort
        </h2>

        <SaveButton onClick={() => form.handleSubmit(onSubmit)()}>
          Save and Continue
        </SaveButton>
      </div>


          <div className="mb-4 mt-5 items-start grid grid-cols-12 gap-10 rounded border border-gray-300 p-10 md:mb-0">
            <div className="col-span-5">
              <h3 className="text-[20px] font-[500] text-[#344054] lg:text-[24px]">
                Live session + Mentoring
              </h3>
              <p>
                Add Course Original Price, Discounted Price, Cohort, and
                Duration
              </p>

              <div className="w-full pt-3">
                <CohortSelection
                  data={cohorts}
                  setCohorts={setCohort}
                  text={"Select cohort"}
                />
                <div>
                  <span className={cn("text-primary-color-600", cohort && "hidden")}>
                    {cohortErr}
                  </span>
                  {cohort && (
                    <p className="mt-5 flex items-center gap-2 capitalize text-primary-color-600">
                      <span>
                        <FaCheck />
                      </span>
                      <span>{cohort} </span>
                    </p>
                  )}
                </div>
              </div>

              <div className="pt-4">
                    <DashButton onClick={handleAddCohort} disabled={isCreating} className="text-white">
                        {isCreating ? (
                        <ClipLoader size={20} color={"#fff"} />
                            ) :( 
                                "Add cohort"
                            )}
                    </DashButton>
              </div>
              
            </div>

            {isLoading ? (<ClipLoader size={20} color={"#CC1747"} />) :
                <div className="col-span-7 space-y-3 ">
                    {data?.data.data.map((cohortItem) => (
                        <div className="bg-[#FFEBF080] p-4 rounded-lg border border-[#CC1747]">
                            <div>
                                <p className="font-[600] text-gray-600 text-[18px]">{cohortItem.cohort}</p>
                                <p className="text-[#CC1747] text-[12px]">{formatDate(cohortItem.created_at)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            }
          </div>

          <div className="flex items-center justify-end pt-10">
            <CommonButton
              className="min-w-32 rounded bg-primary-color-600"
              disabled={isCreating}
            >
              {isCreating ? (
                <ClipLoader size={20} color={"#fff"} />
              ) : (
                "Save & Continue"
              )}
            </CommonButton>
          </div>

    </>
  );
};

export default CourseCohortPreview;
