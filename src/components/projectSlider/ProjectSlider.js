import React from 'react';
import './ProjectSlider.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const ProjectSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <Link to="">
        <img src='images/chair.jpg'/>
      </Link>
      <Link to="">
        <img src='images/filter_animation.jpg'/>
      </Link>
      <Link to="">
        <img src='images/motion.jpg'/>
      </Link>
      <Link to="">
        <img src='images/horizontal.jpg'/>
      </Link>
    </Slider>
  )
}

export default ProjectSlider