import { FormLabel } from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";
import React from "react";

const Assignment = () => {
  return (
    <section className="mt-3 bg-white px-10 py-8">
      <h3 className="mb-5 text-2xl font-medium capitalize text-black">
        assignments
      </h3>
      <label
        htmlFor="title"
        className="text-sm font-medium capitalize text-[#101928]"
      >
        title
      </label>
      <Input
        id="title"
        name="title"
        className="rounded-[6px] border border-[#D0D5DD]"
      />
    </section>
  );
};

export default Assignment;
