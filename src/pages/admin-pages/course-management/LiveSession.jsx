import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateLiveSession } from "@/hooks/course-management/use-create-live-session";

import { Form } from "@/Components/ui/form";
import FormInput from "@/Components/ui/form-input";
import DashButton from "@/pages/auth/ButtonDash";

import { CommonButton } from "@/Components/ui/button";
import { ClipLoader } from "react-spinners";
import { liveSessionSchema } from "@/lib/form-schemas/forms-schema";

import LiveSessionContent from "@/Components/admindashboard/course-management/live-session/liveSessionContent";
import { useCourseManagementInfo } from "@/hooks/useCourseManagementInfo";
import { useState } from "react";

const LiveSession = () => {
  const { createLiveSession, isCreating } = useCreateLiveSession();
  const { setSubTab } = useCourseManagementInfo();
  const [disabledButton, setDisabledButton] = useState(null);
  const { setActiveTab } = useCourseManagementInfo();

  const form = useForm({
    resolver: zodResolver(liveSessionSchema),
    defaultValues: {
      title: "",
      subtitle: "",
      time: "",
      meetingDate: "",
      startedFrom: "",
      courseContent: "",
      overview: "",
    },
  });

  const onSubmit = async (data) => {
    createLiveSession(data, {
      onSuccess: () => {
        form.reset()
        setDisabledButton(true);
    } });
  };

  return (
    <div>
      <div className="mb-4 mt-5 rounded border border-gray-300 p-10 md:mb-0">
        <div className="mx-auto grid max-w-6xl grid-cols-12 gap-8 pt-5">
          <Form {...form}>
            <form
              className="col-span-8 space-y-6"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              {/* Session Title */}
              <div className="mb-6">
                <FormInput
                  name="title"
                  id="title"
                  type="text"
                  control={form.control}
                  placeholder="Join Business Analysis Live Session"
                  label={"Session Title"}
                  labelClass={"mb-2 font-[500] text-[#475367] block text-base"}
                  className="h-[56px] w-full resize-none rounded border border-gray-300 p-2 outline-none"
                />

                <p className="text-right text-gray-500">
                  {form.watch("title") ? `${form.watch("title").length}` : 0}
                  /70
                </p>
              </div>

              {/* Section Sub Title */}
              <div className="mb-6">
                <FormInput
                  name="subtitle"
                  type="text"
                  id="subtitle"
                  control={form.control}
                  placeholder="Business Analysis Agile Project Management Software Testing May 2024"
                  label={"Session Subtitle"}
                  labelClass={"mb-2 font-[500] text-[#475367] block text-base"}
                  className="h-[56px] w-full resize-none rounded border border-gray-300 p-2 outline-none"
                />
                <p className="text-right text-gray-500">
                  {form.watch("subtitle")
                    ? `${form.watch("subtitle").length}`
                    : 0}
                  /450
                </p>
              </div>

              {/* Selection Overview */}
              <div>
                <FormInput
                  name="overview"
                  id="overview"
                  type="text"
                  control={form.control}
                  placeholder="Business Analysis Agile Project Management Software Testing May 2024"
                  label={"Session Overview"}
                  labelClass={"mb-2 font-[500] text-[#475367] block text-base"}
                  textarea={true}
                  className="h-[203px] w-full resize-none rounded border border-gray-300 p-2"
                />
                <p className="text-right text-gray-500">
                  {form.watch("overview")
                    ? `${form.watch("overview").length}`
                    : 0}
                  /450
                </p>
              </div>

              {/* Course Content */}
              <div className="mb-6">
                <FormInput
                  name="courseContent"
                  type="text"
                  id="courseContent"
                  control={form.control}
                  placeholder="Overview of Project Consulting"
                  label={"Course Content"}
                  labelClass={"mb-2 font-[500] text-[#475367] block text-base"}
                  className="h-[56px] w-full resize-none rounded border border-gray-300 p-2 outline-none"
                />
              </div>

              {/* Starting Date and Time */}
              <div className="flex space-x-4">
                <div className="flex-1">
                  <FormInput
                    label={"Started from"}
                    className="w-full rounded border border-gray-300 p-2"
                    type="date"
                    control={form.control}
                    name="startedFrom"
                    labelClass={
                      "text-base font-medium font-[500] text-[#475367]"
                    }
                    id="startedFrom"
                    placeholder="19:00"
                  />
                </div>
              </div>

              {/* Meeting Date and Time */}
              <div className="flex w-full space-x-4 pt-6 text-[#475367]">
                {/* Duration (Monday-Friday) */}
                <div className="w-full">
                  <FormInput
                    label={"Meeting Date from"}
                    className="w-full rounded border border-gray-300 p-2"
                    type="date"
                    control={form.control}
                    name="meetingDate"
                    labelClass={
                      "text-base font-medium font-[500] text-[#475367]"
                    }
                    id="meetingDate"
                    placeholder="19:00"
                  />
                </div>

                {/* Time (7:00pm default) */}
                <div className="w-full">
                  <FormInput
                    label={"Time"}
                    className="w-full rounded border border-gray-300 p-2"
                    type="time"
                    control={form.control}
                    name="time"
                    labelClass={"text-base font-medium"}
                    id="time"
                    defaultValue="19:00"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-6 pt-10">
                <CommonButton
                  type="submit"
                  className="bg-primary-color-600"
                  disabled={isCreating || disabledButton}
                >
                  {isCreating ? (
                    <span className="min-w-[89.3px]">
                      <ClipLoader size={20} color={"#fff"} />
                    </span>
                  ) : (
                    <span>Add Content</span>
                  )}
                </CommonButton>
              </div>
            </form>
          </Form>

          <LiveSessionContent />
        </div>
      </div>

      <div className="flex items-center  my-5 justify-end gap-6">
        <CommonButton
          onClick={() => setActiveTab((prev) => prev - 1)}
          className="ml-auto text-white bg-gray-500 hover:bg-gray-700"
        >
          Back
        </CommonButton>

        <DashButton
          className="rounded px-4 py-2 text-white"
          onClick={() => setSubTab((prev) => prev + 1)}
        >
          Continue
        </DashButton>
      </div>
    </div>
  );
};

export default LiveSession;
