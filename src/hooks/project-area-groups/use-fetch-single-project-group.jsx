import { BASE_URL } from "@/constant";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";

// Function to fetch project area data
export const getSingleProjectGroup = async (courseId, cohortId, groupId) => {
  const token = Cookies.get("adminToken");
  //    const { courseId, cohortId } = JSON.parse(
  //      localStorage.getItem("fetch-all-admin-courses") || "{}",
  //     );
  
  const response = await axios.get(
    `${BASE_URL}/courses/${courseId}/cohorts/${cohortId}/projects/groups/${groupId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

    // console.log("groupID API", response);

  return response.data;
};

// Custom hook to fetch all project area data using React Query
export const useSingleProjectGroup = (courseId, cohortId, groupId) => {
  return useQuery({
    queryKey: ["fetch-single-project-group", courseId, cohortId, groupId],
    queryFn: () => getSingleProjectGroup(courseId, cohortId, groupId),
  });
};
