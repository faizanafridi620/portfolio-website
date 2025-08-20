import React from 'react'
import { motion } from 'framer-motion'
import Profile from '../assets/1000011651-removebg-preview-photoaidcom-cropped.jpg'
import CV from '../assets/resume/Md faizan afridi (2).pdf'


function About() {


  return (
    <section>
    <div id='about' className='mx-auto max-w-6xl w-full min-h-screen p-4 md:p-8 lg:p-28 flex items-center justify-center'>
      <motion.div
      initial={{opacity:0, y:50}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true}}
      transition={{duration:0.8, delay:0.2}} 
      className="flex flex-col-reverse items-center justify-center md:flex-row gap-8 md:gap-16 lg:gap-24">
      <motion.div
      initial={{opacity:0, x:-50}}
      whileInView={{opacity:1, x:0}}
      viewport={{once:true}}
      transition={{duration:0.8, delay:0.4}}
      className='flex flex-col gap-3 items-center md:items-start justify-center'> 
        <h1 className='text-5xl md:text-6xl lg:text-7xl font-semibold text-center md:text-left bg-gradient-to-r from-indigo-950 via-fuchsia-600 to-violet-800 text-transparent bg-clip-text'>Md Faizan Afridi</h1>
        <h3 className='text-xl md:text-2xl lg:text-3xl font-light text-center md:text-left bg-gradient-to-r from-violet-600 via-blue-600 to-purple-600 text-transparent bg-clip-text'>Front-End Developer</h3>
        <p className='text-lg text-slate-800 text-center md:text-left text-pretty'>Hi, I'm Md Faizan Afridi, a Front-End Developer. I have a passion for web development and love to create responsive and interactive websites. I am proficient in HTML, CSS, JavaScript, ReactJS, and Tailwind CSS. I am currently looking for opportunities to work as a Front-End Developer.</p>
        <div className='flex gap-4'>
          <a href="mailto:faizanafridi676@gmail.com"><button className='flex items-center justify-center p-1.5 px-2 bg-amber-300 rounded-md cursor-pointer hover:shadow-2xl hover:shadow-amber-700 transition-text duration-300'>Contact Me</button></a>
          <a href={CV} download><button className='flex items-center justify-center p-1.5 px-2 text-white bg-indigo-700 rounded-md cursor-pointer hover:shadow-2xl hover:shadow-blue-700 transition-text duration-300'>Download CV</button></a>
          </div>
      </motion.div>
      
        <img
        className="w-[100px] md:w-[290px] rounded-full hover:shadow-2xl hover:shadow-blue-600 transition-all duration-500 hover:scale-105 object-cover"
         src={Profile} alt="Image" />
      </motion.div>
    </div>
    </section>
  )
}

export default About