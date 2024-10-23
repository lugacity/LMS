import { BASE_URL } from "@/constant";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const moveRecordedVideo = async ({ data, section }) => {
  const courseId = localStorage.getItem("id");
  const cohortId = localStorage.getItem("cohortId");
  const token = Cookies.get("adminToken");

  console.log({
    data,
    section,
  });
  // https://avi-lms-backend.onrender.com/api/v1/admins/courses/:courseId/cohorts/:cohortId/sections/:section/move-video
  const url = `${BASE_URL}/courses/${courseId}/cohorts/${cohortId}/sections/${section}/move-video`;

  return await axios.put(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const useMoveRecordedVideoDown = () => {
  const queryClient = useQueryClient();

  const { mutate: moveDown, status: moveDownStatus } = useMutation({
    mutationFn: moveRecordedVideo,
    onSuccess: (data) => {
      toast.success(data.data.message);

      queryClient.invalidateQueries("get-demand-course");
    },
    onError: (e) =>
      toast.error(e.response.data.message || "something went wrong"),
  });
  return { moveDown, moveDownStatus };
};

export const useMoveRecordedVideoUP = () => {
  const queryClient = useQueryClient();

  const { mutate: moveUP, status } = useMutation({
    mutationFn: moveRecordedVideo,
    onSuccess: (data) => {
      toast.success(data.data.message);

      queryClient.invalidateQueries("get-demand-course");
    },
    onError: (e) =>
      toast.error(e.response.data.message || "something went wrong"),
  });
  return { moveUP, status };
};

export const useMoveRecordedVideoToTop = () => {
  const queryClient = useQueryClient();

  const { mutate: moveTop, status: moveTopStatus } = useMutation({
    mutationFn: moveRecordedVideo,
    onSuccess: (data) => {
      console.log(data);
      toast.success(data.data.message);

      queryClient.invalidateQueries("get-demand-course");
    },
    onError: (e) =>
      toast.error(e.response.data.message || "something went wrong"),
  });
  return { moveTop, moveTopStatus };
};

export const useMoveRecordedVideoToBottom = () => {
  const queryClient = useQueryClient();

  const { mutate: moveToBottom, status: moveBottomStatus } = useMutation({
    mutationFn: moveRecordedVideo,
    onSuccess: (data) => {
      console.log(data);
      toast.success(data.data.message);

      queryClient.invalidateQueries("get-demand-course");
    },
    onError: (e) =>
      toast.error(e.response.data.message || "something went wrong"),
  });
  return { moveToBottom, moveBottomStatus };
};
