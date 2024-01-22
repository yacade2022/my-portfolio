import React from 'react'

const Contact = () => {
  return (
    <div id="Contact" className="align-element py-20  ">
       <h2 data-aos="fade-down" className=" text-4xl font-bold text-center pb-10 text-fuchsia-700 ">Contact Me</h2>
       <form className=' lg:w-1/2 mx-auto'>
          <div className=' flex flex-col gap-2  lg:flex-row pb-3 '>
            <input type='text' placeholder='Enter Your Name' className='w-full border-1 shad-form p-2 rounded-md outline-none bg-slate-300 text-fuchsia-700' />
            <input type='email' placeholder='Enter Your Email' className='w-full border-1 shad-form p-2 rounded-md outline-none bg-slate-300 text-fuchsia-700' />
          </div>
          
          <textarea rows='10'  placeholder='Write Your Message' className=' w-full border-1 shad-form rounded-md p-2 mt-2  outline-none bg-slate-300 text-fuchsia-700 '></textarea>
          <button type='submit' className=' w-full uppercase text-slate-300 rounded-md p-2 bg-fuchsia-700 hover:bg-slate-900 hover:text-fuchsia-700 border-2 border-fuchsia-700 duration-300'>submit</button>
        </form>
    </div>
  )
}

export default Contact