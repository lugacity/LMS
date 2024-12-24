import React, { useState } from "react";
import axios from "axios";
import StartMeeting from "./StartMeeting";
import Cookies from "js-cookie";
import { useParams, useSearchParams } from "react-router-dom";
import { useStartLiveSession } from "@/hooks/course-management/live-session/use-start-live-session";

const AdminStartLiveSession = () => {
  const [meetingDetails, setMeetingDetails] = useState(null);
  // const [courseId, setCourseId] = useState("672f600db2f3905e23f914e6");
  // const [cohortId, setCohortId] = useState("6732f2f47a0ce8a492cc36e1");
  const { courseId } = useParams();
  const [queryString] = useSearchParams();
  const { data, isLoading, error } = useStartLiveSession();

  const handleStartSession = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `https://avi-lms-backend.onrender.com/api/v1/admins/courses/672f600db2f3905e23f914e6/cohorts/6732f2f47a0ce8a492cc36e1/live-session/start`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("adminToken")}`,
        },
      });
      console.log(response.data.data);
      setMeetingDetails(response.data.data);
      return;
    } catch (error) {
      console.log("Error fetching meeting details:", error);
      return;
    }
  };
  if (isLoading) return <p>Loading Meeting...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (data) {
    // setMeetingDetails(data?.data?.data);
    return (
      <div>
        <StartMeeting
          meetingNumber={data?.data?.data?.meeting_id}
          userName="Admin"
          signature={data?.data?.data?.signature}
          apiKey={`${import.meta.env.VITE_ZOOM_API_KEY}`}
          password={data?.data?.data?.password}
          zak={data?.data?.data?.accessToken}
        />
      </div>
    );
  }
};

export default AdminStartLiveSession;
