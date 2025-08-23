import React from 'react'
import Food1 from '../../assets/food/food.png';
import Food2 from '../../assets/food/food2-plate.png';
import Food3 from '../../assets/food/banner.png';
import { SlideUp } from '../Hero/Hero';
import {delay, motion} from 'framer-motion';

const PopularRecipeData = [
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

const PopularRecipe = () => {
  return (
    <section>
        <div>
            <div className="container py-24">
                <motion.h3 variants={SlideUp(0.5)}
                 initial="hidden" 
                 whileInView="show"
                
                className='text-4xl text-center font-leagueGothic uppercase font-semibold py-8'>Our Popular Recipe
                </motion.h3>
                {/* card section  */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
                    {
                       PopularRecipeData.map((item) => {
                           return <div className='group space-y-3 text-center bg-white/50 shadow-xl p-3 rounded-xl'>
                            <img src={item.img} alt="" className='
                            w-44 mx-auto img-shadow 
                            group-hover:scale-110
                            group-hover:translate-y-[-50px]
                            group-hover:translate-x-10
                            group-hover:rotate-[50deg]
                            transition-all duration-400' />
                            <div>
                                <button className='btn-primary group-hover:mb-3 opacity-0 
                                group-hover:opacity-100 transition-all duration-700'>Buy now
                                </button>
                                    <p className='text-xl font-semibold'>{item.name}</p>
                                    <p  className='text-xl font-bold text-yellow-500'>{'\u20B9'}{item.price}</p>
                            </div>
                            
                           </div>
                               
                           
                       }) 
                    }
            
            </div>
        </div>
        </div>
    </section>
  )
};

export default PopularRecipe;