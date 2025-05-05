// import React from 'react'
// import employee from '../assets/image/employees-management.jpg'
// import collection from '../assets/image/collection-photo.jpg'
// import dashboard from '../assets/image/dashboard.jpg'
// import weather from '../assets/image/weather-app.jpg'
// import order from '../assets/image/order.jpg'
// import shopping from '../assets/image/shopping-cart.jpg'

// const Projects = () => {
//   return (
//     <div id="Projects" className="align-element py-20  ">
//          <h2 data-aos="fade-down" className=" text-4xl font-bold text-center pb-10 text-fuchsia-700 ">My Projects</h2>

//         <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-10'>
//             <div data-aos="fade-right" className=' bg-slate-100 rounded-lg border-1 shad'>
//                 <img className=' h-40 w-full rounded-t-lg' src={employee}  />
//                 <div>
//                     <h2 className=' mx-auto px-2 capitalize font-bold text-xl'>employees management</h2>
//                     <p className='mx-auto px-2 mt-4 text-slate-700 leading-loose  '>Tech used : Html, Styled-Components, Javascript, React, NodeJs, Express, MongoDb, Render</p>
//                     <div className='mx-auto px-2 py-3'>
//                         <a className=' text-slate-100 bg-fuchsia-700 p-1 mr-4 rounded-md' href='https://mern-employee-management-d9c5.onrender.com' target="_blank">See Live</a>
//                         <a className=' text-slate-100  bg-fuchsia-700 p-1 rounded-md' href='https://github.com/yacade2022/mern-employee-management' target="_blank">Source Code</a>
//                     </div>
//                 </div>
//             </div>
//             <div data-aos="fade-down" className=' bg-slate-100 rounded-lg border-1 shad'>
//                 <img className=' h-40 w-full rounded-t-lg' src={collection}  />
//                 <div>
//                     <h2 className=' mx-auto px-2 capitalize font-bold text-xl'>collection photo</h2>
//                     <p className='mx-auto px-2 mt-4 text-slate-700 leading-loose  '>Tech used : Html, Styled-Components, Javascript, React, NodeJs, Express, MongoDb, Render</p>
//                     <div className='mx-auto px-2 py-3'>
//                         <a className=' text-slate-100 bg-fuchsia-700 p-1 mr-4 rounded-md' href='https://collection-photo.onrender.com' target="_blank">See Live</a>
//                         <a className=' text-slate-100 bg-fuchsia-700 p-1 rounded-md' href='https://github.com/yacade2022/Collection-Photo' target="_blank">Source Code</a>
//                     </div>
//                 </div>
//             </div>
//             <div data-aos="fade-left" className=' bg-slate-100 rounded-lg border-1 shad'>
//                 <img className=' h-40 w-full rounded-t-lg' src={dashboard}  />
//                 <div>
//                     <h2 className=' mx-auto px-2 capitalize font-bold text-xl'>dashboard</h2>
//                     <p className='mx-auto px-2 mt-4 text-slate-700 leading-loose '>Tech used : Html, Styled-Components, Javascript, React, Netlify</p>
//                     <div className='mx-auto px-2 py-3'>
//                         <a className=' text-slate-100 bg-fuchsia-700 p-1 mr-4 rounded-md' href='https://dashboard-9.netlify.app' target="_blank">See Live</a>
//                         <a className=' text-slate-100 bg-fuchsia-700 p-1 rounded-md' href='https://github.com/yacade2022/dashboard-react' target="_blank">Source Code</a>
//                     </div>
//                 </div>
//             </div>
//             <div data-aos="fade-right" className=' bg-slate-100 rounded-lg border-1 shad'>
//                 <img className=' h-40 w-full rounded-t-lg' src={weather}  />
//                 <div>
//                     <h2 className=' mx-auto px-2 capitalize font-bold text-xl'>weather app</h2>
//                     <p className='mx-auto px-2 mt-4 text-slate-700 leading-loose  '>Tech used : Html, Styled-Components, Javascript, React, Netlify</p>
//                     <div className='mx-auto px-2 py-3'>
//                         <a className=' text-slate-100 bg-fuchsia-700 p-1 mr-4 rounded-md' href='https://weather-app-7b.netlify.app' target="_blank">See Live</a>
//                         <a className=' text-slate-100 bg-fuchsia-700 p-1 rounded-md' href='https://github.com/yacade2022/react-weather-app' target="_blank">Source Code</a>
//                     </div>
//                 </div>
//             </div>
//             <div data-aos="fade-up" className=' bg-slate-100 rounded-lg border-1 shad'>
//                 <img className=' h-40 w-full rounded-t-lg' src={order}  />
//                 <div>
//                     <h2 className=' mx-auto px-2 capitalize font-bold text-xl'>order app</h2>
//                     <p className='mx-auto px-2 mt-4 text-slate-700 leading-loose '>Tech used : Html, Styled-Components, Javascript, React, Netlify</p>
//                     <div className='mx-auto px-2 py-3'>
//                         <a className=' text-slate-100 bg-fuchsia-700 p-1 mr-4 rounded-md' href='https://order-meal-c.netlify.app' target="_blank">See Live</a>
//                         <a className=' text-slate-100 bg-fuchsia-700 p-1 rounded-md' href='https://github.com/yacade2022/order-react-js' target="_blank">Source Code</a>
//                     </div>
//                 </div>
//             </div>
//             <div data-aos="fade-left" className=' bg-slate-100 rounded-lg border-1 shad'>
//                 <img className=' h-40 w-full rounded-t-lg' src={shopping}  />
//                 <div>
//                     <h2 className=' mx-auto px-2 capitalize font-bold text-xl'>shopping cart</h2>
//                     <p className='mx-auto px-2 mt-4 text-slate-700 leading-loose'>Tech used : Html, Css, Javascript,</p><p className='mx-auto px-2 text-slate-700 leading-loose font-semibold'>Netlify</p>
//                     <div className='mx-auto px-2 py-3'>
//                         <a className=' text-slate-100 bg-fuchsia-700 p-1 mr-4 rounded-md' href='https://shopping-cart-f.netlify.app' target="_blank">See Live</a>
//                         <a className=' text-slate-100 bg-fuchsia-700 p-1 rounded-md' href='https://github.com/yacade2022/Shopping-Cart' target="_blank">Source Code</a>
//                     </div>
//                 </div>
//             </div> 

//         </div>
//     </div>
//   )
// }

// export default Projects
import React from 'react'
import employee from '../assets/image/employees-management.jpg'
import collection from '../assets/image/collection-photo.jpg'
import dashboard from '../assets/image/dashboard.jpg'
import weather from '../assets/image/weather-app.jpg'
import order from '../assets/image/order.jpg'
import shopping from '../assets/image/shopping-cart.jpg'

const Projects = () => {
  return (
    <div id="Projects" className="align-element py-20  ">
         <h2 data-aos="fade-down" className=" text-4xl font-bold text-center pb-10 text-fuchsia-700 ">My Projects</h2>

        <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-10'>
            <div data-aos="fade-right" className=' bg-slate-100 rounded-lg border-1 shad'>
                <div className="relative">
                    <img className='h-40 w-full rounded-t-lg' src={employee} />
                    
                </div>
                <div>
                    <h2 className=' mx-auto px-2 capitalize font-bold text-xl'>employees management</h2>
                    <p className='mx-auto px-2 mt-4 text-slate-700 leading-loose  '>Tech used : Html, Styled-Components, Javascript, React, NodeJs, Express, MongoDb, Render</p>
                    <div className='mx-auto px-2 py-3'>
                        <a className=' text-slate-100 bg-fuchsia-700 p-1 mr-4 rounded-md' href='https://mern-employee-management.onrender.com' target="_blank">See Live</a>
                        <a className=' text-slate-100  bg-fuchsia-700 p-1 rounded-md' href='https://github.com/yacade2022/mern-employee-management' target="_blank">Source Code</a>
                    </div>
                </div>
            </div>
            <div data-aos="fade-down" className=' bg-slate-100 rounded-lg border-1 shad'>
                <div className="relative">
                    <img className='h-40 w-full rounded-t-lg' src={collection} />
                </div>
                <div>
                    <h2 className=' mx-auto px-2 capitalize font-bold text-xl'>collection photo</h2>
                    <p className='mx-auto px-2 mt-4 text-slate-700 leading-loose  '>Tech used : Html, Styled-Components, Javascript, React, NodeJs, Express, MongoDb, Render</p>
                    <div className='mx-auto px-2 py-3'>
                        <a className=' text-slate-100 bg-fuchsia-700 p-1 mr-4 rounded-md' href='https://collection-photo-1.onrender.com' target="_blank">See Live</a>
                        <a className=' text-slate-100 bg-fuchsia-700 p-1 rounded-md' href='https://github.com/yacade2022/Collection-Photo' target="_blank">Source Code</a>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left" className=' bg-slate-100 rounded-lg border-1 shad'>
                <img className=' h-40 w-full rounded-t-lg' src={dashboard}  />
                <div>
                    <h2 className=' mx-auto px-2 capitalize font-bold text-xl'>dashboard</h2>
                    <p className='mx-auto px-2 mt-4 text-slate-700 leading-loose '>Tech used : Html, Styled-Components, Javascript, React, Netlify</p>
                    <div className='mx-auto px-2 py-3'>
                        <a className=' text-slate-100 bg-fuchsia-700 p-1 mr-4 rounded-md' href='https://dashboard-9.netlify.app' target="_blank">See Live</a>
                        <a className=' text-slate-100 bg-fuchsia-700 p-1 rounded-md' href='https://github.com/yacade2022/dashboard-react' target="_blank">Source Code</a>
                    </div>
                </div>
            </div>
            <div data-aos="fade-right" className=' bg-slate-100 rounded-lg border-1 shad'>
                <img className=' h-40 w-full rounded-t-lg' src={weather}  />
                <div>
                    <h2 className=' mx-auto px-2 capitalize font-bold text-xl'>weather app</h2>
                    <p className='mx-auto px-2 mt-4 text-slate-700 leading-loose  '>Tech used : Html, Styled-Components, Javascript, React, Netlify</p>
                    <div className='mx-auto px-2 py-3'>
                        <a className=' text-slate-100 bg-fuchsia-700 p-1 mr-4 rounded-md' href='https://weather-app-7b.netlify.app' target="_blank">See Live</a>
                        <a className=' text-slate-100 bg-fuchsia-700 p-1 rounded-md' href='https://github.com/yacade2022/react-weather-app' target="_blank">Source Code</a>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className=' bg-slate-100 rounded-lg border-1 shad'>
                <img className=' h-40 w-full rounded-t-lg' src={order}  />
                <div>
                    <h2 className=' mx-auto px-2 capitalize font-bold text-xl'>order app</h2>
                    <p className='mx-auto px-2 mt-4 text-slate-700 leading-loose '>Tech used : Html, Styled-Components, Javascript, React, Netlify</p>
                    <div className='mx-auto px-2 py-3'>
                        <a className=' text-slate-100 bg-fuchsia-700 p-1 mr-4 rounded-md' href='https://order-meal-c.netlify.app' target="_blank">See Live</a>
                        <a className=' text-slate-100 bg-fuchsia-700 p-1 rounded-md' href='https://github.com/yacade2022/order-react-js' target="_blank">Source Code</a>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left" className=' bg-slate-100 rounded-lg border-1 shad'>
                <img className=' h-40 w-full rounded-t-lg' src={shopping}  />
                <div>
                    <h2 className=' mx-auto px-2 capitalize font-bold text-xl'>shopping cart</h2>
                    <p className='mx-auto px-2 mt-4 text-slate-700 leading-loose'>Tech used : Html, Css, Javascript,</p><p className='mx-auto px-2 text-slate-700 leading-loose font-semibold'>Netlify</p>
                    <div className='mx-auto px-2 py-3'>
                        <a className=' text-slate-100 bg-fuchsia-700 p-1 mr-4 rounded-md' href='https://shopping-cart-f.netlify.app' target="_blank">See Live</a>
                        <a className=' text-slate-100 bg-fuchsia-700 p-1 rounded-md' href='https://github.com/yacade2022/Shopping-Cart' target="_blank">Source Code</a>
                    </div>
                </div>
            </div> 

        </div>
    </div>
  )
}

export default Projects