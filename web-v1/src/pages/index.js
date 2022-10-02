import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Home from "../components/Home";
import Roadmap from "../components/Roadmap";
// import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";
import Vision from "../components/Vision";
// import { Router } from 'react-router-dom';

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
      {/* <TeamSection /> */}
      <Footer />
    </>
  );
};

export default Main;
