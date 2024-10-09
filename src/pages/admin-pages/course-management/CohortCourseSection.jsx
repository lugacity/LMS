import { useState } from "react";
import CourseCohortPreview from "./CourseCohortPreview";
import LiveOrRecordedSelection from "./LiveOrRecordedSelection";

export default function CohortCourseSection() {
  const sec = localStorage.getItem("section")
    ? localStorage.getItem("section")
    : "cohorts";

  const [section, setSection] = useState(sec);

  if (section === "cohorts")
    return <CourseCohortPreview section={section} setSection={setSection} />;
  if (section === "live or recorded") return <LiveOrRecordedSelection />;
}
