import { axiosAdmin } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

const fetchEnrollStudents = async (courseId) => {
  return await axiosAdmin.get(
    `/courses/${courseId}/on-demand-section/enrolled-students`,
  );
};

export const useFetchOndemandStudent = (courseId) => {
  return useQuery({
    queryKey: ["get-ondemand-student", courseId],
    queryFn: () => fetchEnrollStudents(courseId),
  });
};
