import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";
import { CommonButton } from "@/Components/ui/button";
import { useGetSingleCohort } from "@/hooks/course-management/use-get-singleCohorts";
import { courseSections } from "@/lib/courseSection";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import { useParams, useSearchParams } from "react-router-dom";

function AdminCoursesSection() {
  const [active, setActive] = useState("1");
  const [queryString] = useSearchParams();

  const { courseId } = useParams();
  const cohortId = queryString.get("cohortId");

  const { data, isLoading, error } = useGetSingleCohort(courseId, cohortId);

  console.log({ data, isLoading, error });
  // console.log(data.data.data.recorded_sessions);

  if (isLoading) return <p>loading...</p>;

  if (error)
    return <p>{error.response.data.message ?? "Something went wrong"}</p>;

  if (!data) return <p>no data yet!!</p>;

  return (
    <div className="rounded-2xl border border-lms-border px-2 py-6">
      <aside className="h-screen overflow-y-auto">
        <div className={cn("mb-4 flex items-center justify-between")}>
          <h3 className={cn("whitespace-nowrap text-lg font-medium")}>
            Course section
          </h3>

          <CommonButton
            variant="outline"
            className="space-x-1 px-[6px] py-2 text-xs text-[#667185]"
          >
            <span className="text-xs">
              <HiOutlinePencil />
            </span>
            <span className="text-sm">Edit section</span>
          </CommonButton>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {data?.data?.data?.recorded_sessions.map((section) => {
            return (
              <AccordionItem value={section.title} key={section.id}>
                <AccordionTrigger
                  className={cn(
                    "group/section [&[data-state=open]]:bg-bg-primary-color-300/20 px-5 pb-[10px] hover:bg-primary-color-300/20",
                    active === section.id && "bg-primary-color-300/20",
                  )}
                  onClick={() => setActive(section.id)}
                >
                  <div className="text-left">
                    <p className="font-poppins text-lg font-light capitalize text-tertiary-color-900 lg:text-xl">
                      Section {section.section}
                    </p>
                    <p
                      className={cn(
                        "text-base font-light capitalize leading-6 text-tertiary-color-700 group-hover/section:font-semibold group-hover/section:text-primary-color-600",
                        active === section.id &&
                          "font-semibold text-primary-color-600",
                      )}
                    >
                      {section.title}
                    </p>
                  </div>
                </AccordionTrigger>
                {section?.videos?.map((video, i) => {
                  return (
                    <AccordionContent
                      key={video.id}
                      className="group/topic cursor-pointer px-5 py-[10px] hover:bg-primary-color-300/20"
                    >
                      <div className="flex items-start gap-3 text-sm group-hover/topic:text-primary-color-600 md:text-base">
                        <span>0{i + 1}.</span>
                        <p>{video.video_title}</p>
                      </div>
                    </AccordionContent>
                  );
                })}
              </AccordionItem>
            );
          })}
        </Accordion>
      </aside>
    </div>
  );
}

export default AdminCoursesSection;
