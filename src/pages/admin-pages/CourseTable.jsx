import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV,
  faSearch,
  faTrash,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import DashButton from "../auth/ButtonDash";

const CourseTable = ({ courses, onRemoveStudent }) => {
  const [showDropdown, setShowDropdown] = useState(null);

  const toggleDropdown = (index) => {
    if (showDropdown === index) {
      setShowDropdown(null); // Hide dropdown if already open
    } else {
      setShowDropdown(index); // Show the dropdown
    }
  };

  // const handleRemoveStudent = () => {
  //   alert('Remove student');
  //   setShowDropdown(null); // Close the dropdown after action

  // };

  return (
    <div className="overflow-x-auto">
      <div className="grid grid-cols-12 py-6">
        <div className="font-[500]text-[#344054] col-span-4 text-[24px]">
          <p>Course Management</p>
        </div>

        <div className="col-span-8">
          <div className="flex items-center justify-between">
            <div className="relative w-3/5">
              <input
                type="text"
                className="w-full rounded-md border bg-gray-50 px-1 py-2 pl-10 text-[14px] focus:outline-none"
                placeholder="Search Course"
              />
              <div className="absolute left-3 top-1.5 text-gray-400">
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>

            <div className="border-grey-300 flex items-center gap-2 rounded border-2 px-3 py-1.5">
              <span>
                <svg
                  width="14"
                  height="11"
                  viewBox="0 0 14 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.979126 0.864583C0.979126 0.438864 1.32424 0.09375 1.74996 0.09375H12.5416C12.9673 0.09375 13.3125 0.438864 13.3125 0.864583C13.3125 1.2903 12.9673 1.63542 12.5416 1.63542H1.74996C1.32424 1.63542 0.979126 1.2903 0.979126 0.864583Z"
                    fill="#667185"
                  />
                  <path
                    d="M2.52079 5.48958C2.52079 5.06386 2.86591 4.71875 3.29163 4.71875H11C11.4257 4.71875 11.7708 5.06386 11.7708 5.48958C11.7708 5.9153 11.4257 6.26042 11 6.26042H3.29163C2.86591 6.26042 2.52079 5.9153 2.52079 5.48958Z"
                    fill="#667185"
                  />
                  <path
                    d="M4.83329 9.34375C4.40757 9.34375 4.06246 9.68886 4.06246 10.1146C4.06246 10.5403 4.40757 10.8854 4.83329 10.8854H9.45829C9.88401 10.8854 10.2291 10.5403 10.2291 10.1146C10.2291 9.68886 9.88401 9.34375 9.45829 9.34375H4.83329Z"
                    fill="#667185"
                  />
                </svg>
              </span>

              <span>Filter </span>
            </div>

            <div>
              <DashButton className="rounded p-2 text-white">
                <FontAwesomeIcon icon={faPlus} /> Add Student
              </DashButton>
            </div>
          </div>

          <div></div>
        </div>
      </div>
      <table className="min-w-full border border-gray-300 bg-white text-[13px] text-[#344054]">
        <thead>
          <tr className="min-w-full border-0 border-red-500 bg-[#E4E7EC]">
            <th className="border-b px-4 py-2 text-left">S/N</th>
            <th className="border-b px-4 py-2 text-left">Name</th>
            <th className="border-b px-4 py-2 text-left">Course Title</th>
            <th className="border-b px-4 py-2 text-left">Course Type</th>
            <th className="border-b px-4 py-2 text-left">Enrollment Date</th>
            <th className="border-b px-4 py-2 text-left">Course Duration</th>
          </tr>
        </thead>
        {/* <tbody className="text-[14px]">
          {courses.map((course, index) => (
            <tr key={index}>
              <td className="border-b px-4 py-2">{index + 1}</td>
              <td className="border-b px-4 py-2">
                {course.name} <br />
                <span className="text-gray-500">{course.email}</span>
              </td>
              <td className="border-b px-4 py-2">{course.title}</td>
              <td className="border-b px-4 py-2">
                <span
                  className="inline-block rounded px-2 py-1 font-[500]"
                  style={{ backgroundColor: "#FFECE5", color: "#AD3307" }}
                >
                  {course.type}
                </span>
              </td>
              <td className="border-b px-4 py-2">{course.enrollmentDate}</td>

              <td className="relative flex justify-between border-b px-4 py-2">
                {course.duration}
                <button
                  onClick={() => toggleDropdown(index)}
                  className="ml-2 border border-gray-300 px-2 text-gray-600 focus:outline-none"
                >
                  <FontAwesomeIcon icon={faEllipsisV} />
                </button>
                {showDropdown === index && (
                  <div className="absolute right-0 z-10 mt-2 w-32 rounded bg-white py-2 shadow-lg">
                    <button
                      onClick={() => onRemoveStudent(course.id)}
                      className="block w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100"
                    >
                      <FontAwesomeIcon icon={faTrash} className="mr-2" /> Remove
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody> */}
      </table>
    </div>
  );
};

export default CourseTable;
