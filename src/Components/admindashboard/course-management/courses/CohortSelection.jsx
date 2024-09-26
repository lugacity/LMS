import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import { formatCurrency } from "@/lib/formatNumber";
// import React, { useState } from "react";

const CohortSelection = ({ data, setCohorts, text }) => {
  return (
    <Select onValueChange={setCohorts}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a cohort" />
      </SelectTrigger>
      <SelectContent className="pb-8 capitalize">
        <SelectGroup>
          <SelectLabel>{text}</SelectLabel>
          {data.map((singleCohort) => (
            <SelectItem
              key={singleCohort.id}
              value={singleCohort.month}
              className="capitalize text-[#8F8F8E] hover:accent-primary-color-600"
            >
              {`${singleCohort.month} Cohorts`}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default CohortSelection;

// const [active, setActive] = useState(false);
// return (
//   <FormField
//     control={control}
//     name={name}
//     render={({ field }) => (
//       <FormItem className="space-y-3">
//         <FormControl>
//           <RadioGroup
//             onValueChange={field.onChange}
//             defaultValue={field.value}
//             className="flex flex-col space-y-1"
//           >
//             {data.map((singleCohort) => {
//               return (
//                 <FormItem
//                   className="flex w-full items-center space-x-3 space-y-0 rounded-md border border-[#E0E0E0] px-3 py-5"
//                   key={singleCohort.id}
//                 >
//                   <FormControl>
//                     <RadioGroupItem
//                       value={singleCohort.id}
//                       className="accent-[#8F8F8E]"
//                     />
//                   </FormControl>
//                   <FormLabel className="font-normal capitalize text-[#8F8F8E]">
//                     {singleCohort.month} cohort
//                   </FormLabel>
//                 </FormItem>
//               );
//             })}
//           </RadioGroup>
//         </FormControl>
//         <FormMessage />
//       </FormItem>
//     )}
//   />
// );
