import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from '../pages/pages.module.css'; // Ensure this imports the correct CSS file with the styles
import PreviewButton from './PreviewButton'; 
import joinTeam from "../assets/images/join_team.png";

const CourseCard = ({ imgSrc, altText, title, rating, numRatings, previewButtonText }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-[#F53366]" />);
        }
        return stars;
    };

    return (
        <div className={`${styles.previewCourses1} bg-[#FCFCFC]`}>
            <div className={`${styles.courseImg}`}>
                <img className="rounded-lg" src={joinTeam} alt={altText} />
            </div>
            <div className={`${styles.courseContent} text-[#667185] pl-4`}>
                <p className="py-4">{title}</p>
                <div className={`${styles.courseNumber} flex justify-start items-center`}>
                    <p className="mr-2">{rating}</p>
                    <div className="text-lg flex items-center mx-2">
                        {renderStars()}
                    </div>
                    <p className="ml-2">{numRatings}</p>
                </div>
            </div>
            <div className={`${styles.courseNumber} text-center pt-4`}>
                <PreviewButton className="bg-[#C7D7F4]">{previewButtonText}</PreviewButton>
            </div>
        </div>
    );
};

export default CourseCard;