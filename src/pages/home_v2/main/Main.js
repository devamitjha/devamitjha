import React from 'react';
import'./Main.scss';
// import Work from '../work/Work';
// import About from '../about/About';
// import Portfolio from '../portfolio/Portfolio';
// import Contact from '../contact/Contact';

const Main = () => {
  return (
   <div className='homepage_v2'>
    <div className='home_image'>
      <div className='avatar_bg'>
        <div className='bar_wrapper'>
          <div className='bar'style={{ backgroundImage: "url(/images/bar.svg)" }}></div>
        </div>
        <div className='avatar'>
          <img src='images/avatar.png' alt="devamitjha"/>
          <div className='abs_img'>
            <img src='images/react.png' alt="devamitjha"/>
          </div>
        </div>
      </div>
    </div>
    <div className='section'>
      <div className='content_wrapper'>
        <div className='title_section'>
          <h1>
            <span>Hi, my</span>
            <span>name is <strong>Amit</strong></span>
          </h1>
          <p>I’m an <span>independent creative developer</span> from<br/>Mumbai, India</p>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Main