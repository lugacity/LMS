import React from 'react';
import DashButton from '../auth/ButtonDash';
import DashSelect from '../auth/components/DashSelect';
import NoCoursesMessage from '../auth/components/NoCourses';
// import ReminderModal from '../auth/components/ReminderModal';

const EmptyPage = () => {
  return (
    <div className='bg-gray-50'>

        <div className="p-4 flex ">
          <div className="flex  my-6 flex-col md:flex-row p-6 rounded-lg shadow-md w-full max-w-5xl space-y-6 md:space-y-0 md:space-x-6">
            <div className="w-full md:w-1/3 text-justify mb-4 md:mb-0">
                <h3 className="text-xl font-semibold mb-2">Learning Reminders</h3>
                <p className="mb-4">Use push notifications or calendar events to stay on top of your learning goals.</p>
                <DashButton className="mt-2">Add a learning reminder</DashButton>
            </div>
            <div className="flex w-full md:w-2/3 justify-around">
              <div className="flex-1  border-2 border-gray-300 p-6 rounded-lg mx-2">
                <p className="text-gray-600 ">Completed Courses</p>
                <h1 className="text-6xl pt-4 ">0</h1>
              </div>
              <div className="flex-1 border-2 border-gray-300 p-6 rounded-lg mx-2">
                <p className="text-gray-600">In Progress Courses</p>
                <h1 className="text-6xl pt-4 ">0</h1>
              </div>
            </div>
          </div>
      </div>

      {/* LIVE SESSION */}
      <div className='border-2 border-white-300 my-6 bg-white p-6 rounded-lg mx-3'>
          <div className="flex flex-col md:flex-row items-center justify-between p-2 bg-white rounded-lg">
              <div className="flex-1 mb-4 md:mb-0">
                  <h3 className="text-l font-semibold text-gray-800">Live Session + Mentoring</h3>
              </div>
              <div className="flex items-center space-x-2">
                  <p className="text-gray-600">Sort by</p>
                  <DashSelect />
              </div>
        </div>

        <div>
            <NoCoursesMessage/>
        </div>


      </div>


      {/* ON DEMAND */}
      <div className='border-2 border-white-300 my-6 bg-white p-6 rounded-lg mx-3'>
          <div className="flex flex-col md:flex-row items-center justify-between p-2 bg-white rounded-lg">
              <div className="flex-1 mb-4 md:mb-0">
                  <h3 className="text-l font-semibold text-gray-800">On Demand Courses (Pre Recorded Sessions)</h3>
              </div>
              <div className="flex items-center space-x-2">
                  <p className="text-gray-600">Sort by</p>
                  <DashSelect />
              </div>
        </div>

        <div>
            <NoCoursesMessage/>
        </div>

        
      </div>
    </div>
  );
};

export default EmptyPage;
