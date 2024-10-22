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
