import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { TbDeviceImacCode } from 'react-icons/tb'
import { IoIosConstruct } from 'react-icons/io'

import employee from './assets/image/employees-management.jpg'
import collection from './assets/image/collection-photo.jpg'
import dashboard from './assets/image/dashboard.jpg'
import weather from './assets/image/weather-app.jpg'
import order from './assets/image/order.jpg'
import shopping from './assets/image/shopping-cart.jpg'
import airbnb from './assets/image/airbnb_logo_detail.jpg'
import stockroom from './assets/image/stockroom.png'

// Matches the 72px sticky header height
export const NAV_OFFSET = -72

export const links = [
  { id: 'about', text: 'About' },
  { id: 'skills', text: 'Skills' },
  { id: 'projects', text: 'Projects' },
  { id: 'contact', text: 'Contact' },
]

export const contact = {
  email: 'alili.elamin@gmail.com',
  location: 'Ottawa, Canada',
}

export const socials = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/yacade2022', icon: FaGithub },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/el-amin-mohammed-alili-851356304',
    icon: FaLinkedin,
  },
]

export const skills = [
  {
    id: 'frontend',
    title: 'Front End',
    icon: FaHtml5,
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux Toolkit', 'Styled Components', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    title: 'Back End',
    icon: TbDeviceImacCode,
    items: ['Node.js', 'Express', 'Next.js', 'TypeScript', 'MongoDB', 'REST APIs'],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: IoIosConstruct,
    items: ['Git', 'GitHub', 'VS Code', 'Render'],
  },
]

// Optional per project: description, highlights. If image is omitted, a styled placeholder is shown.
export const projects = [
  {
    id: 'stockroom',
    title: 'Stockroom',
    subtitle: 'E-commerce Storefront',
    image: stockroom,
    description:
      'A modern, fully responsive e-commerce web application featuring dynamic product catalog browsing, real-time search, cart state management, checkout workflow, interactive FAQ, and automated Jest unit tests.',
    highlights: [
      'Real-time catalog search and filtering',
      'Full shopping cart state management with live price calculations',
      'Mobile-first responsive UI',
      'Reliable automated unit test coverage with Jest',
    ],
    tech: ['React', 'JavaScript', 'Node.js', 'Tailwind CSS', 'Jest', 'Git & GitHub', 'Render'],
    live: 'https://e-commerce-vg38.onrender.com',
    source: 'https://github.com/yacade2022/e-commerce',
  },
  {
    id: 'airbnb',
    title: 'Airbnb',
    image: airbnb,
    tech: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    live: 'https://airbnb-po1q.onrender.com',
    source: 'https://github.com/yacade2022/airbnb',
  },
  {
    id: 'employees',
    title: 'Employees Management',
    image: employee,
    tech: ['React', 'Styled Components', 'Node.js', 'Express', 'MongoDB', 'Render'],
    live: 'https://mern-employee-management.onrender.com',
    source: 'https://github.com/yacade2022/mern-employee-management',
  },
  {
    id: 'collection',
    title: 'Collection Photo',
    image: collection,
    tech: ['React', 'Styled Components', 'Node.js', 'Express', 'MongoDB', 'Render'],
    live: 'https://collection-photo-1.onrender.com',
    source: 'https://github.com/yacade2022/Collection-Photo',
  },
  {
    id: 'dashboard',
    title: 'Dashboard',
    image: dashboard,
    tech: ['React', 'Styled Components', 'JavaScript', 'Netlify'],
    live: 'https://dashboard-9.netlify.app',
    source: 'https://github.com/yacade2022/dashboard-react',
  },
  {
    id: 'weather',
    title: 'Weather App',
    image: weather,
    tech: ['React', 'Styled Components', 'JavaScript', 'Netlify'],
    live: 'https://weather-app-7b.netlify.app',
    source: 'https://github.com/yacade2022/react-weather-app',
  },
  {
    id: 'order',
    title: 'Order App',
    image: order,
    tech: ['React', 'Styled Components', 'JavaScript', 'Netlify'],
    live: 'https://order-meal-c.netlify.app',
    source: 'https://github.com/yacade2022/order-react-js',
  },
  {
    id: 'shopping',
    title: 'Shopping Cart',
    image: shopping,
    tech: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
    live: 'https://shopping-cart-f.netlify.app',
    source: 'https://github.com/yacade2022/Shopping-Cart',
  },
]
