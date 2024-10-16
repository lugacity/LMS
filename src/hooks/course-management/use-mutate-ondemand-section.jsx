import { BASE_URL } from "@/constant";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const mutateSection = async (section) => {
  //https://avi-lms-backend.onrender.com/api/v1/admins/courses/:courseId/on-demand-section/:section

  const courseId = localStorage.getItem("id");
  const token = Cookies.get("adminToken");

  const url = `${BASE_URL}/courses/${courseId}/on-demand-section/${section}`;
  return axios.delete(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const useDeleteOndemandVideo = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteSection, status: deleteStatus } = useMutation({
    mutationFn: mutateSection,
    onSuccess: (data) => {
      console.log(data);
      toast.success(data.data.message);
      queryClient.invalidateQueries("get-demand-course");
    },
    onError: (err) =>
      toast.error(err.response.data.message || "something went wrong"),
  });

  return { deleteSection, deleteStatus };
};
