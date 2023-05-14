import React from 'react';
import './Header.scss';
import { Outlet, Link } from 'react-router-dom';

const Header = () => {
  return (
    <div id="personal_page">
        <header className="header">
            <section className="section_container">
                <div className="section_wrapper jcsb">
                    <Link className="logo" to="/">Dev<span>A</span>mit</Link>                
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