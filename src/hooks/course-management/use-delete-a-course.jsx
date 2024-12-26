import { BASE_URL } from "@/constant";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const deleteCourse = ({ courseId }) => {

    // https://avi-lms-backend.onrender.com/api/v1/admins/courses/:courseId
  const url = `${BASE_URL}/courses/${courseId}`;
  return axios.delete(url, {
    headers: {
      Authorization: `Bearer ${Cookies.get("adminToken")}`,
    },
  });
};

export const useDeleteCourse = () => {
//   const queryClient = useQueryClient();
  const { mutate: courseDelete, isPending } = useMutation({
    mutationFn: deleteCourse,
    onSuccess: () => {
      toast.success("Course deleted successfully");
    //   queryClient.invalidateQueries("project-area-cards");
    },
    onError: (err) => {
      console.log(err);
      toast.error(err?.response?.data?.message ?? "something went wrong");
    },
  });
  return { courseDelete, isPending };
};
