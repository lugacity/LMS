import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/Components/ui/form";
import FormInput from "@/Components/ui/form-input";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/ui/accordion";

import { LiaEllipsisVSolid } from "react-icons/lia";
import SectionPopover from "@/Components/admindashboard/recoded-session/SectionPopover";
import { ImgUploadIcon } from "@/Components/Icon";

const sessionSchema = z.object({
  sessionTitle: z
    .string()
    .min(1, { message: "This field is required" })
    .max(70, { message: "you've reach the max character length" }),
});

function RecordedSession() {
  const form = useForm({
    resolver: zodResolver(sessionSchema),
    defaultValues: {
      sessionTitle: "",
    },
  });

  return (
    <main className="grid grid-cols-[3fr_1fr] gap-10 rounded-[10px] border-2 border-[#F0F2F5] p-12">
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit((values) => console.log(values))}>
            <div>
              <FormInput
                name="sessionTiltle"
                id="sessionTilte"
                label="Section Title"
                control={form.control}
                placeholder="Business Analysis Agile Project Management Software Testing "
              />
              <p className="mb-1 mt-2 text-right text-sm text-[#667185]">
                0/70
              </p>
            </div>
            <div>
              <FormInput
                name="sectionOverview"
                id="sectionOverview"
                label="Section overview"
                control={form.control}
                placeholder="Enter text here "
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
                label="Video Title"
                control={form.control}
                placeholder="Introduction to Project Consulting Recordings "
              />
              <p className="mb-1 mt-2 text-right text-sm text-[#667185]">
                0/70
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium capitalize text-[#101928]">
                upload video
              </p>
              <div className="flex min-h-52 w-full items-center justify-center rounded-lg border-2 border-dashed border-[#23314A]">
                <button className="flex gap-2 text-[#98A2B3]">
                  <ImgUploadIcon />
                  <span>upload</span>
                </button>
              </div>
            </div>
          </form>
        </Form>
      </div>
      <div className="overflow-y-hidden">
        <aside className="overflow-x-hidden overflow-y-scroll">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <div className="grid grid-cols-[8fr_1fr] items-center">
                <AccordionTrigger className="w-full">
                  section 1
                </AccordionTrigger>
                <SectionPopover>
                  <button className="justify-self-end">
                    <LiaEllipsisVSolid className="self-end text-2xl" />
                  </button>
                </SectionPopover>
              </div>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </aside>
      </div>
    </main>
  );
}

export default RecordedSession;
