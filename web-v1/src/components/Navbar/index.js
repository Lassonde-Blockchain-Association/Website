//rafce
import React, { useState, useEffect } from "react";
// import { HiBars3BottomRight } from "react-icons/hi2";
import { FaBoxes, FaDiscord } from "react-icons/fa";
import {
  Nav,
  NavLogo,
  NavLink,
  NavBtnLink,
  NavBtn,
  NavMenu,
  NavbarContainer,
  Discordbutton,
  MobileIcon,
  NavItem,
  Discord,
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

          <MobileIcon onClick={toggle}>
            <FaBoxes />
          </MobileIcon>

          <NavMenu>
            <NavItem>
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
            </NavItem>
            <NavItem>
              <NavLink
                to="vision"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Vision
              </NavLink>
            </NavItem>
            <NavItem>
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
            </NavItem>
            {/* <NavLink to="/sign-up" activeStyle>
            Contents
          </NavLink> */}
          </NavMenu>

          <NavBtn>
            <NavBtnLink to="/contact">Contact Us</NavBtnLink>

            <Discordbutton href="https://discord.gg/JuCmutKUFM">
              <Discord>
                <FaDiscord />
              </Discord>
              Discord
            </Discordbutton>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
