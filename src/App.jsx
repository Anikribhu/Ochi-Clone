/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import Featured2 from './components/Featured2';

function App() {


  const locoScroll = new LocomotiveScroll();


  return (
    <div className='overflow-x-scroll w-full no-scrollbar max-sm:overflow-x-hidden min-h-screen bg-zinc-900  text-white'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <Featured2/>
      {/* <Cards/> */}
      <Footer/>
    </div>
  )
}

export default App