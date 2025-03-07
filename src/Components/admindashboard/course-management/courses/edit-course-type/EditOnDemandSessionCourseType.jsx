import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useState } from "react";
import { FaTrash } from "react-icons/fa6";

import { useCourseManagementInfo } from "@/hooks/useCourseManagementInfo";
// import SaveButton from "@/Components/admindashboard/course-management/courses/SaveButton";
import { ScrollRestoration, useParams } from "react-router-dom";

import { Form } from "@/Components/ui/form";
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

import { useCreateCourseType } from "@/hooks/course-management/use-create-course-type";
import { useEditCourseType } from "@/hooks/course-management/use-edit-course-type";

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
    access: "Lifetime Access",
  },
];

const EditOnDemandSessionCourseType = ({ dataToEdit }) => {
  const [duration, setDuration] = useState("");
  const [amount, setAmount] = useState("");
  const [durationPrice, setDurationPrice] = useState(() =>
    dataToEdit.map((data) => ({
      duration: data.duration,
      amount: data.amount,
      currency: data.currency,
      currency_symbol: data.currency_symbol,
    })),
  );
  const [durationErr, setDurationErr] = useState("");

  const { courseId } = useParams();

  const { editCourseType, isPending } = useEditCourseType();

  const onSubmit = () => {
    if (durationPrice.length < 1) return setDurationErr("input duration ");

    const courseType = {
      on_demand_session: [...durationPrice],
    };

    editCourseType({ data: courseType, courseId });
  };

  const handleAddPrice = () => {
    if (!amount || !duration) return;

    setDurationPrice((prev) => {
      return [
        ...prev,

        {
          duration,
          amount,
          currency: "Pounds",
          currency_symbol: "£",
        },
      ];
    });

    setAmount("");
    setDuration("");
  };

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="mb-2 mt-5 text-[24px] font-[500] text-[#344054]">
          Course Type
        </h2>
      </div>

      <div>
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

            <div>
              {
                <ul>
                  {durationPrice.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between border-b py-2"
                    >
                      <span className="text-red-600">{`${item.duration} -${
                        item.currency_symbol
                      }  ${item.amount}`}</span>
                      <CommonButton
                        className="h-8 rounded bg-white text-red-600 hover:bg-white"
                        type="button"
                        onClick={() => {
                          setDurationPrice((prev) =>
                            prev.filter((_, i) => i !== index),
                          );
                        }}
                      >
                        <FaTrash />
                      </CommonButton>
                    </li>
                  ))}
                </ul>
              }
              {durationErr && (
                <span className="mt-2 text-red-600">{durationErr}</span>
              )}
            </div>
          </div>
        </div>

        <div className="pt-10">
          <CommonButton
            className="ml-auto block min-w-32 rounded bg-primary-color-600"
            onClick={onSubmit}
            disabled={isPending}
          >
            {isPending ? (
              <ClipLoader size={20} color={"#fff"} />
            ) : (
              " Save & Continue"
            )}
          </CommonButton>
        </div>
      </div>
    </>
  );
};

export default EditOnDemandSessionCourseType;
