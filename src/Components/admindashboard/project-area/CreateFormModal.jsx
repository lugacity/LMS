import BorderCard from "@/Components/BorderCard";
import { CommonButton } from "@/Components/ui/button";
import { Form } from "@/Components/ui/form";
import FormInput from "@/Components/ui/form-input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const sessionSchema = z.object({
  sessionTitle: z
    .string()
    .min(1, { message: "This field is required" })
    .max(70, { message: "you've reach the max character length" }),
});

export default function CreateFormModal({ setModal }) {
  const form = useForm({
    resolver: zodResolver(sessionSchema),
    defaultValues: {
      sessionTitle: "",
    },
  });
  return (
    <BorderCard className="grid h-screen max-h-[90vh] w-full max-w-[1126px] grid-cols-[1fr_2fr] gap-x-24 overflow-y-auto rounded-md bg-white p-12">
      <div>
        <h3 className="text-2xl font-medium text-[#344054]">
          Course Project Area
        </h3>
        <p className="my-2 max-w-[297px] text-[#667185]">
          Create cards for the Course Project area that will be used by students
          enrolled in the course.
        </p>
        <CommonButton
          className="b font-normal"
          onClick={() => setModal((prev) => !prev)}
          variant="outline"
        >
          Cancel
        </CommonButton>
      </div>
      <div className="w-full max-w-[503px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit((values) => console.log(values))}>
            <div>
              <FormInput
                name="sessionTiltle"
                id="sessionTilte"
                label="Title:"
                control={form.control}
                placeholder="WhatsApp Group "
              />
              <p className="mb-1 mt-2 text-right text-sm text-[#667185]">
                0/70
              </p>
            </div>
            <div>
              <FormInput
                name="sectionOverview"
                id="sectionOverview"
                label="Subtitle :"
                control={form.control}
                placeholder="Join Team A"
              />
              <p className="mb-1 mt-2 text-right text-sm text-[#667185]">
                0/70
              </p>
            </div>
            <div>
              <FormInput
                name="sectionOverview"
                id="sectionOverview"
                label="Description"
                control={form.control}
                placeholder="Enter text here..."
                textarea={true}
              />
              <p className="mb-1 mt-2 text-right text-sm text-[#667185]">
                0/450
              </p>
            </div>
            <div>
              <FormInput
                name="sessionTiltle"
                id="sessionTilte"
                label="link :"
                control={form.control}
                placeholder="https://meet.google.com/rmz-wrmk-hhy"
              />
              <p className="mb-1 mt-2 text-right text-sm text-[#667185]">
                0/70
              </p>
            </div>
            <div>
              <FormInput
                name="sessionTiltle"
                id="sessionTilte"
                label="Button text :"
                control={form.control}
                placeholder="WhatsApp Group"
              />
              <p className="mb-1 mt-2 text-right text-sm text-[#667185]">
                0/70
              </p>
            </div>
            <CommonButton className="ml-auto mt-7 block bg-primary-color-600">
              Create Card
            </CommonButton>
          </form>
        </Form>
      </div>
    </BorderCard>
  );
}