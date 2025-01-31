import { BASE_URL } from "@/constant";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";

const fetchEnrollment = async (period) =>
  await axios.get(`${BASE_URL}/data/enrollments-by-period?period=week`, {
    headers: {
      Authorization: `Bearer ${Cookies.get("adminToken")}`,
    },
  });

export const useFetchEnrollment = (period) => {
  return useQuery({
    queryKey: ["fetch-enrollment-trend"],
    queryFn: fetchEnrollment,
  });
};

// Example usage:
