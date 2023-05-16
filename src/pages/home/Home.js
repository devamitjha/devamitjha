import React from 'react';
import Hero from '../../components/hero/Hero';
import About from '../../components/about/About';
import Project from '../../components/project/Project';
import Skill from '../../components/skill/Skill';
import Career from '../../components/career/Career';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <>    
    <Hero/>
    <About/>
    <Project/>
    <Skill/>
    <Career/>
    <Footer/>  
    </>
  )
}

export default Home