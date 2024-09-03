import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you import the Link component from react-router-dom
import PreviewButton from '@/Components/PreviewButton'; // Importing the PreviewButton component if used
// import CourseManagementEdit from './course-management/CourseManagementEdit'; // Importing CourseManagementEdit

const CreatedCourseCard = ({
  imgSrc,
  altText,
  title,
  previewButtonText, // Assuming you'll use this later
  path = '/admin/course/course-management-edit', // Setting the default path to a string route
}) => {
  return (
    <div className="bg-[rgb(252,252,252)] rounded-lg shadow-md">
      <div className="h-[90px] w-full overflow-hidden rounded-t-lg md:h-[120px] lg:h-[190px] xl:h-[206px]">
        <img className="object-cover w-full h-full" src={imgSrc} alt={altText} />
      </div>

      <div className="rounded-b-lg px-[7px] py-[6px] text-[14px] text-[#667185] md:py-2 lg:py-[14px] lg:text-[16px]">
        <p>{title}</p>

        <Link to={path}>
          <p className='text-[12px] py-[10px] text-[#CC1747] font-medium'>
            Created 18/09/2024
          </p>
        </Link>

        {/* Optional PreviewButton usage */}
        {previewButtonText && (
          <PreviewButton className="w-full bg-[#CC1747] py-2 text-white text-[12px] lg:text-[14px]">
            {previewButtonText}
          </PreviewButton>
        )}
      </div>
    </div>
  );
};

export default CreatedCourseCard;
