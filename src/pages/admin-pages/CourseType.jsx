import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

import { useCourseManagementInfo } from "@/hooks/useCourseManagementInfo";
import SaveButton from "@/Components/admindashboard/course-management/courses/SaveButton";
import { ScrollRestoration } from "react-router-dom";

import { Form } from "@/Components/ui/form";
import FormInput from "@/Components/ui/form-input";
import CohortSelection from "@/Components/admindashboard/course-management/courses/CohortSelection";
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
import { ClipLoader } from "react-spinners";
import { formatCurrency } from "@/lib/formatNumber";

import { cohorts } from "@/lib/cohorts";
import { cn } from "@/lib/utils";
import { useCreateCourseType } from "@/hooks/course-management/use-create-course-type";

const access = [
  {
    id: 1,
    access: "One Month Access",
  },
  {
    id: 2,
    access: "3 Months Access",
  },
  {
    id: 3,
    access: "6 Months Access",
  },
  {
    id: 4,
    access: "Annual Subscription",
  },
  {
    id: 5,
    access: "Lifetime  Access",
  },
];

const courseTypeSchema = z.object({
  coursePrice: z
    .string({ message: "This field is required" })
    .min(1, { message: "This field is required" }),
  discountPrice: z
    .string({ message: "This field is required" })
    .min(1, { message: "this field is required" }),
  duration: z
    .string({ message: "This field is required" })
    .min(1, { message: "this field is required" }),
  time: z.string({ message: "This field is required" }),
});

const CourseType = () => {
  const { setActiveTab } = useCourseManagementInfo();

  const [cohort, setCohort] = useState("");
  const [duration, setDuration] = useState("");

  const [amount, setAmount] = useState("");
  const [durationPrice, setDurationPrice] = useState([]);

  const [cohortErr, setCohortErr] = useState("");
  const [durationErr, setDurationErr] = useState("");

  const { createCourseType, isCreating } = useCreateCourseType();

  const onSubmit = async (data) => {
    const time = data.time.split(":");
    const hour =
      parseInt(time[0]) > 12 ? Number(time[0]) - 12 : parseInt(time[0]);

    const min = Number(time[1]) < 10 ? `${time[1]}` : Number(time[1]);
    const amOrPm = Number(time[0]) >= 12 ? "pm" : "am";

    if (!cohort) return setCohortErr("Input  cohort");
    if (durationPrice.length < 1) return setDurationErr("input duration ");

    const courseType = {
      live_session: {
        original_price: Number(data.coursePrice),
        discounted_price: Number(data.discountPrice),
        duration: data.duration,
        time: `${hour}:${min}${amOrPm}`,
        cohort,
        year: 2024,
        currency: "Pounds",
        currency_symbol: "£",
      },

      on_demand_session: [...durationPrice],
    };
    console.log(courseType);

    createCourseType(courseType, {
      onSuccess: () => {
        setActiveTab((prev) => prev + 1);
        localStorage.setItem("cohorts", cohort);
      },
    });
  };

  const handleAddPrice = () => {
    if (!amount || !duration) return;

    setDurationPrice((prev) => {
      return [
        ...prev,
        {
          amount: Number(amount),
          duration,
          currency: "Pounds",
          currency_symbol: "£",
        },
      ];
    });

    setAmount("");
    setDuration("");
  };

  const form = useForm({
    resolver: zodResolver(courseTypeSchema),
    defaultValues: {
      duration: "",
      discountPrice: "",
      coursePrice: "",
      time: "",
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

                <CohortSelection
                  data={cohorts}
                  setCohorts={setCohort}
                  text={"Select cohort"}
                />
                <div>
                  <span
                    className={cn("text-primary-color-600", cohort && "hidden")}
                  >
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

                  <Select onValueChange={setDuration}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a duration" />
                    </SelectTrigger>
                    <SelectContent className="pb-8 capitalize">
                      <SelectGroup>
                        <SelectLabel>select duration</SelectLabel>
                        {access.map((duration) => (
                          <SelectItem
                            key={duration.id}
                            value={duration.access}
                            className="capitalize"
                          >
                            {`${duration.access} `}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <div>
                    <label htmlFor="price" className="text-base font-medium">
                      Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      id="price"
                      className="w-full rounded border border-gray-300 p-2"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="£39,200"
                    />
                  </div>
                </div>
                <CommonButton
                  type="button"
                  className="block w-full rounded bg-primary-color-600 px-4 py-2"
                  onClick={handleAddPrice}
                >
                  Add
                </CommonButton>
              </div>
              {
                <span
                  className={cn(
                    "text-primary-color-600",
                    durationPrice.length > 0 && "hidden",
                  )}
                >
                  {durationErr}
                </span>
              }
              {durationPrice.map((data, i) => {
                return (
                  <p
                    key={i}
                    className="flex items-center gap-1 capitalize text-primary-color-600"
                  >
                    <FaCheck />
                    <span>
                      <span>{data.duration} </span>-{" "}
                      <span>£ {formatCurrency(data.amount)}</span>
                    </span>
                  </p>
                );
              })}
            </div>
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
        </form>
      </Form>
    </>
  );
};

export default CourseType;
