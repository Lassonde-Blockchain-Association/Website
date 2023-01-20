import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Home from "../components/Home";
import Roadmap from "../components/Roadmap";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";
import Vision from "../components/Vision";
import Contact from "../components/Contact";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Home />
      <Vision />
      <Roadmap />
      <Contact />
      <Footer />
    </>
  );
};

export default Main;
