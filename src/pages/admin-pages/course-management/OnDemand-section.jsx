import Cookies from "js-cookie";
import { useRef, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/Components/ui/form";
import FormInput from "@/Components/ui/form-input";
import { CommonButton } from "@/Components/ui/button";

import { ImgUploadIcon } from "@/Components/Icon";

import CoursesRecordedSection from "@/Components/admindashboard/course-management/recoded-session/CoursesRecordedSection";

// import { useCourseManagementInfo } from "@/hooks/useCourseManagementInfo";
import { ScrollRestoration } from "react-router-dom";

import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import { useCourseManagementInfo } from "@/hooks/useCourseManagementInfo";
import { useMutation } from "@tanstack/react-query";
import { addDemandSection } from "@/services/api";
import { useCreateOnDemandCourse } from "@/hooks/course-management/use-create-demand-course";
let section = 1;

const sessionSchema = z.object({
  title: z
    .string()
    .min(1, { message: "This field is required" })
    .max(70, { message: "you've reach the max character length" }),
  video_title: z
    .string()
    .min(1, { message: "This field is required" })
    .max(70, { message: "you've reach the max character length" }),
  overview: z
    .string()
    .min(1, { message: "This field is required" })
    .max(70, { message: "you've reach the max character length" }),
  video_from_url: z.union([z.literal(""), z.string().trim().url()]),
});

function OnDemandCourseSection() {
  const [video, setVideo] = useState({ file: null, preview: null });
  const [errorMessage, setErrorMessage] = useState("");
  const [disabled, setDisabled] = useState(true);

  const { createOnDemandCourse,isCreating } = useCreateOnDemandCourse();

  const { setActiveTab } = useCourseManagementInfo();

  const form = useForm({
    resolver: zodResolver(sessionSchema),
    defaultValues: {
      title: "",
      video_title: "",
      overview: "",
      video_from_url: "",
    },
  });

  

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 200 * 1024 * 1024) {
      return setErrorMessage("file has exceed 200MB");
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setVideo((prev) => {
        return { ...prev, file: file, preview: reader.result };
      });
      setErrorMessage("");
    };
    reader.readAsDataURL(file);
  };

  const videoRef = useRef();

  // const { setActiveTab } = useCourseManagementInfo();

  

  const onSubmit = async (data) => {
    const { title, video_title, overview } = data;

    if (!video.file && form.watch("video_from_url").length < 1)
      return toast.error("Please insert a video or video url");

    let recorded;

    if (video.file) {
      recorded = {
        title,
        video_title,
        overview,
        section,
        video: video.file,
      };
    } else {
      recorded = {
        ...data,
        section,
      };
    }


    createOnDemandCourse(recorded, {
      onSuccess: () => {
        form.reset();
        setDisabled(false);
      }
    });
  };

  return (
    <>
      <ScrollRestoration />

      <div className="mb-4 flex items-center justify-between">
        <h2 className="mb-2 mt-5 text-[24px] font-[500] text-[#344054]">
          On-Demand Course Sections
        </h2>

        <button className="flex items-center rounded border border-[#667185] bg-transparent px-4 py-2 text-[#667185] hover:bg-[#f0f0f0]">
          Preview
        </button>
      </div>
      <main className="grid grid-cols-[3fr_1fr] gap-10 rounded-[10px] border-2 border-[#F0F2F5] p-12 pr-6">
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div>
                <FormInput
                  name="title"
                  type="text"
                  id="title"
                  label="Section Title"
                  control={form.control}
                  placeholder="Business Analysis Agile Project Management Software Testing "
                />
                <p className="mb-1 mt-2 text-right text-sm text-[#667185]">
                  {form.watch("title") ? `${form.watch("title").length}` : 0}
                  /70
                </p>
              </div>
              <div>
                <FormInput
                  name="overview"
                  id="overview"
                  type="text"
                  label="Section overview"
                  control={form.control}
                  placeholder="Enter text here "
                  textarea={true}
                />
                <p className="mb-1 mt-2 text-right text-sm text-[#667185]">
                  {form.watch("overview")
                    ? `${form.watch("overview").length}`
                    : 0}
                  /450
                </p>
              </div>
              <div>
                <FormInput
                  name="video_title"
                  type="text"
                  id="video_title"
                  label="Video Title"
                  control={form.control}
                  placeholder="Introduction to Project Consulting Recordings "
                />
                <p className="mb-1 mt-2 text-right text-sm text-[#667185]">
                  {form.watch("video_title")
                    ? `${form.watch("video_title").length}`
                    : 0}
                  /70
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium capitalize text-[#101928]">
                  upload video
                </p>
                <div
                  className={cn(
                    "flex min-h-52 w-full items-center justify-center rounded-lg border-2 border-dashed border-[#23314A]",
                    form.watch("video_from_url").length >= 1 &&
                      "cursor-not-allowed opacity-45",
                  )}
                  onClick={() => {
                    videoRef.current.click();
                  }}
                >
                  {video.preview ? (
                    <video
                      src={video.preview}
                      alt="Cover Video"
                      className="h-[200px] w-full rounded-md object-cover"
                      controls
                    />
                  ) : (
                    <button className="flex gap-2 text-[#98A2B3]">
                      <ImgUploadIcon />
                      <span>upload</span>
                    </button>
                  )}
                  <input
                    type="file"
                    name=""
                    id=""
                    hidden
                    ref={videoRef}
                    onChange={handleVideoUpload}
                    disabled={form.watch("video_from_url").length >= 1}
                  />
                </div>
                {errorMessage && (
                  <p className="text-primary-color-600">{errorMessage}</p>
                )}

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
                {/* <label
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
                /> */}
                <FormInput
                  name="video_from_url"
                  type="text"
                  id="video_from_url"
                  label="Video from URL"
                  control={form.control}
                  placeholder="Input file URL "
                  disabled={video.file ? true : false}
                />
              </div>

              <div>
                <div className="ml-auto mt-6 w-max">
                  <CommonButton
                    variant="outline"
                    type="button"
                    disabled={disabled}
                    className="disabled:cursor-not-allowed"
                    onClick={() => {
                      section += 1;
                      toast.success(`section ${section} is created`);
                      setDisabled(true);
                      console.log(section);
                    }}
                  >
                    Create New Section
                  </CommonButton>
                  <CommonButton
                    className="ml-6 bg-primary-color-600"
                    type="submit"
                    disabled={isCreating}
                  >
                    Add Content
                  </CommonButton>
                </div>
              </div>
            </form>
          </Form>
        </div>
        <div className="overflow-y-hidden">
          <CoursesRecordedSection />
        </div>
      </main>
      <div>
        <CommonButton
          className="ml-auto mt-8 block bg-primary-color-600 font-normal"
          onClick={() => setActiveTab((prev) => prev + 1)}
        >
          Save and Continue
        </CommonButton>
      </div>
    </>
  );
}

export default OnDemandCourseSection;
