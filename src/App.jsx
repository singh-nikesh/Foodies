import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import HotDessert from "./components/HotDessert/HotDessert";
import Banner from "./components/Banner/Banner";
import PopularRecipe from "./components/PopularRecipe/PopularRecipe";
import Testimonal from "./components/Testimonal/Testimonal";
import Footer from "./components/Footer/Footer";

// Pages
import About from "./components/Pages/About";
import Menu from "./components/Pages/Menu";
import Delivery from "./components/Pages/Delivery";
import Contact from "./components/Pages/Contact";

// Home page (your landing page with Hero + sections)
const Home = () => {
  return (
    <>
      <Hero />
      <HotDessert />
      <Banner />
      <PopularRecipe />
      <Testimonal />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <div className="overflow-x-hidden bg-white2 text-dark">
      <div className="relative overflow-hidden">
        <Navbar />
      </div>

      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;