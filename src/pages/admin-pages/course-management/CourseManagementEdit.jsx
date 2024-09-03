import React, { useState } from 'react';
import StudentManagement from '../StudentManagement';




 const CourseManagementEdit = () => {
    const [activeSection, setActiveSection] = useState('courseInfo');


  return (
    <div>
        <div className='flex items-center justify-between'>
            <div className='2xl:text-[24px] lg:text-[18px] font-[500] text-[#344054]'>
                <p>Project Consultant Training Programme (Bundle)</p>
            </div>

        <div>
            <button onClick={()=> setActiveSection('courseInfo')}
                className={`px-4 py-2 text-sm font-medium ${activeSection === 'courseInfo' ? 'border-b-2 border-[#CC1747] text-[#CC1747]' : 'text-[#344054] hover:text-gray-800'}`}>
                    Course Information
            </button>
            <button onClick={()=> setActiveSection('courseSection')} 
                className={`px-4 py-2 text-sm font-medium ${activeSection === 'courseSection' ? 'border-b-2 border-[#CC1747] text-[#CC1747]' : 'text-[#344054] hover:text-gray-800'}`}>
                    Course Sections
            </button>
            <button onClick={()=> setActiveSection('studentManagement')} 
                className={`px-4 py-2 text-sm font-medium ${activeSection === 'studentManagement' ? 'border-b-2 border-[#CC1747] text-[#CC1747]' : 'text-[#344054] hover:text-gray-800'}`}>
                    Student Management
            </button>
        </div>
            
    </div>

        <div>
            {activeSection === 'courseInfo' && 
                <div>
                    hello world
                </div>
            }

            {activeSection === 'courseSection' && 
                <div>
                    hello world here
                </div>
            }

            {activeSection === 'studentManagement' && 
                <div>
                   <StudentManagement />
                </div>
            }
        </div>

    </div>
  )
}

export default CourseManagementEdit;
