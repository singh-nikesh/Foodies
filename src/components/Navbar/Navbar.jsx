import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/food/logo.png";
import { IoCartOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const NavMenu = [
  { id: 1, title: "Home", path: "/", delay: 0.1 },
  { id: 2, title: "About", path: "/about", delay: 0.2 },
  { id: 3, title: "Menu", path: "/menu", delay: 0.3 },
  { id: 4, title: "Delivery", path: "/delivery", delay: 0.4 },
  { id: 5, title: "Contact Us", path: "/contact", delay: 0.5 },
];

// Animation function for slide down
const SlideDown = (delay) => ({
  initial: { y: "-100%", opacity: 0 },
  animate: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.8, delay },
  },
});

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow">
      <div className="container mx-auto flex justify-between items-center py-3 px-6 font-leagueGothic">
        {/* Logo */}
        <motion.img
          src={Logo}
          alt="Foodies Logo"
          className="w-36"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />

        {/* Menu */}
        <div className="hidden md:block">
          <ul className="flex gap-6">
            {NavMenu.map((menu) => (
              <motion.li
                key={menu.id}
                variants={SlideDown(menu.delay)}
                initial="initial"
                animate="animate"
              >
                <NavLink
                  to={menu.path}
                  className={({ isActive }) =>
                    `inline-block px-2 py-2 text-2xl ${
                      isActive ? "text-red-500 font-semibold" : "text-gray-800 hover:text-red-500"
                    }`
                  }
                >
                  {menu.title}
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Cart Button */}
        <motion.div
          variants={SlideDown(1)}
          initial="initial"
          animate="animate"
        >
          <button className="h-[40px] w-[40px] grid place-items-center rounded-full text-white bg-black hover:scale-110 transition-transform">
            <IoCartOutline />
          </button>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;