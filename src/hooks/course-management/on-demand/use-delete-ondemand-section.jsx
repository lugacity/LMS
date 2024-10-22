import { BASE_URL } from "@/constant";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const deleteOnDemandSection = async (section) => {
  const courseId = localStorage.getItem("id");
  const token = Cookies.get("adminToken");

  const url = `${BASE_URL}/courses/${courseId}/on-demand-section/${section}`;

  return await axios.delete(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const useDeleteDemandSection = () => {
  const queryClient = useQueryClient();
  const { mutate: DeleteSection, isPending: isDeleting } = useMutation({
    mutationFn: deleteOnDemandSection,
    onSuccess: () => {
      toast.success("deleted successfully");
      queryClient.invalidateQueries("get-demand-course");
    },
  });

  return {
    DeleteSection,
    isDeleting,
  };
};
