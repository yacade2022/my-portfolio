import { useState } from 'react'
import { links } from '../data'
import {Link} from 'react-scroll'
import {FaBars,FaTimes} from 'react-icons/fa'

const Navbar = () => {

  const[showNav,setShowNav] = useState(false)
  return (
    <div className='align-element py-4  flex flex-col sm:flex-row sm:items-center sm:justify-between'>
        <div className='flex justify-between items-center'>
           <h2 className=' text-2xl font-bold text-slate-100'>AmineWeb<span className=' text-fuchsia-700'>Dev</span></h2>
           <FaBars className=' sm:hidden text-white cursor-pointer' onClick={()=>setShowNav(!showNav)} />
        </div>
        <div className=' hidden sm:block   flex-row  gap-x-2   ' > 

          {
            links.map((link)=>{
              const{id,href,text}= link
              return <Link spy={true} smooth={true} to={text} className='mr-2  font-semibold text-slate-100 hover:text-fuchsia-700 duration-300' key={id} href={href}>
                 {text}
              </Link>
            })
          }
          
        </div >
      {showNav && <div className=' sm:hidden mt-2  flex flex-col  gap-x-2   ' > 
      
          {
            links.map((link)=>{
              const{id,href,text}= link
              return <Link spy={true} smooth={true} to={text} className=' mt-1 p-1 bg-slate-800 rounded-md text-center  font-semibold text-slate-100 hover:text-fuchsia-700 duration-300' key={id} href={href}>
                {text}
              </Link>
            })
          }

        </div>}
    </div>
  )
}

export default Navbar