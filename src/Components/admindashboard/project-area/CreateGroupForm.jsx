import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/Components/ui/form";
import FormInput from "@/Components/ui/form-input";
import { CommonButton } from "@/Components/ui/button";
import { useCreateProjectGroup } from "@/hooks/project-area-groups/use-create-project-group";
import { useParams, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";

const sessionSchema = z.object({
  group_name: z
    .string()
    .min(1, { message: "This field is required" })
    .max(70, { message: "you've reach the max character length" }),
  number_of_students: z
    .string()
    .regex(/^\d+$/, { message: "Must be a number" }) // Validate as a number (optional)
    .optional(),
});

function CreateGroupForm() {
  

  const { courseId } = useParams();
  const [queryString] = useSearchParams();
  const cohortId = queryString.get("cohortId");

  const {create, isPending: isCreating} = useCreateProjectGroup()


  const handleSubmit = (data) => {
    create(
      { data, courseId, cohortId },
      {
        onSuccess: () => {
          // setModal((prev) => !prev);
          toast.success("Succesfully created");
        },
      },
    );
  };

  const form = useForm({
    resolver: zodResolver(sessionSchema),
    defaultValues: {
      group_name: "",
      number_of_students: "",
    },
  });

 
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <FormInput
          name="group_name"
          id="group_name"
          label="Group Name:"
          control={form.control}
          placeholder="Team A"
          className="mb-[18px]"
        />
        <FormInput
          name="number_of_students"
          id="number_of_students"
          label="Number of Student:"
          control={form.control}
          placeholder="342"
        />

        <CommonButton
          className="ml-auto mt-6 block bg-primary-color-600"
          disable={isCreating}
        >
          {isCreating ? "Creating.." : "Create Group"}
        </CommonButton>
      </form>
    </Form>
  );
}

export default CreateGroupForm;
