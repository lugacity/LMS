import { useRef, useState } from "react";
import UploadCourseManagement from "./UploadCourseManagement";
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
import Cookies from "js-cookie";
import { ClipLoader } from "react-spinners";
import { CommonButton } from "@/Components/ui/button";
import { BASE_URL } from "@/constant";
// import MyCKEditor from '../Components/pages/CDKEditor'

const courseManagementSchema = z.object({
  courseTitle: z
    .string()
    .min(5, { message: "Title must be at least 5 character long" })
    .max(60, { message: "Title character must not exceed 60 " }),
  courseIncludes: z
    .string()
    .min(5, { message: "This field must be at least 5 character long" })
    .max(100, { message: "course include character must not exceed 100 " }),
  technologies: z
    .string()
    .min(5, { message: "This field must be at least 5 character long" })
    .max(405, { message: "Technologies character must not exceed 405 " }),
  benefits: z
    .string()
    .min(5, { message: "This field must be at least 5 character long" })
    .max(405, { message: "Benefits character must not exceed 100 " }),
  highlight: z
    .string()
    .min(5, { message: "This field must be at least 5 character long" })
    .max(405, { message: "Highlight  character must not exceed 100 " }),
  url: z.union([z.literal(""), z.string().trim().url()]),
});

const CourseManagementPage = () => {
  const { setActiveTab } = useCourseManagementInfo();

  const [image, setImage] = useState({ file: null, preview: null });
  const [video, setVideo] = useState({ file: null, preview: null });

  const [message, setMessage] = useState({
    error: "",
    success: "",
  });

  const imageRef = useRef(null);

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

  const { isSubmitting } = form.formState;

  const onSubmit = async (data) => {
    const {
      courseTitle,
      benefits,
      courseIncludes,
      highlight,
      technologies,
      url,
    } = data;

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

    if (!video.file && form.watch("url").length < 1)
      return toast.error("Please insert an taster video or video url");

    let courses = {
      title: courseTitle,
      tools_and_technologies: technologies,
      benefits: benefits,
      program_highlights: highlight,
      course_includes: courseIncludes,
      coverImage: image.file,
    };

    let courseToUpload;

    if (video.file) {
      courseToUpload = {
        ...courses,
        taster_video: video.file,
      };
    } else {
      courseToUpload = {
        ...courses,
        upload_from_url: url,
      };
    }

    console.log(courseToUpload);
    const token = Cookies.get("adminToken");

    try {
      const response = await axios.post(
        `${BASE_URL}/courses/course-informations`,
        courseToUpload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.data.status === "success") {
        toast.success(response.data.message);
        setActiveTab((prev) => prev + 1);
        localStorage.setItem("id", response.data.data.id);
      }
    } catch (error) {
      toast.error("something went wrong");
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
              <CommonButton
                className="min-w-32 rounded bg-primary-color-600"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <ClipLoader size={20} color={"#fff"} />
                ) : (
                  "Save & Continue"
                )}
              </CommonButton>
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
