import { CommonButton } from "@/Components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import { FaArrowLeft } from "react-icons/fa6";
import { useState } from "react";

function ProjectCohortSelection({
  setModal,
  onClick,
  cohorts,
  selectedCourse,
}) {
  const [selectedCohort, setSelectedCohort] = useState(null);

  return (
    <section>
      <div className="flex items-start gap-2">
        <button
          onClick={() => setModal((prev) => !prev)}
          className="rounded-sm border border-[#E4E7EC] px-[9px] py-[7.7px]"
          aria-label="back button"
        >
          <FaArrowLeft />
        </button>
        <h2 className="text-2xl font-bold text-[#101928]">
          {selectedCourse.title}
          {/* Project Consultant Training Programme (Bundle) */}
        </h2>
      </div>
      <p className="mb-6 mt-3 text-[#667185]">
        Select a cohort for this project area
      </p>
      <div>
        <p className="text-sm font-medium text-[#475367]">Select cohort: </p>
        <div>
          <Select
            className="w-full"
            onValueChange={(value) => setSelectedCohort(value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a cohort" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Cohorts</SelectLabel>
                {cohorts.length > 0 ? (
                  cohorts.map((cohort, i) => (
                    <SelectItem key={i} value={cohort.id}>
                      {cohort.cohort}{" "}
                      {/* Assuming 'time' is a property in your cohort data */}
                    </SelectItem>
                  ))
                ) : (
                  <p>No cohorts available.</p>
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <CommonButton
        className="ml-auto mt-6 block w-28 bg-primary-color-600"
        onClick={() => {
          console.log("Selected cohort ID:", selectedCohort);
          onClick();
        }}
        disabled={!selectedCohort}
        selectedCohort={selectedCohort}
      >
        Next
      </CommonButton>
    </section>
  );
}

export default ProjectCohortSelection;
