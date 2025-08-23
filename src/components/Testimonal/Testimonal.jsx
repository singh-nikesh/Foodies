import React from 'react'
import BannerPng from '../../assets/food/banner.png';
import{motion} from 'framer-motion';
import { SlideUp } from '../Hero/Hero';
const Testimonal = () => {
  return <section>
       <div className="container py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
                {/* text section */}
                <div className='space-y-5 lg:max-w-[400px]'>
                    <motion.p 
                    variants={SlideUp(0.5)}
                    initial="hidden"
                    whileInView="show"
                    className='text-xl font-serif relative z-10'>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ipsam, architecto quos nesciunt tenetur qui eaque nobis distinctio adipisci itaque soluta reprehenderit quam? Eaque odit, at nesciunt tenetur dicta nobis"
                    </motion.p>
                    <div className='flex items-center gap-3'>
                    <motion.img
                variants={SlideUp(0.8)}
                initial="hidden"
                whileInView="show"
                src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt=""
                className='w-14 h-14 rounded-full object-cover'
                 />
                 <motion.div
                 variants={SlideUp(1.2)}
                 initial="hidden"
                 whileInView="show"

                 >
                    <h2 className='text-xl font-bold'>Krishi</h2>
                    <p className='text-sm'>Designation</p>
                 </motion.div>
                    </div>
                </div>
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
                    
                    className='absolute top-[50%] right-[50%] transform translate-x-[50%] translate-y-[-50%] h-[520px] w-[520px]  bg-lightYellow rounded-full'></motion.div>
                </div>
            </div>
        </div>

        
        </section>
  
};

export default Testimonal;