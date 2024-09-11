import React from "react";
import Navbar from "./Navbar/page";
import HomePage from "./Home/page";
import About from "./About/page";
import Process from "./Process/page";
import Gallery from "./Gallery/page";
import Product from "./Products/page";
import Footer from "./Footer/page";
import Contact from "./Contact/page";

const page = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <About />
      <Product />
      <Process />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
