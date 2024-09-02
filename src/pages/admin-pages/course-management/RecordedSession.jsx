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
import { ImgUploadIcon, VidIcon } from "@/Components/Icon";
import { CommonButton } from "@/Components/ui/button";
import { VideoIcon } from "lucide-react";

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

  const sectionContent = [
    {
      title: "Introduction to Project Consulting Recordings",
    },
    {
      title: "Roles and Responsibilities of a Project Consultant Recordings",
    },
    {
      title: "Roles and Responsibilities of a Project Consultant Recordings",
    },
  ];

  return (
    <>
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
                <p className="mb-1 mt-2 text-sm text-[#667185]">
                  Max 200MB files are allowed
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-px w-full bg-[#E7E7E7]" />

                <span className="text-[#6D6D6D]">OR</span>
                <div className="h-px w-full bg-[#E7E7E7]" />
              </div>

              <div className="flex flex-col gap-y-4">
                <label
                  htmlFor="videoUrl"
                  className="text-sm font-medium text-[#23314A]"
                >
                  Video from URL
                </label>
                <input
                  type="text"
                  name="videoUrl"
                  id="videoUrl"
                  placeholder="Input file URL"
                  className="rounded-md border-2 border-input bg-[#FAFAFA] p-4 placeholder:text-[#9D9D9D]"
                />
              </div>
              <div>
                <div className="ml-auto mt-6 w-max">
                  <CommonButton variant="outline">
                    {" "}
                    Create New Section
                  </CommonButton>
                  <CommonButton className="ml-6 bg-primary-color-600">
                    Add Content
                  </CommonButton>
                </div>
              </div>
            </form>
          </Form>
        </div>
        <div className="overflow-y-hidden">
          <aside className="overflow-y-auto overflow-x-hidden">
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
                  <h2 className="font-medium leading-[23.2px] text-[#344054]">
                    Business Analysis Agile Project Management Software Testing
                  </h2>
                  <ul className="mt-6 space-y-6">
                    {sectionContent.map((item, i) => {
                      return (
                        <>
                          <li className="text-[#667185]">
                            <article className="flex gap-2">
                              <div className="flex gap-2">
                                <span>{i + 1}</span>
                                <span>{item.title}</span>
                              </div>
                              <div>
                                <SectionPopover>
                                  <button className="justify-self-end">
                                    <LiaEllipsisVSolid className="self-end text-2xl" />
                                  </button>
                                </SectionPopover>
                              </div>
                            </article>
                            <div className="mt-3 flex items-start gap-4">
                              <VidIcon />
                              <article>
                                <h3 className="font-medium">Recorded Video</h3>
                                <p className="text-sm font-light text-[#98A2B3]">
                                  11 Sep, 2023 | 12:24pm <span>13MB</span>
                                </p>
                              </article>
                            </div>
                          </li>
                        </>
                      );
                    })}
                  </ul>
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
      <div>
        <CommonButton className="ml-auto mt-8 block bg-primary-color-600 font-normal">
          Save and Continue
        </CommonButton>
      </div>
    </>
  );
}

export default RecordedSession;
