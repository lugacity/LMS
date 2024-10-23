import { BASE_URL } from "@/constant";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const deleteRecordedSection = async (section) => {
  const courseId = localStorage.getItem("id");
  const cohortId = localStorage.getItem("cohortId");
  const token = Cookies.get("adminToken");
  const url = `${BASE_URL}/courses/${courseId}/cohorts/${cohortId}/sections/${section}`;

  return await axios.delete(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const useDeleteRecordedSection = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteSection, isPending: isDeleting } = useMutation({
    mutationFn: deleteRecordedSection,
    onSuccess: () => {
      toast.success("deleted successfully");
      queryClient.invalidateQueries("get-demand-course");
    },
  });

  return {
    deleteSection,
    isDeleting,
  };
};

const deleteRecordedVideoApi = async ({ section, id }) => {
  const courseId = localStorage.getItem("id");
  const cohortId = localStorage.getItem("cohortId");
  const token = Cookies.get("adminToken");

  const url = `${BASE_URL}/courses/${courseId}/cohorts/${cohortId}/sections/${section}/recorded-session/${id}
`;
  return axios.delete(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const useDeleteRecordedVideo = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteRecordedVideo, isPending: isDeleting } = useMutation({
    mutationFn: deleteRecordedVideoApi,
    onSuccess: (data) => {
      console.log(data);
      toast.success(data.data.message);
      queryClient.invalidateQueries("get-demand-course");
    },
    onError: (err) =>
      toast.error(err.response.data.message || "something went wrong"),
  });

  return { deleteRecordedVideo, isDeleting };
};
