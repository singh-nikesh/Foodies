import React from 'react'
import Logo from '../../assets/food/logo.png'
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.footer
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 1}}
    className='bg-lightYellow rounded-t-3xl'
    >
        <div className="container py-14">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                     {/* brand info */}
                    <div className='space-y-3 lg:max-[300px]:'>
                        <img src={Logo} alt=" " className='w-24'/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nisi facilis incidunt.</p>
                        <a href="#" className='inline-block text-sm mt-6'>Contact@food.com</a>


                    </div>
            {/* quick links */}
                    <div className="col-span-2 grid grid-cols-2 md:grid-cols-3 gap-12">
                        <div>
                            <h1 className='text-xl font-semibold'>Quick Links</h1>
                            <ul className='space-y-3 mt-6'>
                                <li className='footer-link'>Home</li>
                                <li className='footer-link'>About</li>
                                <li className='footer-link'>Food</li>
                                <li className='footer-link'>Contact</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-xl font-semibold'>Need Help </h1>
                            <ul className='space-y-3 mt-6'>
                                <li className='footer-link'>Contact us</li>
                                <li className='footer-link'>Chat</li>
                                <li className='footer-link'>Report</li>
                                <li className='footer-link'>Raise ticket</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-xl font-semibold'>Feedback</h1>
                            <ul className='space-y-3 mt-6'>
                                <li className='footer-link'>Instagram</li>
                                <li className='footer-link'>Facebook</li>
                                <li className='footer-link'>Reddit</li>
                                <li className='footer-link'>Twitter</li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
    </motion.footer>
  )
};

export default Footer;