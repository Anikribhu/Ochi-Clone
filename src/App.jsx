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

function App() {


  const locoScroll = new LocomotiveScroll();


  return (
    <div className='overflow-x-scroll no-scrollbar w-full min-h-screen bg-zinc-900  text-white'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      {/* <Cards/> */}
      <Footer/>
    </div>
  )
}

export default App