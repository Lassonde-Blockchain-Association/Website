//rafce
import React, { useState, useEffect } from "react";
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

const Navbar = ({ toggle, page }) => {
  const [click, setClick] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

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
            LBA
          </NavLogo>

          <MobileIcon onClick={toggle}>
            <FaBoxes />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLink
                to="/"
                smooth={true}
                duration={500}
                spy={true}
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
                offset={-75}
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
                offset={-95}
              >
                Roadmap
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink
                to="team"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={25}
              >
                Team
              </NavLink>
            </NavItem> */}
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
