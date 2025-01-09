import { Input } from "@/Components/ui/input";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";

import { CloudUpload } from "@/Components/Icons";
import { CommonButton } from "@/Components/ui/button";

import pdfImg from "@/assets/icons/pdf-img.png";
import progress from "@/assets/icons/progress.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faClose,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { RxDownload } from "react-icons/rx";
import BorderCard from "@/Components/BorderCard";
import { Form } from "@/Components/ui/form";
import FormInput from "@/Components/ui/form-input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useUploadShareResources } from "@/hooks/course-work-area/use-upload-shared-resources";
import { useParams, useSearchParams } from "react-router-dom";
import { File } from "lucide-react";
import { useSubmitAssignment } from "@/hooks/students/use-submit-assingment";

const Assignment = ({ data }) => {
  // const inputRef = useRef(null);
  // const [light, setLight] = useState(false);
  // const [fileList, setFileList] = useState([]);

  // const onDragEnter = () => {
  //   setLight(true);
  // };

  // const onDragLeave = () => {
  //   setLight(false);
  // };

  // const onFileChange = (file) => {
  //   console.log(file);
  // };

  // const onFileDrop = (e) => {
  //   const newFile = e.target.files[0];
  //   if (newFile) {
  //     const updatedList = [...fileList, newFile];
  //     setFileList(updatedList);
  //     onFileChange(updatedList);
  //   }
  // };

  // const handleClick = () => {
  //   inputRef.current.click();
  // };

  // return (
  //   <section className="bg-white pb-6 pt-0 lg:mt-2 lg:px-10 lg:py-8">
  //     <h3 className="mb-5 text-2xl font-medium capitalize text-black">
  //       assignments
  //     </h3>
  //     <form action="">
  //       <div>
  //         <label
  //           htmlFor="title"
  //           className="text-sm font-medium capitalize text-[#101928]"
  //         >
  //           title
  //         </label>
  //         <Input
  //           id="title"
  //           name="title"
  //           className="rounded-[6px] border border-[#D0D5DD]"
  //         />
  //       </div>
  //       <div className="mt-5">
  //         <label
  //           htmlFor="title"
  //           className="text-sm font-medium capitalize text-[#101928]"
  //         >
  //           Upload Assignment
  //         </label>
  //         <div className="group/file mt-1 rounded-lg border-[1.5px] border-dashed border-[#D0D5DD] px-6 py-7">
  //           <div
  //             className="relative"
  //             onDragEnter={onDragEnter}
  //             onDragLeave={onDragLeave}
  //             onDrop={onDragLeave}
  //           >
  //             <span
  //               className={cn(
  //                 "mx-auto block w-fit rounded-full bg-[#F0F2F5] p-4",
  //                 light ? "opacity-20" : "",
  //               )}
  //             >
  //               <input
  //                 type="file"
  //                 name=""
  //                 id=""
  //                 className="absolute left-0 top-0 h-full w-full opacity-0"
  //                 ref={inputRef}
  //                 onChange={onFileDrop}
  //               />
  //               <CloudUpload />
  //             </span>
  //           </div>
  //           <p className="pb-1 pt-4 text-center">
  //             <button
  //               type="button"
  //               className="cursor-pointer text-sm font-medium text-primary-color-600"
  //             >
  //               Click to upload
  //             </button>{" "}
  //             <span className="text-sm font-light text-[#475367]">
  //               or drag and drop
  //             </span>
  //           </p>
  //           <span className="block text-center text-xs font-light text-[#98A2B3]">
  //             SVG, PNG, JPG or GIF (max. 800x400px){" "}
  //           </span>
  //           <div className="flex items-center gap-1">
  //             <div className="h-px w-full bg-[#F0F2F5]" />
  //             <span className="mb-4 mt-[19px] uppercase text-[#101928]">
  //               or
  //             </span>
  //             <div className="h-px w-full bg-[#F0F2F5]" />
  //           </div>
  //           <CommonButton
  //             type="button"
  //             className="mx-auto block bg-primary-color-600 text-sm text-white"
  //             onClick={handleClick}
  //           >
  //             Browse file
  //           </CommonButton>
  //         </div>
  //       </div>
  //       <div className="mt-2 flex items-center gap-4">
  //         <p className="text-[#667185]">Upload one or more files</p>
  //         <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-color-600 text-xs text-white">
  //           {fileList.length}
  //         </span>
  //       </div>
  //       <div className="divide-y">
  //         <div className="my-6 flex w-full max-w-[450px] items-center justify-between">
  //           <img
  //             src={pdfImg}
  //             alt="pdf icon"
  //             width={48}
  //             height={48}
  //             className="h-8 w-8 md:h-12 md:w-12"
  //           />
  //           <div>
  //             <p className="font-medium text-black">Name of document.pdf</p>
  //             <p className="mt-1 flex items-center gap-1 text-xs font-light text-[#98A2B3]">
  //               <span>11 Sep, 2023 </span>
  //               <span>12:24pm</span>
  //               <span>. 13MB</span>
  //             </p>
  //           </div>
  //           <img
  //             src={progress}
  //             alt="pdf icon"
  //             width={48}
  //             height={48}
  //             className="h-8 w-8 md:h-12 md:w-12"
  //           />
  //           <button type="button">
  //             {" "}
  //             <FontAwesomeIcon
  //               icon={faClose}
  //               className="text-2xl text-tertiary-color-700"
  //             />
  //           </button>
  //         </div>
  //         <div className="flex w-full max-w-[450px] items-center justify-between py-6">
  //           <span className="rounded-full bg-[#E7F6EC] p-2">
  //             <span className="mx-auto flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#61C478] text-lg text-white">
  //               <FontAwesomeIcon icon={faCheck} />
  //             </span>
  //           </span>
  //           <div>
  //             <p className="font-medium text-black">Name of document.pdf</p>
  //             <p className="mt-1 flex items-center gap-2 text-xs font-light text-[#98A2B3]">
  //               <span>11 Sep, 2023 </span>
  //               <span>12:24pm</span>
  //               <span>. 13MB</span>
  //             </p>
  //           </div>
  //           <button type="button" className="text-primary-color-600 md:text-lg">
  //             <FontAwesomeIcon icon={faTrashCan} />
  //           </button>
  //           <button type="button" className="text-2xl font-bold text-[#475367]">
  //             <RxDownload />
  //           </button>
  //         </div>
  //       </div>
  //       <div className="mt-5">
  //         <label
  //           htmlFor="additional"
  //           className="text-sm font-medium capitalize text-[#101928]"
  //         >
  //           Additional Information
  //         </label>
  //         <Input
  //           id="additional"
  //           name="title"
  //           className="rounded-[6px] border border-[#D0D5DD]"
  //         />
  //       </div>
  //       <CommonButton
  //         className="mt-10 bg-primary-color-600 capitalize text-[#FFEBF0]"
  //         type="submit"
  //       >
  //         submit
  //       </CommonButton>
  //     </form>
  //   </section>
  // );
  const inputRef = useRef(null);
  const [light, setLight] = useState(false);
  const [fileList, setFileList] = useState([]);
  const { mutate: submitAssignment, isPending } = useSubmitAssignment();
  // const [queryString] = useSearchParams();
  const cohortId = data.cohort_id;
  const { courseId } = useParams();

  console.log(data.cohort_id, "from assignment");

  const validFileSize = (file, maxSizeMb) => {
    let maxfilesize_in_mb = maxSizeMb || 100,
      filesize = file.size; // in MB
    const filesize_in_mb = Math.round(filesize / 1048576);
    if (filesize_in_mb > maxfilesize_in_mb) {
      return false;
    }
    return true;
  };

  const fileExist = (file) => {
    if (file) {
      const result = Array.from(fileList).filter((f) => f.name === f.name);
      if (result.length > 0) {
        return true;
      }
      return false;
    }
  };

  const validateExtension = (file) => {
    if (
      file.type === "image/png" ||
      file.type === "image/jpeg" ||
      file.type === "image/gif" ||
      file.type == "application/pdf"
    ) {
      return true;
    }
    return false;
  };

  const handleFileInput = (event) => {
    const selectedFiles = event.target.files;

    const validFiles = [];
    for (let i = 0; i < selectedFiles.length; i++) {
      // if (!fileExist(selectedFiles[i])) {
      if (validateExtension(selectedFiles[i])) {
        if (validFileSize(selectedFiles[i], 25)) {
          validFiles.push(selectedFiles[i]);
        } else {
          alert(selectedFiles[i] + "file size too large");
        }
      } else {
        alert(selectedFiles[i].name + "does not have a valid extension");
      }
      // } else {
      //   alert(selectedFiles[i].name + "File already exists");
      // }
    }

    setFileList((prev) => [...prev, ...validFiles]);
  };

  const handleDropFile = (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;

    const validFiles = [];
    for (let i = 0; i < droppedFiles.length; i++) {
      if (fileExist(droppedFiles[i])) {
        if (validateExtension(droppedFiles[i])) {
          if (validFileSize(droppedFiles[i], 25)) {
            validFiles.push(droppedFiles[i]);
          } else {
            alert(droppedFiles[i] + "file size too large");
          }
        } else {
          alert(droppedFiles[i].name + "does not have a valid extension");
        }
      } else {
        alert(droppedFiles[i].name + "File already exists");
      }
    }

    setFileList((prev) => [...prev, ...validFiles]);
  };

  const fileSize = (sizeInByte) => {
    const names = ["bytes", "KiB", "MiB", "GiB", "TiB"];
    let count = 0;
    let size = parseInt(sizeInByte, 10) || 0;
    while (size >= 1024 && ++count) {
      size = size / 1024;
    }

    return size.toFixed(size < 10 && count > 0 ? 1 : 0) + "" + names[count];
  };

  const handleDelete = (fileName) => {
    const newFileArr = Array.from(fileList).filter((f) => f.name !== fileName);

    setFileList([...newFileArr]);
  };
  const onDragEnter = () => {
    setLight(true);
  };

  const onDragLeave = () => {
    setLight(false);
  };

  // const onFileChange = (file) => {
  //   console.log(file);
  // };

  // const onFileDrop = (e) => {
  //   const newFile = e.target.files[0];
  //   if (newFile) {
  //     const updatedList = [...fileList, newFile];
  //     setFileList(updatedList);
  //     // onFileChange(updatedList);
  //   }
  // };

  const handleClick = () => {
    inputRef.current.click();
  };
  const documentSchema = z.object({
    title: z
      .string()
      .min(3, { message: "character must be more than three" })
      .max(65, { message: "not more than 65" }),
    additional_informations: z
      .string()
      .min(3, { message: "character must be more than three" })
      .max(40, { message: "not more than 40 characters" }),
  });

  const form = useForm({
    resolver: zodResolver(documentSchema),
    defaultValues: {
      title: "",
      additional_informations: "",
    },
  });

  const onSubmit = (data) => {
    const file = new FormData();
    file.append("title", data.title);
    file.append("additional_informations", data.additional_informations);

    for (let i = 0; i < fileList.length; i++) {
      file.append("assignments", fileList[i]);
    }

    submitAssignment(
      {
        data: file,
        courseId,
        cohortId,
        section: 2,
      },
      {
        onSuccess: () => {
          setFileList([]);
          form.reset();
          //  setModal((prev) => !prev);
        },
      },
    );
  };
  return (
    <div className="mt-12 w-full max-w-[768px]">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-2xl font-medium capitalize text-[#344054]">
            Assignments
          </h3>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div>
            <FormInput
              name="title"
              label="Title"
              placeholder=""
              id="title"
              type="text"
              control={form.control}
            />
            <p className="mt-1 text-right text-gray-500">
              {form.watch("title") ? `${form.watch("title").length}` : 0}
              /65
            </p>
          </div>

          <div className="mt-5">
            <label
              htmlFor="title"
              className="text-sm font-medium capitalize text-[#101928]"
            >
              Upload Document
            </label>
            <div
              className="group/file mt-1 rounded-lg border-[1.5px] border-dashed border-[#D0D5DD] px-6 py-7"
              onDrop={() => {
                onDragLeave();
                handleDropFile();
              }}
              onDragOver={handleDropFile}
              onDragEnter={onDragEnter}
              onDragLeave={onDragLeave}
            >
              <div className="relative">
                <span
                  className={cn(
                    "mx-auto block w-fit rounded-full bg-[#F0F2F5] p-4",
                    light ? "opacity-20" : "",
                  )}
                >
                  <input
                    type="file"
                    name=""
                    id=""
                    className="absolute left-0 top-0 h-full w-full opacity-0"
                    ref={inputRef}
                    onChange={handleFileInput}
                    multiple
                  />
                  <CloudUpload />
                </span>
              </div>
              <p className="pb-1 pt-4 text-center">
                <button
                  type="button"
                  className="cursor-pointer text-sm font-medium text-primary-color-600"
                >
                  Click to upload
                </button>{" "}
                <span className="text-sm font-light text-[#475367]">
                  or drag and drop
                </span>
              </p>
              <span className="block text-center text-xs font-light text-[#98A2B3]">
                SVG, PNG, JPG or GIF (max. 800x400px){" "}
              </span>
              <div className="flex items-center gap-1">
                <div className="h-px w-full bg-[#F0F2F5]" />
                <span className="mb-4 mt-[19px] uppercase text-[#101928]">
                  or
                </span>
                <div className="h-px w-full bg-[#F0F2F5]" />
              </div>
              <CommonButton
                type="button"
                className="mx-auto block bg-primary-color-600 text-sm text-white"
                onClick={handleClick}
              >
                Browse file
              </CommonButton>
            </div>
          </div>
          <div className="mt-2 flex items-center gap-4">
            <p className="text-[#667185]">Upload one or more files</p>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-color-600 text-xs text-white">
              {fileList.length}
            </span>
          </div>

          {Array.from(fileList)
            .reverse()
            .map((file, i) => {
              return (
                <div
                  className="mt-5 flex w-full max-w-[450px] items-center justify-between"
                  key={i}
                >
                  <div className="flex items-center gap-2">
                    <span>
                      <File className="h-12 w-12 text-primary-color-600" />
                    </span>
                    <div>
                      <p className="font-medium text-black">{file.name}</p>
                      <p className="flex items-center gap-1 text-sm font-light text-[#98A2B3]">
                        {/* <span>11 Sep, 2023 | 12:24pm</span>
                          <span className="h-1 w-1 rounded bg-[#98A2B3]"></span> */}

                        <span>{fileSize(file.size)}</span>
                      </p>
                    </div>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="text-primary-color-600 md:text-lg"
                      onClick={() => handleDelete(file.name)}
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  </div>
                </div>
              );
            })}

          <div className="mb-10 mt-5">
            <FormInput
              name="additional_informations"
              label="Additional Informations"
              placeholder=""
              id="additional_informations"
              type="text"
              control={form.control}
            />
            <p className="mt-1 text-right text-gray-500">
              {/* {form.watch("title") ? `${form.watch("title").length}` : 0}
              /65 */}
              Maximum Character 40
            </p>
          </div>

          <div className="ml-auto">
            <CommonButton
              className="bg-primary-color-600"
              disabled={isPending || fileList.length < 1}
            >
              Submit
            </CommonButton>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Assignment;
