import React from 'react';
import Food1 from '../../assets/food/food.png';
import Food2 from '../../assets/food/food2-plate.png';
import Food3 from '../../assets/food/banner.png';
import { SlideUp } from '../Hero/Hero';
import {delay, motion} from 'framer-motion';

const HotDessertData = [
    {
        id: 1,
        name:"Delicious Fruits & nuts",
        img:Food1,
        price:"100",
        delay: 0.4,
    },
    {
        id: 2,
        name:"Diet Food",
        img:Food2,
        price:"100",
        delay: 0.5,
    },
    {
        id: 3,
        name:"HotDessert",
        img:Food3,
        price:"100",
        delay: 0.6,
    },
] ;
    

const HotDessert = () => {
  return (
    <section>
        <div className="container py-12">
            {/* heading section */}
            <motion.h3 variants={SlideUp(0)} initial="hidden" whileInView="show"
             className='text-3xl font-semibold text-darkGreen uppercase py-8'>Hot Dessert</motion.h3>

            {/* grid section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                {
                    HotDessertData.map((item) => {
                        return (
                            <motion.div 
                            variants={SlideUp(item.delay)}
                            initial="hidden"
                            whileInView="show"
                            className='group bg-white/50 shadow-md p-3 flex items-center gap-3'>
                                <img src={item.img} alt=""
                                className='w-24 rounded-full img-shadow group-hover:scale-125 
                                transition-all duration-700 group-hover:rotate-[50deg]'/>
                                <div>
                                    <h3 className='text-xl font-semibold'>{item.name}</h3>
                                    <p className='text-xl text-yellow-500'>{'\u20B9'}{item.price}</p>
                                </div>
                            </motion.div>
                        );
                    }
                )
                };
            </div>
        </div>
    </section>
  )
};

export default HotDessert;