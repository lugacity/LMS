import OndemandStudentManagementTable from "@/Components/admindashboard/course-management/on-demand-section/OndemandStudentManagementTable";
import { useFetchOndemandStudent } from "@/hooks/course-management/on-demand-section/use-fetch-ondemand-student";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import NoStudentEnroll from "../NoStudentEnroll";
import Error from "@/Components/Error";
// import CourseTable from './CourseTable';

const StudentManagement = () => {
  const { courseId } = useParams();

  const { data, isLoading, error, refetch } = useFetchOndemandStudent(courseId);

  if (error)
    return (
      <div className="mt-6 h-full w-full">
        <Error error={error} refetch={refetch} />
      </div>
    );

  if (isLoading)
    return (
      <div className="mx-auto mt-6 w-max">
        <ClipLoader color="#CC1747" />
      </div>
    );

  if (data?.data?.data.length === 0) return <NoStudentEnroll />;

  return (
    <div className="p-4">
      <OndemandStudentManagementTable />
    </div>
  );
};

export default StudentManagement;
