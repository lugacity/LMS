import { useRef, useState } from "react";
import UploadCourseManagement from "./UploadCourseManagement";
import DashButton from "../auth/ButtonDash";
import { useCourseManagementInfo } from "@/hooks/useCourseManagementInfo";
import SaveButton from "@/Components/admindashboard/course-management/courses/SaveButton";
import { ScrollRestoration } from "react-router-dom";
import { Form } from "@/Components/ui/form";
import { z } from "zod";
import FormInput from "@/Components/ui/form-input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import axios from "axios";
// import MyCKEditor from '../Components/pages/CDKEditor'

const courseManagementSchema = z.object({
  courseTitle: z
    .string()
    .min(5, { message: "Title must be at least 5 character long" })
    .max(60, { message: "Title character must not exceed 60 " }),
  courseIncludes: z
    .string()
    .min(5, { message: "Title must be at least 5 character long" })
    .max(100, { message: "Title character must not exceed 100 " }),
  technologies: z
    .string()
    .min(5, { message: "Title must be at least 5 character long" })
    .max(405, { message: "Title character must not exceed 405 " }),
  benefits: z
    .string()
    .min(5, { message: "Title must be at least 5 character long" })
    .max(405, { message: "Title character must not exceed 100 " }),
  highlight: z
    .string()
    .min(5, { message: "Title must be at least 5 character long" })
    .max(405, { message: "Title character must not exceed 100 " }),
});

const CourseManagementPage = () => {
  const [image, setImage] = useState({ file: null, preview: null });
  const [video, setVideo] = useState({ file: null, preview: null });

  const imageRef = useRef(null);

  const [message, setMessage] = useState({
    error: "",
    success: "",
  });

  const { setActiveTab } = useCourseManagementInfo();

  const form = useForm({
    resolver: zodResolver(courseManagementSchema),
    defaultValues: {
      courseTitle: "",
      benefits: "",
      courseIncludes: "",
      highlight: "",
      technologies: "",
      url: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);

    const {
      courseTitle,
      benefits,
      courseIncludes,
      highlight,
      technologies,
      url,
    } = data;

    const formdata = new FormData();
    formdata.append("title", courseTitle);

    formdata.append("upload_from_url", url);
    formdata.append("benefits", "https://idea.com");
    formdata.append("tools_and_technologies", technologies);
    formdata.append("program_highlights", highlight);
    formdata.append("course_includes", courseIncludes);

    console.log(Object.fromEntries([...formdata.entries()]));
    if (video.file) formdata.append("taster_video", video.file, "file");
    if (image.file)
      formdata.append(
        "coverImage",
        image.file,
        "1eed7253-10c1-4020-aec1-4e77b46c726b",
      );
    const course = Object.fromEntries([...formdata.entries()]);

    if (!image.file) {
      toast.error("Please insert an image");
      return setMessage((prev) => {
        return {
          ...prev,
          error: "Please insert image",
          success: "",
        };
      });
    }

    try {
      const response = await axios.post(
        "https://avi-lms-backend.onrender.com/api/v1/admins/courses/course-informations",
        course,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      console.log(response);
    } catch (error) {
      console.log("fetch error", error);
    }
  };

  return (
    <>
      <ScrollRestoration />

      <div className="mb-4 flex items-center justify-between">
        <h2 className="mb-2 mt-5 text-[24px] font-[500] text-[#344054]">
          Course Information
        </h2>

        <SaveButton onClick={() => setActiveTab((prev) => prev + 1)}>
          Save and Continue
        </SaveButton>
      </div>
      <Form {...form}>
        <form
          className="mx-auto grid max-w-6xl grid-cols-12 gap-8 pt-5"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="col-span-8">
            {/* Course Title */}
            <div className="mb-6">
              <FormInput
                name="courseTitle"
                id="courseTitle"
                type="text"
                label={
                  <p className="mb-2 font-[500] text-[#475367]">
                    Course title: <span className="text-[#CC1747]">*</span>
                  </p>
                }
                labelClass={"text-base text-[#475367]"}
                textarea={true}
                control={form.control}
                placeholder="Enter text here..."
                className="h-[56px] w-full resize-none rounded border border-gray-300 p-2 outline-none placeholder:text-base"
              />

              <p className="text-right text-gray-500">
                {form.watch("courseTitle")
                  ? `${form.watch("courseTitle").length}`
                  : 0}
                /60
              </p>
            </div>

            <div className="mb-6">
              <FormInput
                name="courseIncludes"
                id="courseIncludes"
                label={
                  <p className="mb-2 font-[500] text-[#475367]">
                    Course Includes: <span className="text-[#CC1747]">*</span>{" "}
                  </p>
                }
                type="text"
                labelClass={"text-base text-[#475367]"}
                textarea={true}
                control={form.control}
                placeholder="Enter text here..."
                className="h-[117px] w-full resize-none rounded border border-gray-300 p-2 outline-none placeholder:text-base"
              />
              <p className="text-right text-gray-500">
                {form.watch("courseIncludes")
                  ? `${form.watch("courseIncludes").length}`
                  : 0}
                /100
              </p>
            </div>

            {/* Tools and Technologies */}
            <div>
              <FormInput
                name="technologies"
                id="technologies"
                label={
                  <p className="mb-2 font-[500] text-[#475367]">
                    Tools and Technologies:{" "}
                    <span className="text-[#CC1747]">*</span>{" "}
                  </p>
                }
                labelClass={"text-base text-[#475367]"}
                textarea={true}
                type="text"
                control={form.control}
                placeholder="Enter text here..."
                className="h-[203px] w-full resize-none rounded border border-gray-300 p-2 outline-none placeholder:text-base"
              />
              <p className="text-right text-gray-500">
                {form.watch("technologies")
                  ? `${form.watch("technologies").length}`
                  : 0}
                /405
              </p>
            </div>

            {/* Benefits */}
            <div>
              <FormInput
                name="benefits"
                id="benefits"
                label={
                  <p className="mb-2 font-[500] text-[#475367]">
                    Benefits: <span className="text-[#CC1747]">*</span>{" "}
                  </p>
                }
                labelClass={"text-base text-[#475367]"}
                textarea={true}
                type="text"
                control={form.control}
                placeholder="Enter text here..."
                className="h-[203px] w-full resize-none rounded border border-gray-300 p-2 outline-none placeholder:text-base"
              />
              <p className="text-right text-gray-500">
                {form.watch("benefits")
                  ? `${form.watch("benefits").length}`
                  : 0}
                /405
              </p>
            </div>

            {/* Programme Highlight */}
            <div>
              <FormInput
                name="highlight"
                id="highlight"
                label={
                  <p className="mb-2 font-[500] text-[#475367]">
                    Programme Highlight:{" "}
                    <span className="text-[#CC1747]">*</span>{" "}
                  </p>
                }
                type="text"
                labelClass={"text-base text-[#475367]"}
                textarea={true}
                control={form.control}
                placeholder="Enter text here..."
                className="h-[203px] w-full resize-none rounded border border-gray-300 p-2 outline-none placeholder:text-base"
              />
              <p className="text-right text-gray-500">
                {form.watch("highlight")
                  ? `${form.watch("highlight").length}`
                  : 0}
                /405
              </p>
            </div>

            <div className="flex items-center justify-end pt-10">
              <DashButton className="rounded px-4 py-2 text-white">
                Save & Continue
              </DashButton>
            </div>
          </div>

          <div className="col-span-4">
            <UploadCourseManagement
              image={image}
              setImage={setImage}
              message={message}
              setMessage={setMessage}
              imageRef={imageRef}
              video={video}
              setVideo={setVideo}
              form={form}
            />
          </div>
        </form>
      </Form>
    </>
  );
};

export default CourseManagementPage;
