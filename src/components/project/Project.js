import React, {useRef } from 'react';
import './Project.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const Project = () => { 
    const sliderRef = useRef(null);
    const next = () => {
        sliderRef.current.slickNext();
    };
    const previous = () => {
        sliderRef.current.slickPrev();
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <section className="project">
        <div className="bg"></div>
        <div className="relatve_container section_wrapper">
            <div className="section_left">
                <div className="section_title">
                    <h3>MY PROJECT</h3>
                </div>
                <div className="section_info">
                    <h2>Showcasing a Collection of Projects</h2>
                    <p>Explore a Diverse Range of Engaging Web Projects, Seamlessly Blending Design and Functionality  to Deliver Engaging User Experiences.</p>
                </div>
                <div className='custome_nav'>
                    <div className='slide slide_prev' onClick={previous}>
                        <i className="fa fa-angle-left" aria-hidden="true"></i>
                    </div>
                    <div className='slide slide_next' onClick={next}>
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div className="section_right">
                <div className="section_info">
                <Slider ref={sliderRef} {...settings}>
                    <Link to="https://www.youtube.com/watch?v=46Ypo0wU-U8">
                        <img src='images/chair.jpg' alt="furniture landing page"/>
                    </Link>
                    <Link to="https://www.youtube.com/watch?v=7CwnNr9-41g">
                        <img src='images/filter_animation.jpg' alt="filter animation"/>
                    </Link>
                    <Link to="https://www.youtube.com/watch?v=5vM44ejNKR0">
                        <img src='images/motion.jpg' alt="motion animation"/>
                    </Link>
                    <Link to="https://www.youtube.com/watch?v=q98Z4QxTxJM">
                        <img src='images/horizontal.jpg' alt="horizontal slider"/>
                    </Link>
                </Slider>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Project