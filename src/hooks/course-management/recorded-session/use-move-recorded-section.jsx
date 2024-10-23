import axios from "axios";
import Cookies from "js-cookie";
import { BASE_URL } from "@/constant";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const moveSection = async (data) => {
  const courseId = localStorage.getItem("id");
  const cohortId = localStorage.getItem("cohortId");
  const token = Cookies.get("adminToken");

  console.log({
    data,
  });
  const url = `${BASE_URL}/courses/${courseId}/cohorts/${cohortId}/move-section`;

  return await axios.put(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const useMoveRecordedSectionUP = () => {
  const queryClient = useQueryClient();
  const { mutate: moveUP, isPending: isMovingUP } = useMutation({
    mutationFn: moveSection,
    onSuccess: (data) => {
      console.log(data);
      toast.success(data.data.message);

      queryClient.invalidateQueries("get-demand-course");
    },
    onError: (e) =>
      toast.error(e.response.data.message || "something went wrong"),
  });
  return {
    moveUP,
    isMovingUP,
  };
};

export const useMoveRecordedSectionDown = () => {
  const queryClient = useQueryClient();
  const { mutate: moveDown, isPending: isMovingDown } = useMutation({
    mutationFn: moveSection,
    onSuccess: (data) => {
      console.log(data);
      toast.success(data.data.message);

      queryClient.invalidateQueries("get-demand-course");
    },
    onError: (e) =>
      toast.error(e.response.data.message || "something went wrong"),
  });

  return { moveDown, isMovingDown };
};

export const useMoveRecordedSectionToTop = () => {
  const queryClient = useQueryClient();
  const { mutate: moveToTop, isPending: isMovingToTop } = useMutation({
    mutationFn: moveSection,
    onSuccess: (data) => {
      console.log(data);
      toast.success(data.data.message);

      queryClient.invalidateQueries("get-demand-course");
    },
    onError: (e) =>
      toast.error(e.response.data.message || "something went wrong"),
  });

  return { moveToTop, isMovingToTop };
};

export const useMoveRecordedSectionToBottom = () => {
  const queryClient = useQueryClient();
  const { mutate: moveToBottom, isPending: isMovingToBottom } = useMutation({
    mutationFn: moveSection,
    onSuccess: (data) => {
      console.log(data);
      toast.success(data.data.message);

      queryClient.invalidateQueries("get-demand-course");
    },
    onError: (e) =>
      toast.error(e.response.data.message || "something went wrong"),
  });

  return { moveToBottom, isMovingToBottom };
};
