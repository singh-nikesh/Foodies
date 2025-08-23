import React from 'react';
import BannerPng from '../../assets/food/banner.png';
import{motion} from 'framer-motion';
import { SlideUp } from '../Hero/Hero';
const Banner = () => {
  return (
    <section>
        <div className="container py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
                {/* image section */}
                <div
                
                className='relative '>
                    <motion.img
                    initial={{
                        opacity: 0,
                        x: -100,
                        y: 100,
                        
                    }} 
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        y: 0
                    }}
                    whileHover={{
                        scale: 1.2,
                        rotate:15,
                        x:50,
                        y:-50,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        scale: {duration: 0.5},
                    }} 
                    src={BannerPng} alt="" className='relative z-10 img-shadow w-full lg:max-w-[550px]' />
                    <motion.div 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.6, delay: 0.5}}
                    
                    className='absolute top-[50%] right-[50%] transform translate-x-[50%] translate-y-[-50%] h-[520px] w-[520px] md:h-[600px] md:w-[600px] bg-lightYellow rounded-full'></motion.div>
                </div>
                {/* text section */}
                <div className='space-y-5 lg:max-w-[400px]'>
                    <motion.h1
                    variants={SlideUp(0.5)}
                    initial="hidden"
                    whileInView="show" 
                    className='text-6xl uppercase font-semibold font-leagueGothic'>The best yummy food in the city</motion.h1>
                    <motion.p
                    variants={SlideUp(1)}
                    initial="hidden"
                    whileInView="show" 
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Doloribus ullam expedita corrupti.
                     </motion.p>
                     <motion.button 
                     variants={SlideUp(1.5)}
                     initial="hidden"
                     whileInView="show"
                     whileHover={{scale: 1.1}}
                     className='btn-primary'> 
                        Order now
                        </motion.button>
                </div>
            </div>
        </div>
    </section>
  )
};

export default Banner;