//rafce
import React, { useState, useEffect } from "react";
// import {
import {
  Nav,
  NavLogo,
  NavLink,
  NavBtnLink,
  NavBtn,
  NavMenu,
  NavbarContainer,
  Discordbutton,
} from "./NavbarElements";

import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);
  const [scrollNav, setScrollNav] = useState(false);

  // const handleClick = () => setClick(!click);
  const updateNav = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 70) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", updateNav);
  }, []);

  // const showButton = () => {
  //   if (window, innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            LBC
          </NavLogo>
          <NavMenu>
            <NavLink
              // to="home"
              smooth={true}
              duration={500}
              spy={true}
              // exact="true"
              // offset={-75}
              to="/"
              onClick={toggleHome}
            >
              Home
            </NavLink>
            <NavLink
              to="vision"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              // offset={-100}
            >
              Vision
            </NavLink>
            {/* <NavLink to="/services" activeStyle>
            Terms */}
            {/* </NavLink> */}
            <NavLink
              to="timeline"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              // offset={-100}
            >
              Roadmap
            </NavLink>

            {/* <NavLink to="/sign-up" activeStyle>
            Contents
          </NavLink> */}
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/contact">Contact Us</NavBtnLink>

            <Discordbutton href="https://discord.gg/JuCmutKUFM">
              Discord
            </Discordbutton>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
