import DashButton from "../auth/ButtonDash";
import { useCourseManagementInfo } from "@/hooks/useCourseManagementInfo";
import SaveButton from "@/Components/admindashboard/course-management/courses/SaveButton";
import { ScrollRestoration } from "react-router-dom";
import { Popover, PopoverContent } from "@/Components/ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Form } from "@/Components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "@/Components/ui/form-input";
import CohortSelection from "@/Components/admindashboard/course-management/courses/CohortSelection";
import { ChevronDown } from "lucide-react";
import { CommonButton } from "@/Components/ui/button";

const cohort = [
  {
    id: 1,
    month: "January",
  },
  {
    id: 2,
    month: "february",
  },
  {
    id: 3,
    month: "march",
  },
  {
    id: 4,
    month: "april",
  },
  {
    id: 5,
    month: "may",
  },
  {
    id: 6,
    month: "june",
  },
  {
    id: 7,
    month: "july",
  },
  {
    id: 8,
    month: "august",
  },
  {
    id: 9,
    month: "september",
  },
  {
    id: 10,
    month: "october",
  },
  {
    id: 11,
    month: "november",
  },
  {
    id: 12,
    month: "december",
  },
];
const access = [
  {
    id: 1,
    access: "one month access",
  },
  {
    id: 2,
    access: "three month access ",
  },
  {
    id: 3,
    access: "six month access",
  },
  {
    id: 4,
    access: "annual subscription",
  },
];

const cohortArr = cohort.map((item) => item.month);
const accessArr = access.map((item) => item.access);

const courseTypeSchema = z.object({
  cohorts: z.enum([...cohortArr], {
    required_error: "You need to select a notification type.",
  }),
  accessType: z.enum([...accessArr], {
    required_error: "You need to select a notification type.",
  }),
  coursePrice: z
    .string({ message: "This field is required" })
    .min(1, { message: "This field is required" }),
  discountPrice: z
    .string({ message: "This field is required" })
    .min(1, { message: "this field is required" }),
  duration: z
    .string({ message: "This field is required" })
    .min(1, { message: "this field is required" }),
});

const CourseType = () => {
  const { setActiveTab } = useCourseManagementInfo();

  const onSubmit = () => {
    console.log("hellow");
  };

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
          Course Type
        </h2>

        <SaveButton onClick={() => setActiveTab((prev) => prev + 1)}>
          Save and Continue
        </SaveButton>
      </div>
      <Form {...form}>
        <form action="" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mb-4 mt-5 grid grid-cols-12 gap-10 rounded border border-gray-300 p-10 md:mb-0">
            <div className="col-span-5">
              <h3 className="text-[20px] font-[500] text-[#344054] lg:text-[24px]">
                Live session + Mentoring
              </h3>
              <p>
                Add Course Original Price, Discounted Price, Cohort, and
                Duration
              </p>
            </div>

            <div className="col-span-7 space-y-4">
              {/* Course Original Price and Discounted Price */}
              <div className="flex space-x-4">
                <FormInput
                  label={"Course Original Price"}
                  className="w-full rounded border border-gray-300 p-2"
                  placeholder="£2,200"
                  control={form.control}
                  name="coursePrice"
                  labelClass={"text-base font-medium"}
                  id="coursePrice"
                  type="number"
                />

                <p className="font-[500]"></p>
                <FormInput
                  label={"Discounted Price"}
                  className="w-full rounded border border-gray-300 p-2"
                  placeholder="£2,200"
                  control={form.control}
                  name="discountPrice"
                  labelClass={"text-base font-medium"}
                  id="discountPrice"
                  type="number"
                />
              </div>

              {/* Duration and Time */}
              <div className="flex space-x-4">
                <div>
                  <FormInput
                    label={"Monday - Friday"}
                    className="w-full rounded border border-gray-300 p-2"
                    placeholder="£2,200"
                    control={form.control}
                    name="duration"
                    labelClass={"text-base font-medium"}
                    id="duration"
                    type="text"
                  />
                  <p className="mb-1 mr-2 flex justify-end font-[500] text-[#667185]">
                    {`${form.watch("duration") ? form.watch("duration").length : 0}/30`}
                  </p>
                </div>
                {/* Time (7:00pm default) */}
                <div className="flex-1">
                  <FormInput
                    label={"Time"}
                    className="w-full rounded border border-gray-300 p-2"
                    type="time"
                    control={form.control}
                    name="time"
                    labelClass={"text-base font-medium"}
                    id="time"
                  />
                </div>
              </div>

              <div className="w-full pt-9">
                <p className="font-[600] text-gray-600">Cohort</p>
                <Popover className="w-full">
                  <PopoverTrigger className="flex w-full items-center justify-between rounded-[6px] border border-[#D0D5DD] px-4 py-4 text-left text-[#98A2B3]">
                    <span>May Cohort</span>
                    <span>
                      <ChevronDown />
                    </span>
                  </PopoverTrigger>
                  <PopoverContent className="block h-[400px] w-[500px] overflow-y-scroll rounded-md bg-white px-2 py-8">
                    <CohortSelection
                      data={cohort}
                      control={form.control}
                      name={"cohorts"}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>

          {/* On-Demand Session */}
          <div className="mb-4 mt-5 grid grid-cols-12 gap-10 rounded border border-gray-300 p-10 md:mb-0">
            <div className="col-span-5">
              <h3 className="text-[20px] font-[500] text-[#344054] lg:text-[24px]">
                On-Demand Session
              </h3>
              <p>Add Multiple Durations and Prices</p>
            </div>

            <div className="col-span-7 space-y-4">
              {/* Course Original Price and Discounted Price */}
              <div className="grid grid-cols-[2fr_1.2fr_1fr] items-end space-x-4">
                {/* Course Original Price */}
                <div>
                  <p className="font-[600] text-gray-600">Duration</p>
                  <Popover className="w-full">
                    <PopoverTrigger className="flex w-full items-center justify-between rounded-[6px] border border-[#D0D5DD] px-4 py-4 text-left text-[#98A2B3]">
                      <span>one month access</span>
                      <span>
                        <ChevronDown />
                      </span>
                    </PopoverTrigger>
                    <PopoverContent className="block h-[400px] w-[500px] overflow-y-scroll rounded-md bg-white px-2 py-8">
                      <CohortSelection
                        data={access}
                        control={form.control}
                        name={"accesstype"}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <FormInput
                    label={"Price"}
                    className="w-full rounded border border-gray-300 p-2"
                    placeholder="£39,200"
                    control={form.control}
                    name="discountPrice"
                    labelClass={"text-base font-medium"}
                    id="discountPrice"
                    type="number"
                  />
                </div>
                <CommonButton
                  type="button"
                  className="block w-full rounded bg-primary-color-600 px-4 py-2"
                >
                  Add
                </CommonButton>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end pt-10">
            <DashButton className="rounded px-4 py-2 text-white">
              Save & Continue
            </DashButton>
          </div>
        </form>
      </Form>
    </>
  );
};

export default CourseType;
