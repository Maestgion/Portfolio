import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {styles} from "../style"
import {navLinks} from "../constants"
import {logo, menu, close} from "../assets"

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  return (
    <>
    {/* nav element */}

    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>

      {/* main-bar */}

      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>

        <Link to="/" className='flex items-center ' onClick={()=>{setActive("")
        window.scrollTo(0,0)
      }}>
        <img src={logo} alt={logo} className="w-10 h-10 sm:w-16 sm:h-16 object-contain gap-2"  />
        <p className='text-white no-underline text-[18px] font-bold cursor-pointer'> {"{ Abhishek Dubey }"}</p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
        {
          navLinks.map((elem)=>(
            <li key={elem.id}
            className={`${active===elem.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer` }
            onClick={()=>setActive(elem.title)} 
            >

              <a href={`#${elem.id}`}>{elem.title}</a>

            </li>
          ))
        }

        </ul>


        {/* mobile-nav */}

        <div className='sm:hidden flex flex-1 justify-end items-center'>

          <img src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={()=> setToggle(!toggle)} />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 min-w-[140px] z-10 rounded-xl`}>

          <ul className='list-none  flex justify-end items-start flex-col gap-4'>
        {
          navLinks.map((elem)=>(
            <li key={elem.id}
            className={`${active===elem.title ? "text-white" : "text-secondary"} hover:text-white hover:text-[18px] font-medium cursor-pointer font-poppins text-[16px]` }
            onClick={()=>{setActive(elem.title)
              setToggle(!toggle)
            }} 
            >

              <a href={`#${elem.id}`}>{elem.title}</a>

            </li>
          ))
        }

        </ul>

          </div>

        </div>
        
      </div>
    
    </nav>
    </>
  )
}

export default Navbar