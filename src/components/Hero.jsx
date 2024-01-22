import React from 'react'
import { Link } from 'react-scroll'
import {FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import men from '../assets/image/men.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
  AOS.init({
    easing: 'ease-out-quart',
    delay: 0,
    duration: 750,
  })
  return (
    <div className='  py-20'>
        <div  className=' align-element   grid md:grid-cols-2 items-center '>
           <div data-aos="fade-right" className=''>
                <h2 className='text-4xl text-slate-100 font-bold'>Hi ! I'm <span className=' text-fuchsia-700'>Amine</span></h2>
                <p className=' max-sm:max-w-60 text-slate-100 font-semibold py-2 '>I'm Junior Full Stack Web Developer based in Ottawa,Canada</p>
                <div className='flex items-center gap-x-4 mt-3'>
                    <a href='https://github.com/yacade2022' target='_blank'><FaGithubSquare className='h-8 w-8 text-slate-100 hover:text-fuchsia-700 duration-300' /></a>
                    <a href='https://linkedin.com/in/amine-alili-5842312b0' target='_blank'><FaLinkedin className='h-8 w-8 text-slate-100 hover:text-fuchsia-700 duration-300' /></a>
                    <Link spy={true} smooth={true} to='Projects' className=' text-slate-800 bg-slate-100 px-1 rounded-md hover:bg-fuchsia-700 duration-300 ' href="#projects">My Projects</Link>
                </div>
           </div>
           <div data-aos="fade-left" className='hidden md:block ml-52 ' >
            <img src={men} className=' md:h-96 rounded-xl ' />
           </div>
        </div>
        
        
    </div>
  )
}

export default Hero