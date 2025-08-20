import React,{useEffect, useState} from 'react'
import nameLogo from '../assets/f-high-resolution-logo-grayscale-transparent.png'
import {motion} from 'framer-motion'
import menuIcon from '../assets/bars-solid.svg'
import closeIcon from '../assets/xmark-solid.svg'
import {Link} from 'react-scroll'


function NavBar() {
    const [active,setActive] = useState("")
    const [toggle,setToggle] = useState(false)


    useEffect(() => {
        setActive("")
    },[setActive],[active])

    const listItems = [
        {
            id: "about",
            item: "About"
        },
        {
            id: "projects",
            item: "Projects"
        },
        {
            id: "contact",
            item: "Contact"
        }
        
    ]

  return (
    <>
    <header className='fixed top-0 w-full backdrop-blur-md bg-sky-700/30 border-b border-gray-200 border-opacity-20 z-50'>
    <nav className='mx-auto py-2 px-6 lg-px-32 flex items-center justify-between text-white'>
            <div className='flex items-center text-black text-xl font-bold'>
                <img className='w-10 h-15 object-contain' src={nameLogo} alt="logo" />
            <motion.strong initial={{opacity:0,scale:0.5}} 
            animate={{opacity:1, scale:1}} 
            transition={{duration:0.5}}>
                <span>FAIZAN | AFRIDI</span>
            </motion.strong>
                </div>
        <ul  className='sm:flex items-center hidden justify-between gap-20 font-semibold'>
            {listItems.map((items) => (
                <li className={`${active === items.item ? "text-black" : "text-gray-400"} hover:text-white text-xl transition-text duration-300 cursor-pointer`} 
                key={items.id}
                onClick={() => setActive(items.item)}>
                    <Link to={items.id} smooth={true} duration={500} offset={-100} onClick={() => setToggle(false)}>
                    {items.item}
                    </Link>
                </li>
                
            ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img className='w-10 object-contain cursor-pointer' 
            src={toggle? closeIcon : menuIcon} 
            alt="menu"
            onClick={() => setToggle(!toggle)} 
            />
            <div className={`${toggle ? "flex" : "hidden"} w-60 flex-col gap-4 absolute top-16 right-0 bg-gray-100 h-40 p-4 rounded-xl`}>
            <ul  className='flex items-center justify-end gap-4 flex-col font-semibold'>
            {listItems.map((items) => (
                <li className={`${active === items.item ? "text-amber-600" : "text-purple-950"} hover:text-black text-xl transition-text duration-300 cursor-pointer`} 
                key={items.id}
                onClick={() => {
                    setToggle(false);
                    setActive(items.item)}}>
                    <Link to={items.id} smooth={true} duration={500} offset={-100}>
                    {items.item}
                    </Link>
                </li>
                
            ))}
        </ul>
            </div>
        </div>
    </nav>
    </header>
    </>
  )
}

export default NavBar