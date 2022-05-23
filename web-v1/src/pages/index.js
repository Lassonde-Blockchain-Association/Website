import React, { useState } from "react";
// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/Navbar";
// import InfoSection from "../components/HomeSection";
import VisionSection from "../components/VisionSection";
// import { homeObjOne, homeObjThree } from "../components/InfoSection/Data";
// , homeObjTwo
// import Projects from "../components/Terms";
import TeamSection from "../components/TeamSection";
// import Footer from "../components/Footer";
// import { Router } from 'react-router-dom';

const Home = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      {/* <Navbar toggle={toggle} />
      <HomeSection /> */}
      {/* <VisionSection /> */}
      {/* <Terms /> */}
      {/* <InfoSection {...homeObjTwo} /> */}
      <TeamSection/>
      {/* <Footer /> */}
    </>
  );
};

export default Home;
