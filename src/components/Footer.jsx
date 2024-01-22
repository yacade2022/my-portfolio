import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="  text-white pt-8">
      <div className='align-element'>
        <div className=' grid text-center lg:grid-cols-3 gap-4'>
            <div>
              <h2 className=' text-2xl mb-2  font-bold text-slate-100'>AmineWeb<span className=' text-fuchsia-700'>Dev</span></h2>
               <p>Building comprehensive solutions from front-end to back-end excellence</p>
            </div>
            <div>
                   <h2 className=' text-2xl mb-2  font-bold text-slate-100'>Contact</h2>
                   <p>Email: amyac824@gmail.com</p>
                   <p>Phone: +213 549032254</p>
            </div>
            <div>
               <h2 className=' text-2xl mb-2 font-bold text-slate-100'>Services</h2>
                 <p>Web Design</p>
                 <p>Web Development</p>
                 <p>SEO</p>

            </div>

        </div>
        

      </div>

      <div className="mt-8 text-slate-300 font-semibold text-center bg-fuchsia-700 p-6">
        <p>&copy; 2024 All rights reserved. | Designed and developed by Amine</p>
      </div>
    </footer>
  );
}

export default Footer;
