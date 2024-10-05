import { BASE_URL } from "@/constant";
import axios from "axios";
import Cookies from "js-cookie";

const url = import.meta.env.VITE_USER_URL;

export async function fetchUserProfile() {
  const token = Cookies.get('token')

  try {
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    console.log(response);

    return response
  } catch (error) {
    console.log(error);

  }

}

export const addDemandSection = async (data) => {
  const token = Cookies.get('adminToken')
  const courseId = localStorage.getItem("id");

  return await axios.post(
    `${BASE_URL}/courses/${courseId}/on-demand-section`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
}

export const addCourseInformation = async (data) => {
  const token = Cookies.get('adminToken')

  return await axios.post(
    `${BASE_URL}/courses/course-informations`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    },
  );

}

export const addCourseType = async (data) => {
  const token = Cookies.get('adminToken')
  const courseId = localStorage.getItem('id')
  return await axios.post(
    `${BASE_URL}/courses/${courseId}/coursetype`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
}

export const addLiveSession = async (data) => {
  const token = Cookies.get('adminToken')
  const courseId = localStorage.getItem('id')

  const cohort = localStorage.getItem("cohorts");

  return await axios.post(
    `${BASE_URL}/courses/${courseId}/live-session`,
    { ...data, cohort },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
}

export const addRecordedSession = async (data) => {
  const courseId = localStorage.getItem('id')
  const token = Cookies.get('adminToken')

  return await axios.post(
    `${BASE_URL}/courses/${courseId}/recorded-session`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
}

export const fetchDemandCourse = async () => {
  const token = Cookies.get('adminToken')
  const courseId = localStorage.getItem('id')


  return await axios.get(
    `${BASE_URL}/courses/${courseId}/on-demand-section`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
}