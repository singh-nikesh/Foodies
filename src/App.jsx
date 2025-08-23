import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import HotDessert from "./components/HotDessert/HotDessert";
import Banner from "./components/Banner/Banner";
import PopularRecipe from "./components/PopularRecipe/PopularRecipe";
import Testimonal from "./components/Testimonal/Testimonal.jsx";
import Footer from "./components/Footer/Footer";
export const App = () => {
  return <div className= "overflow-x-hidden bg-white2 text-dark">
    <div className="relative overflow-hidden"> 
      <Navbar />
      <Hero />
      </div>
      <HotDessert />
      <Banner />
      <PopularRecipe />
      <Testimonal />
      <Footer />
  </div>;
  
};
export default App;