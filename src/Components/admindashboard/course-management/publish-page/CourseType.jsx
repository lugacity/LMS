import { CommonButton } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group";
import { useQuery } from "@tanstack/react-query";
import { HiOutlinePencil } from "react-icons/hi";
import { ClipLoader } from "react-spinners";

// const data = {
//   course: {
//     id: "66ffa21a424d1743f5b173d0",
//     title: "the course title",
//     coverImage:
//       "https://res.cloudinary.com/dttt6lb9g/image/upload/v1728029212/courses/66ffa21a424d1743f5b173d0_xofxee.png",
//     course_includes: "course includes",
//     tools_and_technologies: "the tool and tecnlogy",
//     benefits: "the benefit",
//     program_highlights: "the program",
//     preview_video: "",
//     enrolledSudents: [],
//     enrollmentOptions: [],
//     reviews: [],
//     total_discount: 0,
//     live_class_price: {
//       original_price: {
//         amount: 3333,
//         currency: "Pounds",
//         currency_symbol: "£",
//         price_string: "£ 3333",
//       },
//       discounted_price: {
//         amount: 100,
//         currency: "Pounds",
//         currency_symbol: "£",
//         price_string: "£ 100",
//       },
//       cohort: ["September Cohort 2024"],
//       duration: "mon-fri",
//       time: "3:42pm",
//     },
//     pre_recorded_price: [
//       {
//         duration: "One Month Access",
//         amount: 100,
//         currency: "Pounds",
//         price_string: "£100",
//         currency_symbol: "£",
//         _id: "66fffec9068e6acd2b2f1af0",
//       },
//     ],
//     is_publishe: false,
//     cohorts: ["66fffec9068e6acd2b2f1af3"],
//   },
//   applied: [],
// };

// const Cohort = [
//   {
//     time: "May Cohort",
//   },
//   {
//     time: "July Cohort",
//   },
//   {
//     time: "October Cohort",
//   },
//   {
//     time: "January Cohort",
//   },
// ];

// const durations = [
//   {
//     duration: "One Month Access",
//     price: "£100",
//   },
//   {
//     duration: "3 Months Access ",
//     price: "£200",
//   },
//   {
//     duration: "6 Months Access ",
//     price: " £400",
//   },
//   {
//     duration: "Annual Year Subscription ",
//     price: " £600",
//   },
// ];

function CourseType({ editButton = false }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["get-course-info"],
  });

  if (isLoading)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <ClipLoader color="#CC1747" />
      </div>
    );

  if (isError) return <p>error..</p>;

  return (
    <section className="rounded-md border-2 border-[#F0F2F5] p-12 pr-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-medium text-[#344054]">Course Type</h2>
        {editButton && (
          <CommonButton variant="outline" className="space-x-2 text-[#667185]">
            <span className="text-lg">
              <HiOutlinePencil />
            </span>
            <span>Edit section</span>
          </CommonButton>
        )}
      </div>
      <main className="mt-8 grid grid-cols-2">
        <section className="border-r border-r-[#F0F2F5] pr-11">
          <h3 className="w-full max-w-[530px] text-xl font-light text-[#23314A]">
            Live session + Mentoring (
            {data?.data?.data.course.live_class_price.cohort[0]})
          </h3>
          <div className="mb-3 mt-[42px] flex gap-6">
            <span className="text-xl font-semibold text-[#23314A]">
              Price{" "}
              {
                data?.data?.data.course.live_class_price.original_price
                  .price_string
              }
            </span>
            <span className="text-xl italic text-[#23314A] line-through">
              {
                data?.data?.data.course.live_class_price.discounted_price
                  .price_string
              }
            </span>
            <span className="text-xl font-light text-[#667185]">85% off</span>
          </div>
          <p className="text-xl font-light text-[#667185]">
            Every Monday to Friday{" "}
            <span className="uppercase">
              {data?.data?.data.course.live_class_price.time}
            </span>
          </p>

          <div className="mt-10">
            <h3 className="mb-6 text-xl font-light text-[#23314A]">
              Select Cohort
            </h3>
            <RadioGroup defaultValue="" className="space-y-3">
              {data?.data?.data.course.live_class_price.cohort.map(
                (item, i) => {
                  return (
                    <div
                      className="flex items-center space-x-2 rounded-md border border-[#E0E0E0] px-3 py-[18px]"
                      key={i}
                    >
                      <RadioGroupItem
                        value={item}
                        id={item}
                        className="border-[#98A2B3]"
                      />
                      <Label
                        htmlFor={item}
                        className="font-normal capitalize text-[#8F8F8E]"
                      >
                        {item}
                      </Label>
                    </div>
                  );
                },
              )}
            </RadioGroup>
          </div>
        </section>
        <section className="pl-10">
          <h3 className="mb-[42px] w-full max-w-[530px] text-xl font-light text-[#23314A]">
            On Demand Course (Pre Recorded Session)
          </h3>
          <RadioGroup defaultValue="" className="space-y-3">
            {data?.data?.data.course.pre_recorded_price.map((item) => {
              return (
                <div
                  className="flex items-center space-x-2 rounded-md border border-[#E0E0E0] px-3 py-[18px]"
                  key={item._id}
                >
                  <RadioGroupItem
                    value={item.duration}
                    id={item.duration}
                    className="border-[#98A2B3]"
                  />
                  <Label
                    htmlFor={item.duration}
                    className="font-normal capitalize text-[#8F8F8E]"
                  >
                    <span>{item.duration} - </span>
                    <span>{item.price_string}</span>
                  </Label>
                </div>
              );
            })}
          </RadioGroup>
        </section>
      </main>
    </section>
  );
}

export default CourseType;
