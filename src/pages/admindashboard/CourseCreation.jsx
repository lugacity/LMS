import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import CourseManagementPage from '../admin-pages/CourseManagementPage';
import CourseType from '../admin-pages/CourseType';

const CourseCreation = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [subTab, setSubTab] = useState(null);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
    if (tabIndex === 3) setSubTab(1); // Reset subTab when switching to Course Session
  };

  const handleSubTabClick = (subTabIndex) => {
    setSubTab(subTabIndex);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-col">
        {/* Tabs and Buttons */}
        <div className="flex justify-between items-center  mb-4">
          <div className="flex">
            {['Course Management', 'Course Type', 'Course Session', 'Publish'].map((label, index) => (
              <button 
                key={index}
                className={`py-2 px-4 text-sm font-medium flex items-center ${activeTab === index + 1 ? 'border-b-2 border-[#CC1747] text-[#CC1747]' : 'text-[#98A2B3] hover:text-gray-800'}`}
                onClick={() => handleTabClick(index + 1)}
              >
                <span className={`mr-2 rounded-full w-6 h-6 flex items-center justify-center ${activeTab === index + 1 ? 'bg-[#CC1747] text-white' : 'bg-[#98A2B3] text-white'}`}>
                  {index + 1}
                </span>
                {label}
                <FontAwesomeIcon icon={faAngleRight} className={`ml-2 ${activeTab === index + 1 ? 'text-[#CC1747]' : 'text-[#98A2B3]'}`} />
              </button>
            ))}
          </div>
          <div className="flex space-x-2">
            {(activeTab === 1 || activeTab === 2 || (activeTab === 3 && subTab === 1)) && (
              <button className="py-2 px-4 border border-[#667185] text-[#667185] bg-transparent rounded flex items-center hover:bg-[#f0f0f0]">
                Save and Continue
              </button>
            )}
            {(activeTab === 3 && subTab === 2) && (
              <button className="py-2 px-4 border border-[#667185] text-[#667185] bg-transparent rounded flex items-center hover:bg-[#f0f0f0]">
                Preview
              </button>
            )}
            {(activeTab === 4) && (
              <button className="py-2 px-4 border border-[#667185] text-[#667185] bg-transparent rounded flex items-center hover:bg-[#f0f0f0]">
                Publish
              </button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className={` ${activeTab === 1 ? '' : activeTab === 2 ? '' : activeTab === 3 ? 'bg-yellow-50' : 'bg-red-50'}`}>
          {activeTab === 1 && (
              <CourseManagementPage/>
          )}
          {activeTab === 2 && (
            <div>
              <CourseType/>
            </div>
          )}
          {activeTab === 3 && (
            <div>
              <div className="flex mb-4 gap-4">
                <button 
                  className={`font-[600] py-2 px-4 ${subTab === 1 ? 'border-b-2 border-[#CC1747] text-[#CC1747] ' : 'border-b border-[#98A2B3] text-[#344054] '} `}
                  onClick={() => handleSubTabClick(1)}
                >
                  Live Session
                </button>
                <button 
                  className={`font-[600] py-2 px-4 ${subTab === 2 ? 'border-b-2 border-[#CC1747] text-[#CC1747]' : 'border-b border-[#98A2B3] text-[#344054]'} `}
                  onClick={() => handleSubTabClick(2)}
                >
                  Recorded
                </button>
              </div>
              {subTab === 1 && (
                <div>
                  <h2 className="text-xl font-bold mb-2">Live Session</h2>
                  <p className="mb-2">Live session details:</p>
                  <input 
                    type="text" 
                    placeholder="Enter live session details" 
                    className="border border-gray-300 rounded p-2 w-full"
                  />
                </div>
              )}
              {subTab === 2 && (
                <div>
                  <h2 className="text-xl font-bold mb-2">Recorded</h2>
                  <p className="mb-2">Recorded session details:</p>
                  <input 
                    type="text" 
                    placeholder="Enter recorded session details" 
                    className="border border-gray-300 rounded p-2 w-full"
                  />
                </div>
              )}
            </div>
          )}
          {activeTab === 4 && (
            <div>
              <h2 className="text-xl font-bold mb-2">Publish</h2>
              <p>How are you?</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCreation;
