import { BASE_URL } from "@/constant";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";

const streamVideo = (courseId, section, videoId) => {
  return axios.get(
    `${BASE_URL}/courses/${courseId}/on-demand-section/${section}/recordings?videoId=${videoId}`,
    {
      responseType: "stream",
      headers: {
        Authorization: `Bearer ${Cookies.get("adminToken")}`,
      },
    },
  );
};

export const useStreamVideo = (courseId, section, videoId) => {
  return useQuery({
    queryKey: ["streamVideo", { courseId, section, videoId }],
    queryFn: () => streamVideo(courseId, section, videoId),
    enabled: !!videoId,
    refetchInterval: 5000, // Refetch every 5 seconds
    staleTime: 60 * 1000, // Cache for 1 minute
    keepPreviousData: true, // Keep the previous data while fetching new data
    retry: false, // Disable retrying fetch requests
    errorRetryTime: 30000, // Retry after 30 seconds if error occurs
    onError: (error) => {
      console.error("Error streaming video:", error);
    },
    suspense: true, // Enable suspense for the query to be fetched indefinitely
  });
};
