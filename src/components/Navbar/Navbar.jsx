import React from 'react';
import Logo from "../../assets/food/logo.png";
import {IoCartOutline} from "react-icons/io5";
import {animate, delay, motion} from "framer-motion";
const NavMenu = [
    {
        id: 1,
        title: "Home",
        path: "/",
        delay: 0.1
    },
    {
        id: 2,
        title: "About",
        path: "/About",
        delay: 0.2
    },
    {
        id: 3,
        title: "Menu",
        path: "/Menu",
        delay: 0.3
    },
    {
        id: 4,
        title: "Delivery",
        path: "/Delivery",
        delay: 0.4
    },
    {
        id: 5,
        title: "Contact Us",
        path: "/Contact",
        delay: 0.4
    }
    
];
const SlideDown = (delay) => {
    return {
        initial: {
            y: "-100%",
            opacity: 0
        },
        animate: {
            y: "0",
            opacity: 1,
            transition: {
                duration: "0.8",
                delay: delay,
            }
        }
    }
}
const Navbar = () => {
  return<nav>
    <div className="container flex justify-between items-center font-leagueGothic">
        {/* logo section */}
        <motion.img 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.8, delay: 0.5}} 
        src={Logo} alt=" " className='w-36' />

        {/* menu section */}
        <div className="hidden md:block"> 
            <ul className='flex gap-6'>
                {
                    NavMenu.map((menu) => {
                        return (
                        <motion.li 
                        variants={SlideDown(menu.delay)}
                        initial="initial"
                        animate="animate"
                        key={menu.id} className="nav-menu" data-delay={menu.delay}>
                            
                            <a href={menu.path} className='inline-block px-2 py-2 text-2xl'>{menu.title}</a>
                            
                        </motion.li>
                        );
                    })
                        
                }
            </ul>
        </div>

        {/* button section */}
        <motion.div
        variants={SlideDown(1)}
        initial="initial"
        animate="animate" >
            <button 
             className='h-[40px] w-[40px] grid place-items-center rounded-full text-white bg-black hover:scale-110'>
                <IoCartOutline />
            </button>
        </motion.div>
    </div>
  </nav>;
};

export default Navbar;