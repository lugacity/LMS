import Table from "@/Components/Table";
import { useFetchOndemandStudent } from "@/hooks/course-management/on-demand-section/use-fetch-ondemand-student";
import DashButton from "@/pages/auth/ButtonDash";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EllipsisVertical } from "lucide-react";
import { useParams, useSearchParams } from "react-router-dom";
import StudentPopover from "./StudentPopover";
import EditModal from "./EditModal";
import AddStudentOnDemandForm from "./AddStudentOnDemandForm";

const OndemandStudentManagementTable = () => {
  const { courseId } = useParams();
  const [queryString] = useSearchParams();

  const courseTitle = queryString.get("title");

  const { data } = useFetchOndemandStudent(courseId);

  return (
    <div>
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
              <EditModal
                form={<AddStudentOnDemandForm />}
                header={
                  <>
                    <p className="text-sm font-light text-[#475367]">
                      Add student to this course:
                    </p>
                    <p className="mt-4 font-normal text-[#23314A]">
                      {courseTitle}
                    </p>
                  </>
                }
              >
                <DashButton className="rounded p-2 text-white">
                  <FontAwesomeIcon icon={faPlus} /> Add Student
                </DashButton>
              </EditModal>
            </div>
          </div>

          <div></div>
        </div>
      </div>
      <Table cols={"0.5fr 1fr 1.6fr 0.8fr 1.1fr 0.85fr 0.5fr"}>
        <Table.Header className={"gap-1 *:text-sm *:font-medium *:capitalize"}>
          <div>S/N</div>
          <div>Name</div>
          <div>Course Title</div>
          <div>Course Type</div>
          <div>Enrollment Date</div>
          <div>Course Duration</div>
        </Table.Header>
        {data.data.data.map((student, i) => (
          <Table.Row className={"gap-1 *:truncate"} key={student.id}>
            <span className="font-poppins text-sm text-[#344054]">
              {i + 1 < 9 ? `0${i + 1}` : i + 1}
            </span>
            <span className="font-poppins text-sm text-[#344054]">
              <span className="block font-poppins text-sm font-medium capitalize text-[#101928]">
                {student.firstname} {student.lastname}
              </span>
              <span className="font-poppins text-sm text-[#475367]">
                {student.email}
              </span>
            </span>
            <span className="text-sm text-[#344054]">{courseTitle}</span>

            <span>
              <span className="flex items-center justify-center rounded-full bg-[#FFECE5] px-1 py-px text-sm font-medium text-[#AD3307]">
                on demand
              </span>
            </span>

            <span>---</span>
            <span>---</span>
            <StudentPopover>
              <span className="flex max-w-[32px] items-center justify-center rounded border border-[#E4E7EC] px-[]">
                <EllipsisVertical className="w-4" />
              </span>
            </StudentPopover>
          </Table.Row>
        ))}
      </Table>
    </div>
  );
};

export default OndemandStudentManagementTable;
