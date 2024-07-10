
import React, { useState } from 'react';
import styles from './Slider.module.css';
import img1 from '../../assets/images/big-team.png';
import img2 from '../../assets/images/slider-img2.png'; // Update with your actual image paths
import img3 from '../../assets/images/slider-img3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';





const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    {
      img: img1,
      title: (
        <> Become a <br /> Data Analyst </>
      ),
      content: 'Content for image 1 goes here.',
    },
    {
      img: img2,
      title: 'Become a Scrum Master',
      content: 'Content for image 2 goes here.',
    },
    {
      img: img3,
      title: 'Become a Product Owner',
      content: 'Content for image 3 goes here.',
    },
  ];

  const changeSlide = (n) => {
    let newIndex = slideIndex + n;
    if (newIndex < 0) newIndex = 0;
    if (newIndex >= slides.length) newIndex = slides.length - 1;
    setSlideIndex(newIndex);
  };

  return (
    <div className={styles.slideshowContainer}>
      {slides.map((slide, index) => (
        <div className={styles.slide} key={index} style={{ display: index === slideIndex ? 'flex' : 'none' }}>
          
          <div className={styles.imageContainer}>
            <img src={slide.img} alt={`Image ${index + 1}`} />
            <button className={`${styles.prev} ${slideIndex === 0 ? styles.disabled : ''}`} onClick={() => changeSlide(-1)}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <button className={`${styles.next} ${slideIndex === slides.length - 1 ? styles.disabled : ''}`} onClick={() => changeSlide(1)}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>

          <div className={styles.contentContainer}>
            <h2 className='font-bold'>{slide.title}</h2>
            <p>{slide.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;