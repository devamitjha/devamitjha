import React, { useLayoutEffect, useRef, useState } from 'react';
import './Header.scss';
import { Outlet, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import Menu from '../menu/Menu';
import AnimatedCursor from 'react-animated-cursor';

const Header = () => {
    const [open, setOpen] = useState(false);
    const openMenu = () => {
        setOpen(true); 
    };
    const closeMenu = () => {
        setOpen(false); 
    };
    const personal_page = useRef();
    let timeLine = gsap.timeline();
  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
        timeLine.from([".bannerAddtionalBg", ".hero_bg"], {
            duration: 1.2,
            height: 0,
            ease: "power3.inOut",
            stagger: {
                amount: .3
            }
        })  
        .from(["header .logo", "header .menu.right"], {
            delay: -0.8,
            y: 16,
            opacity: 0,
            duration: 0.8,
            ease: "power3.inOut",
            stagger: {
                amount: .2
            }
        })  
        .from([".hero .heading_primary", ".hero .smoothScroll", ".cta.primary", ".hero .box"], {
            delay: -0.8,
            x: -80,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: {
                amount: .3
            }
        })  
        .from([".social.right li", ".link_bottom .link"], {
            delay: -0.7,
            y: 80,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: {
                amount: .2
            }
        })
        .from(".bio.left .heading_secondary", {
            delay: -0.6,
            y: -80,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        }) ;
    }, personal_page);    
    return () => ctx.revert();
  }, []);

  return (
  
    
    <div id="personal_page" ref={personal_page}>  
    <AnimatedCursor
    innerSize={8}
    outerSize={40}
    innerScale={1}
    outerScale={2}
    outerAlpha={0}
    hasBlendMode={true}
    innerStyle={{
      backgroundColor: '#ffc107'
    }}
    outerStyle={{
      border: '2px solid #ffc107'
    }}
  />     
        <Menu active={open} onClick={closeMenu}/>
        <div className="bannerAddtionalBg"></div>
        <header className="header">
            <section className="section_container">
                <div className="section_wrapper jcsb">
                    <Link className="logo" to="/">Jha<span>A</span>mit</Link>                
                    <div className="menu right" onClick={()=>openMenu()}>
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
