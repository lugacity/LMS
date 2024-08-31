import React from 'react';
// import DashButton from '../../auth/ButtonDash';
import NoCoursesImg from '../../assets/images/no_courses.png'; 
import { Link } from 'react-router-dom';
import DashButton from '../auth/ButtonDash';


 const CourseManagement = () => {

    return (
        <div className="flex items-center justify-center  p-4">
            <div className="flex flex-col items-center justify-center p-6 :w-full rounded-lg">
                <img src={NoCoursesImg} alt="No Courses" className="w-32 h-32 mb-4 rounded-full" />
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">No Courses Available</h3>
                <p className="text-center text-sm text-gray-600 mb-4">
                    You haven’t created any courses yet. Start building your first  
                    <span className="lg:block"> course to engage your students and share your knowledge.</span>
                </p>
                <Link to="/admin/course-creation">
                <DashButton className="mt-2 bg-[#CC1747] text-white hover:bg-[#b30e3b]">
                    Create Course
                </DashButton>
                </Link>
            </div>
        </div>

      );
}

export default CourseManagement;