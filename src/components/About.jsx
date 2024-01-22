import React from "react";



import picture from "../assets/image/picture.jpg";

const About = () => {
  return (
   
<div id="About" className=" py-20   ">
  <h2 data-aos="fade-down" className=" text-4xl text-fuchsia-700 font-bold text-center pb-10 ">About Me</h2>
    <div className="align-element grid md:grid-cols-2 items-center gap-16">
       <img data-aos="fade-right" src={picture} className="  h-64 w-2/3 rounded-lg border-1 shad  " />
       <p data-aos="fade-left" className="bg-white mt-8 leading-loose p-4 rounded-md ">I'm a passionate Junior Full Stack Developer with a strong foundation in both front-end and back-end technologies. I am dedicated to creating efficient, beautiful, and user-friendly web applications. I am quick learner and team worker,and I am confident in my ability to be a valuable asset to any web development team</p>
    </div>
      
      
    </div>

    
  );
};

export default About;
