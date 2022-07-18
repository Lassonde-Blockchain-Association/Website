import React from "react";
import Navbar from "../components/Navbar";
import HomeSection from "../components/HomeSection";
import VisionSection from "../components/VisionSection";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";
// import { Router } from 'react-router-dom';

const Home = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      {/* <Navbar toggle={toggle} /> */}
      <Navbar />
      <HomeSection />
      <VisionSection />
      {/* <Terms /> */}
      {/* <InfoSection {...homeObjTwo} /> */}
      <TeamSection />
      <Footer />
    </>
  );
};

export default Home;
