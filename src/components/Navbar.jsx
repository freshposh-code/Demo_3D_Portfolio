import React, { useState } from 'react'
import { styles } from '../Style'
import { Link } from 'react-router-dom'
import {MyLogo, menu ,close} from '../assets'
import {navLinks} from "../Utils/Data"

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  return (
    <>
    <div className={`${styles.paddingX} w-full flex items-center py-5 fixed z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className='flex items-center gap-2' onClick={() => {setActive('');
         window.scrollTo(0,0) }}>
          <img src={MyLogo} alt="logo" className='w-9 h-9 object-contain' />
         </Link>
         <ul className='list-none sm:flex flex-row gap-10 xs:flex hidden'>
          {navLinks.map((link)=> (
            <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"}  hover:text-white text-[18px] font-medium cursor-pointer`}
             onClick={() => setActive(link.title)}>
               <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
         </ul>
      <div className="sm:hidden flex">
        <img src={toggle ? close : menu} alt="menu" className='' onClick={() => setToggle(!toggle)} />

        <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
        <ul className='gap-4 flex justify-end items-start flex-col'>
          {navLinks.map((link)=> (
            <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} text-[16px] hover:text-white font-medium cursor-pointer`}
             onClick={() => {
              setToggle(!toggle)
              setActive(link.title)}
             } >
               <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
         </ul>
        </div>
      </div>
         </div>
      </div>
    </>
  )
}

export default Navbar