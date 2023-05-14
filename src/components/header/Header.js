import React from 'react';
import './Header.scss';
import { Outlet, Link } from 'react-router-dom';

const Header = () => {
  return (
    <div id="personal_page">
        <header className="header">
            <section className="section_container">
                <div className="section_wrapper jcsb">
                    <div className="logo">Dev<span>A</span>mit</div>                
                    <div className="menu right">
                        <span></span>
                        <span></span> 
                    </div>
                </div>
            </section>
        </header>
        <Outlet />
    </div>
  )
}

export default Header