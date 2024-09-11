import DashButton from '@/pages/auth/ButtonDash'
import React from 'react'

const CourseCohortsPreview = () => {
  return (
    <div>
        {/* Live Session + Mentoring */}
        <div className="grid grid-cols-12 gap-10 mb-4 md:mb-0 border border-gray-300 rounded  mt-5 p-10">
                <div className='col-span-5'>
                    <h3 className="text-[20px] font-[500] text-[#344054] lg:text-[24px]">
                        Live Session + Mentoring 
                    </h3>
                    <p>Add Course Cohort</p>

                    <DashButton className="rounded px-4 py-2 text-white">
                        Add Cohort
                    </DashButton>
                </div>

                <div className="col-span-7 space-y-4">
                    
                    <p>This is where i stopped Kareem</p>
                       
                </div>
            </div>
    </div>
  )
}

export default CourseCohortsPreview