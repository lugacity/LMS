import React, { useState } from 'react';
import DashButton from '../auth/ButtonDash';
import DashSelect from '../auth/components/DashSelect';
// import NoCoursesMessage from '../auth/components/NoCourses';
import Modal from '../auth/components/Modal';
import BorderCard from '@/Components/BorderCard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalContent from '../lms-pages/ReminderModalContent';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import joinTeam from "../../assets/images/join_team.png";
import styles from "../pages.module.css";
import CourseCard, {DashboardDiscover} from "../../Components/CourseCard";

// import ReminderModal from '../auth/components/ReminderModal';

const Dashboard_Discover = () => {

  const [modal, setShowModal] = useState(false);


  return (
    <div >

        <div className=" flex ">
          <div className="flex flex-col md:flex-row  rounded-lg w-full max-w-5xl space-y-6 md:space-y-0 md:space-x-6">
            <div className="w-full md:w-1/3  text-justify mb-4 md:mb-0">
                <h3 className="text-xl font-semibold mb-2">Learning Reminders</h3>
                <p className="mb-4 text-sm">Use push notifications or calendar events to stay on top of your learning goals.</p>
                <DashButton onClick={()=>setShowModal(prev=>!prev)} className="mt-2 text-sm">Add a learning reminder</DashButton>
            </div>
            <div className="flex  w-full md:w-3/5 justify-around">
              <div className="flex-1 border-2 border-gray-300 bg-white p-4 rounded-lg mx-2">
                <p className="text-gray-600 ">Completed Courses</p>
                <h1 className="text-6xl pt-4 ">18</h1>
              </div>
              <div className="flex-1 border-2 bg-white border-gray-300 p-4 rounded-lg mx-2">
                <p className="text-gray-600">In Progress Courses</p>
                <h1 className="text-6xl pt-4 ">02</h1>
              </div>
            </div>
          </div>
      </div>

      {/* LIVE SESSION */}
      <div className='border-2 border-white-300 my-6 bg-white p-6 rounded-lg'>
          <div className="flex flex-col md:flex-row items-center justify-between p-2 bg-white rounded-lg">
              <div className="flex-1 mb-4 md:mb-0">
                  <h3 className="text-l font-semibold text-gray-800">Live Session + Mentoring</h3>
              </div>
              <div className="flex items-center space-x-2">
                  <p className="text-gray-600">Filter by</p>
                  <DashSelect />
              </div>
        </div>

        <div>
            {/* Preview this Course */}
            <div className={`${styles.previewCoursesFlex} overflow-visible`}>
              <DashboardDiscover
                imgSrc={joinTeam}
                altText="joinTeam"
                title={
                  <>
                    {" "}
                    Project Consultant <br /> Training Programme (Bundle)
                  </>
                }
                rating="4.3"
                numRatings="45,345"
                courseProgress="100% completed"
                leaveRating="Leaving a rating"
              />

              <DashboardDiscover
                imgSrc={joinTeam}
                altText="joinTeam"
                title={
                  <>
                    {" "}
                    Project Consultant <br /> Training Programme (Bundle)
                  </>
                }
                rating="4.3"
                numRatings="45,345"
                courseProgress="20% completed"
                continueLearning="Continue"
              />

              <DashboardDiscover
                imgSrc={joinTeam}
                altText="joinTeam"
                title={
                  <>
                    {" "}
                    Project Consultant <br /> Training Programme (Bundle)
                  </>
                }
                rating="4.3"
                numRatings="45,345"
                courseProgress="100% completed"
                leaveRating="Leaving a rating"
              />

              <DashboardDiscover
                imgSrc={joinTeam}
                altText="joinTeam"
                title={
                  <>
                    {" "}
                    Project Consultant <br /> Training Programme (Bundle)
                  </>
                }
                rating="4.3"
                numRatings="45,345"
                courseProgress="20% completed"
                leaveRating="Leaving a rating"
              />

              <DashboardDiscover
                imgSrc={joinTeam}
                altText="joinTeam"
                title={
                  <>
                    {" "}
                    Project Consultant <br /> Training Programme (Bundle)
                  </>
                }
                rating="4.3"
                numRatings="45,345"
                courseProgress="20% completed"
                leaveRating="Leaving a rating"
              />

              <DashboardDiscover
                imgSrc={joinTeam}
                altText="joinTeam"
                title={
                  <>
                    {" "}
                    Project Consultant <br /> Training Programme (Bundle)
                  </>
                }
                rating="4.3"
                numRatings="45,345"
                courseProgress="20% completed"
                leaveRating="Leaving a rating"
              />

              <DashboardDiscover
                imgSrc={joinTeam}
                altText="joinTeam"
                title={
                  <>
                    {" "}
                    Project Consultant <br /> Training Programme (Bundle)
                  </>
                }
                rating="4.3"
                numRatings="45,345"
                courseProgress="20% completed"
                leaveRating="Leaving a rating"
              />

              <DashboardDiscover
                imgSrc={joinTeam}
                altText="joinTeam"
                title={
                  <>
                    {" "}
                    Project Consultant <br /> Training Programme (Bundle)
                  </>
                }
                rating="4.3"
                numRatings="45,345"
                courseProgress="20% completed"
                leaveRating="Leaving a rating"
              />

            </div>

        </div>


      </div>


      {/* ON DEMAND */}
      <div className='border-2 border-white-300 my-6 bg-white p-6 rounded-lg'>
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
            {/* Preview this Course */}
            <div className={`${styles.previewCoursesFlex} overflow-visible`}>
              <DashboardDiscover
                imgSrc={joinTeam}
                altText="joinTeam"
                title={
                  <>
                    {" "}
                    Project Consultant <br /> Training Programme (Bundle)
                  </>
                }
                rating="4.3"
                numRatings="45,345"
                courseProgress="100% completed"
                leaveRating="Leaving a rating"
              />

              <DashboardDiscover
                imgSrc={joinTeam}
                altText="joinTeam"
                title={
                  <>
                    {" "}
                    Project Consultant <br /> Training Programme (Bundle)
                  </>
                }
                rating="4.3"
                numRatings="45,345"
                courseProgress="20% completed"
                continueLearning="Continue"
              />

              <DashboardDiscover
                imgSrc={joinTeam}
                altText="joinTeam"
                title={
                  <>
                    {" "}
                    Project Consultant <br /> Training Programme (Bundle)
                  </>
                }
                rating="4.3"
                numRatings="45,345"
                courseProgress="100% completed"
                leaveRating="Leaving a rating"
              />

              <DashboardDiscover
                imgSrc={joinTeam}
                altText="joinTeam"
                title={
                  <>
                    {" "}
                    Project Consultant <br /> Training Programme (Bundle)
                  </>
                }
                rating="4.3"
                numRatings="45,345"
                courseProgress="20% completed"
                leaveRating="Leaving a rating"
              />

              <DashboardDiscover
                imgSrc={joinTeam}
                altText="joinTeam"
                title={
                  <>
                    {" "}
                    Project Consultant <br /> Training Programme (Bundle)
                  </>
                }
                rating="4.3"
                numRatings="45,345"
                courseProgress="20% completed"
                leaveRating="Leaving a rating"
              />

              <DashboardDiscover
                imgSrc={joinTeam}
                altText="joinTeam"
                title={
                  <>
                    {" "}
                    Project Consultant <br /> Training Programme (Bundle)
                  </>
                }
                rating="4.3"
                numRatings="45,345"
                courseProgress="20% completed"
                leaveRating="Leaving a rating"
              />

              <DashboardDiscover
                imgSrc={joinTeam}
                altText="joinTeam"
                title={
                  <>
                    {" "}
                    Project Consultant <br /> Training Programme (Bundle)
                  </>
                }
                rating="4.3"
                numRatings="45,345"
                courseProgress="20% completed"
                leaveRating="Leaving a rating"
              />

              <DashboardDiscover
                imgSrc={joinTeam}
                altText="joinTeam"
                title={
                  <>
                    {" "}
                    Project Consultant <br /> Training Programme (Bundle)
                  </>
                }
                rating="4.3"
                numRatings="45,345"
                courseProgress="20% completed"
                leaveRating="Leaving a rating"
              />

            </div>

        </div>

        
      </div>

    { modal && 
      <Modal>
        <BorderCard className='bg-white'>
          <button onClick={()=>setShowModal(prev=>!prev)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          
          
          <div>
            {modal && <ModalContent setShowModal={setShowModal} />}
          </div>
        </BorderCard>
    </Modal>
    }

    </div>
  );
};

export default Dashboard_Discover;