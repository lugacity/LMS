import BorderCard from "@/Components/BorderCard";
import Table from "@/Components/Table";
import { CommonButton } from "@/Components/ui/button";
import { Checkbox } from "@/Components/ui/checkbox";
import { useFetchAllLiveStudents } from "@/hooks/course-management/live-session/use-fetch-all-live-student";
import { useAddStudentToGroup } from "@/hooks/project-area-groups/use-add-student-to-group";
import { useFetchStudentsInGroup } from "@/hooks/project-area-groups/use-fetch-students-in-group";
import Modal from "@/pages/auth/components/Modal";
import { Trash } from "lucide-react";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useParams, useSearchParams } from "react-router-dom";

const GroupStudentManagement = () => {
  const [modal, setModal] = useState(false);
  const { courseId, groupId } = useParams();
  const [queryString] = useSearchParams();
  const cohortId = queryString.get("cohortId");

  const { data, isLoading, error } = useFetchStudentsInGroup(
    courseId,
    cohortId,
    groupId,
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) <p>{error?.response?.data?.message ?? "something went wrong"}</p>;

  return (
    <div>
      {" "}
      <header className="mt-7 flex items-center justify-between px-4 py-5">
        <p className="text-xl text-[#475367]">
          student({data?.data?.data?.students.length})
        </p>
        <div className="flex items-center gap-6">
          <div className="flex w-full max-w-[528px] items-center gap-x-4 rounded-md border border-[#D0D5DD] px-4 py-2">
            <label htmlFor="search">
              <IoSearch className="text-xl text-[#667185]" />
            </label>

            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search here..."
              className="w-full placeholder:text-[#667185]"
            />
          </div>
          <CommonButton
            className="bg-primary-color-600"
            onClick={() => setModal((prev) => !prev)}
          >
            Add student
          </CommonButton>
        </div>
      </header>
      {data?.data?.data?.students.length < 1 ? (
        <p>No student in this group</p>
      ) : (
        <Table cols={"0.5fr 2fr 2fr  1fr"}>
          <Table.Header
            className={"gap-1 *:text-sm *:font-medium *:capitalize"}
          >
            <div>S/N</div>
            <div>Name</div>
            <div>Email address</div>
            <div>Action</div>
          </Table.Header>
          {data?.data?.data?.students.map((student, i) => (
            <Table.Row key={student.id}>
              <p className="text-sm text-[#344054]">{i}</p>
              <p className="text-sm text-[#344054]">
                {student.firstname} {student.lastname}
              </p>
              <p className="text-sm text-[#344054]">{student.email}</p>
              <CommonButton className="flex items-center gap-1 bg-primary-color-600">
                <span>
                  <Trash />
                </span>
                <span>Remove from group</span>
              </CommonButton>
            </Table.Row>
          ))}
        </Table>
      )}
      {modal && (
        <Modal>
          <BorderCard className="w-full max-w-[603px] rounded bg-white p-[50px]">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-[#344054]">
                  Add Student{" "}
                </h3>
                <p className="text-[#667185]">Add students to this group.</p>
              </div>
              <CommonButton
                className="block max-w-[80px] justify-self-end"
                variant={"outline"}
                onClick={() => setModal((prev) => !prev)}
              >
                cancel
              </CommonButton>
            </div>
            <div className="max-h-[300px] overflow-y-scroll">
              <div className="mt-7 flex w-full max-w-[528px] items-center gap-x-4 rounded-md border border-[#D0D5DD] px-4 py-2">
                <label htmlFor="search">
                  <IoSearch className="text-xl text-[#667185]" />
                </label>

                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search by email"
                  className="w-full placeholder:text-[#667185]"
                />
              </div>
              <StudentList />
            </div>
          </BorderCard>
        </Modal>
      )}
    </div>
  );
};

const StudentList = () => {
  const { courseId, groupId } = useParams();
  const [queryString] = useSearchParams();
  const cohortId = queryString.get("cohortId");
  const [students, setStudents] = useState([]);
  const { mutate: addStudent, isPending } = useAddStudentToGroup();

  const handleAddStudent = () => {
    addStudent({
      courseId,
      cohortId,
      groupId,
      data: {
        emails: students,
      },
    });
  };

  const handleCheckboxChange = (email, isChecked) => {
    if (isChecked) {
      // Add email if checkbox is selected
      setStudents((prev) => [...prev, email]);
    } else {
      // Remove email if checkbox is deselected
      setStudents((prev) => prev.filter((e) => e !== email));
    }
  };

  console.log(students);

  const { data, isLoading, error } = useFetchAllLiveStudents(
    courseId,
    cohortId,
  );
  if (isLoading) return <p>Loading...</p>;
  if (error)
    return <p>{error?.response?.data?.message ?? "something went wrong"}</p>;
  if (data?.data?.data?.length < 1)
    return <p className="mt-6">No students in this cohort</p>;
  return (
    <div>
      <div className="mt-6 space-y-4 divide-y px-[14px] py-[22px] shadow-lg">
        {data?.data?.data.map((student) => {
          return (
            <div key={student.id} className="py-3">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name={student.email}
                  id={student.id}
                  value={student.email}
                  className="accent-primary-color-600"
                  checked={students.includes(student.email)}
                  onChange={(e) =>
                    handleCheckboxChange(student.email, e.target.checked)
                  }
                />
                <p>{student.email}</p>
              </div>
            </div>
          );
        })}
      </div>

      <CommonButton
        className="ml-auto mt-6 block w-max bg-primary-color-600"
        onClick={handleAddStudent}
        disabled={isPending || students.length < 1}
      >
        Add Student
      </CommonButton>
    </div>
  );
};
export default GroupStudentManagement;
