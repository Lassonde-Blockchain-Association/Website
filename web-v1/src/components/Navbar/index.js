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
} from "./NavbarElements";

import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);
  const [scrollNav, setScrollNav] = useState(false);

  // const handleClick = () => setClick(!click);
  const updateNav = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 300) {
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
        {/* <NavbarContainer> */}
        {/* H1 is our header of navbar */}
        <NavLogo to="/" onClick={toggleHome}>
          LBC
        </NavLogo>
        <NavMenu>
          <NavLink
            to="vision"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-65}
          >
            Vision
          </NavLink>
          {/* <NavLink to="/services" activeStyle>
            Terms */}
          {/* </NavLink> */}
          <NavLink
            to="team"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-85}
          >
            Team
          </NavLink>
        </NavMenu>
        {/* <NavLink to="/sign-up" activeStyle>
            Contents
          </NavLink> */}

        {/* </NavbarContainer> */}
        <NavBtn>
          <NavBtnLink to="/contactus">Contact Us</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
