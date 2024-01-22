import React from 'react'
import {FaHtml5} from 'react-icons/fa'
import { TbDeviceImacCode } from "react-icons/tb";
import { IoIosConstruct } from "react-icons/io";



const Skills = () => {
  return (
    <div id="Skills" className="align-element py-20  ">
      <h2 data-aos="fade-down" className=" text-4xl font-bold text-center pb-10 text-fuchsia-700 ">My Skills</h2>
      <div className=' py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        <div data-aos="fade-down" className=' bg-slate-100 rounded-md p-2 text-center border-1 shad   '>
              <div className='  text-fuchsia-700'>
                 <FaHtml5 className='h-16 w-16 inline-block text-center ' />
                 <h4 className='mt-6 text-2xl font-bold'>Front End</h4>
              </div>
              <ul className='mt-2  text-slate-800  '>
                <li>Html</li>
                <li>Css</li>
                <li>Javascript</li>
                <li>React js</li>
                <li>Redux-Toolkit</li>
                <li>Styled Components</li>
                <li>TailwindCss</li>                
              </ul>
        </div>
        <div data-aos="fade-up" className=' bg-slate-100 rounded-md p-2 text-center border-1 shad   '>
              <div className=' text-fuchsia-700  '>
                 <TbDeviceImacCode className='h-16 w-16 inline-block text-center ' />
                 <h4 className='mt-6 text-2xl font-bold'>Back End</h4>
              </div>
              <ul className='mt-2  text-slate-800 text-center'>
                <li>NodeJs</li>
                <li>ExpressJs</li>
                <li>MongoDb</li>
                <li>Restful APIs</li>               
              </ul>
        </div>
        <div data-aos="fade-down" className='bg-slate-100 rounded-md p-2 border-1 shad '>
              <div className=' text-center  text-fuchsia-700 '>
                 <IoIosConstruct className='h-16 w-16 inline-block text-center' />
                 <h4 className='mt-6 text-2xl font-bold '>Other Tech</h4>
              </div>
              <ul className='mt-2  text-slate-800 text-center'>
                <li>Git</li>
                <li>Github</li>
                <li>Vs Code</li>
                <li>Render</li>
                              
              </ul>
        </div>

      </div>
        
     
    </div>

  )
}

export default Skills