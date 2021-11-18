import React from "react";
import PropertyListing from "../PropertyListing/PropertyListing";
import Footer from "../Footer/Footer";

const Explore = () => {
  return (
    <>
      <div>
        <h1 className="title m-5 p-5">Feel Free to Check Our All Options</h1>
        <PropertyListing></PropertyListing>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Explore;
