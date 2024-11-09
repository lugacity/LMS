import { BASE_URL } from "@/constant";
import axios from "axios";
import Cookies from "js-cookie";

const url = import.meta.env.VITE_USER_URL;


export const axiosAdmin = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${Cookies.get('adminToken')}`,

  }
})

export const fetchUserProfile = async () => {
  const token = Cookies.get('token')

  return axios.get(url, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

}

export const addDemandSection = async (data) => {
  const courseId = localStorage.getItem("courseId");

  return axiosAdmin.post(`/courses/${courseId}/on-demand-section`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
}



export const addCourseInformation = async (data) => {

  return axiosAdmin.post(`/courses/course-informations`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })

}


export const editCourseInformationApi = async (data) => {
  const courseId = localStorage.getItem('courseId')

  return axiosAdmin.patch(`/courses/${courseId}/course-informations`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
}



export const addCourseType = async (data) => {
  const courseId = localStorage.getItem('courseId')

  return axiosAdmin.post(`/courses/${courseId}/coursetype`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
}

export const addLiveSession = async (data) => {
  const token = Cookies.get('adminToken')
  const courseId = localStorage.getItem('courseId')

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
  const courseId = localStorage.getItem('courseId')
  const token = Cookies.get('adminToken')
  let section = localStorage.getItem("recordedSection")
    ? localStorage.getItem("recordedSection")
    : 2;
  // https://avi-lms-backend.onrender.com/api/v1/admins/courses/:courseId/sections/:section/recorded-session

  return await axios.post(
    `${BASE_URL}/courses/${courseId}/sections/${section}/recorded-session`,
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    },
  );
}

export const fetchDemandCourse = async () => {
  const token = Cookies.get('adminToken')
  const courseId = localStorage.getItem('courseId')


  return await axios.get(
    `${BASE_URL}/courses/${courseId}/on-demand-section`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
}


// Fetch course information
export const fetchCourseInformation = async (courseId) => {
  const token = Cookies.get('adminToken');


  return await axios.get(
    `${BASE_URL}/courses/${courseId}/course-informations`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};

// Fetch cohorts
export const fetchCohorts = async (courseId) => await axiosAdmin.get(`/courses/${courseId}/cohorts`)


// Add a single cohort
export const addSingleCohort = async (data) => {
  const courseId = localStorage.getItem('courseId');
  const token = Cookies.get('adminToken');

  return await axios.post(
    `${BASE_URL}/courses/${courseId}/cohorts`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};

export const getSingleCohort = async (courseId, cohortId) => await axiosAdmin.get(`/courses/${courseId}/cohorts/${cohortId}`)
