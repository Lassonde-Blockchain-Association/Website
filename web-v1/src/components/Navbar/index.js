//rafce
import React, { useState, useEffect } from "react";
// import { 
import {
  Nav,
  NavH1,
  NavLink,
  NavBtnLink,
  NavBtn,
} from './NavbarElements';
// import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
  return (
      <>
      <Nav>
          {/* <NavbarContainer> */}
            {/* H1 is our header of navbar */}
            <NavH1 to="/">
            LBC
            </NavH1>
            <NavLink to="/about" activeStyle>
            Vision
          </NavLink>
          <NavLink to="/services" activeStyle>
            Terms
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            Team
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Contents
          </NavLink>
          
          {/* </NavbarContainer> */}
          {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn> */}
      </Nav>
    </>
  );
};

export default Navbar;
