import { BASE_URL } from "@/constant";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const addStudents = ({ data, courseId, cohortId, groupId }) =>
  axios.post(
    `${BASE_URL}/courses/${courseId}/cohorts/${cohortId}/projects/groups/${groupId}/students`,

    data,
    {
      headers: {
        Authorization: `Bearer ${Cookies.get("adminToken")}`,
      },
    },
  );

export const useAddStudentToGroup = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: addStudents,
    onSuccess: () => {
      toast.success("Students added successfully");
    },
    onError: (err) => {
      toast.error(err.response.data.message ?? "Something went wrong");
    },
  });

  return { mutate, isPending };
};
