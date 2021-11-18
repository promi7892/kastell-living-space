import React from "react";
import Agents from "./Agents/Agents";
import Banner from "./Banner/Banner";
import Footer from "../Home/Footer/Footer";
import Partners from "./Partners/Partners";

import PropertyList from "./PropertyList/PropertyList";
import Offerings from "./Offerings/Offerings";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PropertyList></PropertyList>
      <Agents></Agents>
      <Reviews></Reviews>
      <Partners></Partners>

      <Offerings></Offerings>
      <Footer></Footer>
    </div>
  );
};

export default Home;
