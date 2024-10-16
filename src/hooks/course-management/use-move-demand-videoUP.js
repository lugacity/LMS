import { BASE_URL } from "@/constant";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";

const moveUp = async ({ data, section }) => {
  const courseId = localStorage.getItem('id')
  const token = Cookies.get('adminToken')

  console.log({
    data,
    section
  })
  const url = `${BASE_URL}/courses/${courseId}/on-demand/sections/${section}/move-video`

  // https://avi-lms-backend.onrender.com/api/v1/admins/courses/:courseId/on-demand/sections/:section/move-video
  return await axios.put(
    url,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
}
