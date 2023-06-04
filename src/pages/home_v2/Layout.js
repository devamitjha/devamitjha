import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import "./Layout.scss";

const Layout = () => {
  return (
    <div className='home_v2'>
        {/* <header className="header">
            <Link className="logo" to="/v2">Dev<span>A</span>mit</Link> 
            <Link className="logo" to="/v2/work">Work</Link> 
            <Link className="logo" to="/v2/portfolio">Portfolio</Link> 
            <Link className="logo" to="/v2/contact">Contact</Link> 
        </header> */}
        <div className='mainnav'>
          <div className='logo_wrapper'>
            <Link to="/" className='logo'>D<span>A</span></Link>
          </div>
          <div className='menu_wrapper'>
            <span>Menu</span>
          </div>
        </div>
        <div className='hire_me'>
          <i className="fa fa-comments-o" aria-hidden="true"></i>
          <span>Hire me</span>        
        </div>
        <small className="copyright">© Devamitjha.</small>
        <div className='pagewrap'>
          <Outlet />
        </div>
    </div>
    
  )
}

export default Layout