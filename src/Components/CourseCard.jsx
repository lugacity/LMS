import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "../pages/pages.module.css"; // Ensure this imports the correct CSS file with the styles
import PreviewButton, { EnrollPreviewButton } from "./PreviewButton";
import joinTeam from "../assets/images/join_team.png";
import { Link } from "react-router-dom";

export const renderStars = () => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <FontAwesomeIcon key={i} icon={faStar} className="text-[#ffffff]" />,
    );
  }
  return stars;
};

export const CourseCardPreview = ({ imgSrc, previewButtonText }) => {
  return (
    <div className={`${styles.previewCourses1} `}>
      <div className={`${styles.courseImg} `}>
        <img className="rounded-lg" src={imgSrc} alt="Course" />
      </div>
      <div className="pt-4 text-center">
        <EnrollPreviewButton className="bg-[#ffffff]">
          {previewButtonText}
        </EnrollPreviewButton>
      </div>
    </div>
  );
};

const CourseCard = ({
  imgSrc,
  altText,
  title,
  rating,
  numRatings,
  previewButtonText,
}) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FontAwesomeIcon key={i} icon={faStar} className="text-[#F53366]" />,
      );
    }
    return stars;
  };

  return (
    // <div className={`${styles.previewCourses1} bg-[#FCFCFC]`}>
    // 	<div className={`${styles.courseImg}`}>
    // 		<img className="rounded-lg" src={joinTeam} alt={altText} />
    // 	</div>
    // 	<div className={`${styles.courseContent} text-[#667185] overflow-hidden pl-4`}>
    // 		<p className="py-4 ">{title}</p>
    // 		<div className={`${styles.courseNumber} flex justify-start items-center`}>
    // 			<p className="mr-2">{rating}</p>
    // 			<div className="text-lg flex items-center mx-2">{renderStars()}</div>
    // 			<p className="ml-2 ">{numRatings}</p>
    // 		</div>
    // 	</div>
    // 	<div className={`${styles.courseNumber} text-center pt-4`}>
    // 		<Link to={"/preview-course"}>
    // 			<PreviewButton className="bg-[#CC1747] py-3 w-full lg:text-[14px] text-[12px]">
    // 				{previewButtonText}
    // 			</PreviewButton>
    // 		</Link>
    // 	</div>
    // </div>

    <div className="bg-[rgb(252,252,252)]">
      <div className="h-[90px] w-full overflow-hidden rounded-t-lg md:h-[120px] lg:h-[190px] xl:h-[206px]">
        <img className="object-cover" src={joinTeam} alt={altText} />
      </div>
      <div
        className={`rounded-b-lg px-[7px] py-[6px] text-[14px] text-[#667185] md:px-3 md:py-2 lg:px-4 lg:py-[14px] lg:text-[16px]`}
      >
        <p className="">{title}</p>
        <div
          className={`${styles.courseNumber} mb-2 mt-[6px] flex items-center justify-start gap-2 lg:mb-5 lg:mt-[14px]`}
        >
          <p className="">{rating}</p>
          <div className="flex items-center text-sm md:text-base lg:text-lg">
            {renderStars()}
          </div>
          <p className="">{numRatings}</p>
        </div>
        <Link to={"/preview-course"}>
          <PreviewButton className="w-full bg-[#CC1747] py-3 text-[12px] lg:text-[14px]">
            {previewButtonText}
          </PreviewButton>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
