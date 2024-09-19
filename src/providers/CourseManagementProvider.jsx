import { createContext, useState } from "react";

export const CourseManagementContext = createContext();
const CourseManagementProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [subTab, setSubTab] = useState(1);
  return (
    <CourseManagementContext.Provider
      value={{ activeTab, setActiveTab, subTab, setSubTab }}
    >
      {children}
    </CourseManagementContext.Provider>
  );
};

export default CourseManagementProvider;
