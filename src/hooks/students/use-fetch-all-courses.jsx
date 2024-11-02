import { STUDENT_BASE_URL } from "@/constant";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";

// https://avi-lms-backend.onrender.com/api/v1/courses?perPage=10&page=1&searchQuery
const fetchAllCourses = () => {
  const token = Cookies.get("token");

  const url = `${STUDENT_BASE_URL}/courses?perPage=10&page=1&searchQuery`;
  const response = axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};






export const useFetchAllCourses = () => {
  const { data: allCourses, isLoading: isFetchingAllCourses } = useQuery({
    queryKey: ["fetch-all-courses"],
    queryFn: fetchAllCourses,
  });
  return { allCourses, isFetchingAllCourses };
};







// Preview Courses
export const previewCourses = async (courseId) => {
  const token = Cookies.get("token");

  // https://avi-lms-backend.onrender.com/api/v1/courses/:courseId?promocode=854B019880
  return await axios.get(
    `${STUDENT_BASE_URL}/courses/${courseId}?promocode=`,
       {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};

export const usePreviewCourses = (courseId) => {
  const { data: previewCourse, isLoading: isLoading } = useQuery({
    queryKey: ["preview-courses", courseId],
    queryFn: ()=>previewCourses(courseId),
  });
  return { previewCourse, isLoading };
};