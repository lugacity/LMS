import axios from "axios";
import Cookies from "js-cookie";
import { BASE_URL } from "@/constant";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const publishCourse = async () => {
  const courseId = localStorage.getItem("courseId");
  const token = Cookies.get("adminToken");
  return await axios.patch(`${BASE_URL}/courses/${courseId}/publish`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const usePublishCourse = () => {
  const { data: publish, isPending: isPublishing } = useMutation({
    mutationFn: publishCourse,
    onSuccess: ({ data }) => {
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
    onSettled: () => {
      // Reset the courseId in the local storage after publishing
      localStorage.removeItem("courseId");
    },
    // Enable the mutation to be retried in case of network issues
    retry: 3,
    retryDelay: (attemptNumber) => Math.pow(2, attemptNumber) * 1000,
  });

  return {
    publish,
    isPublishing,
  };
};
