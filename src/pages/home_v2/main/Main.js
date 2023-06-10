import React from 'react';
import'./Main.scss';
import TextAnimation from '../../../components/textAnimation/TextAnimation';
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
            <span>name is<strong>Amit</strong></span>
          </h1>
          <p>I’m an <span>independent creative <TextAnimation/></span> from<br/>Mumbai, India</p>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Main