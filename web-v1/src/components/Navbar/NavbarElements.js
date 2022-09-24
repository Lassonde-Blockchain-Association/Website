import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  font-family: "Spline Sans Mono", monospace;
  position: sticky;
  justify-content: space-between;
  z-index: 10;
  background: ${({ scrollNav }) => (scrollNav ? "#FFFFFF" : "transparent")};
  /* height: ${({ scrollNav }) => (scrollNav ? "80px" : "65px")}; */
  height: 60px;
  /* margin-top: ${({ scrollNav }) => (scrollNav ? "-80px" : "-120px")}; */
  transition: ${({ scrollNav }) =>
    scrollNav ? "all 0.3s ease-in-out" : "none"};
`;

export const NavbarContainer = styled.div`
  font-family: "Spline Sans Mono", monospace;
  padding: 20px;
  justify-content: center;
  display: flex;
`;

export const NavLogo = styled(Link)`
  /* color: ${({ scrollNav }) => (scrollNav ? "#FFFFFF" : "black")}; */
  color: white;
  font-size: 35px;
  text-decoration: none;
  font-weight: bold;
  padding-right: 10%;
`;

// export const Bars = styled(FaBars)`
// display: none;
// color: #fff;

//     @media screen and (max-width: 768px) {
//         display: block;
//         position: absolute;
//         top: 0;
//         right: 0;
//         transform: translate(-100%, 75%);
//         font-size: 1.8rem;
//         cursor: pointer;
//     }
// `

export const NavMenu = styled.div`
  padding: 0 10% 0 10%;
  display: flex;
  align-items: center;
  /* padding: 20px; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(LinkS)`
  /* color: ${({ scrollNav }) => (scrollNav ? "white" : "black")}; */
  font-size: 18px;
  color: white;
  display: inline-block;
  text-decoration: none;
  padding: 0 1.2rem;
  /* height: 100%; */
  cursor: pointer;

  /* &:hover {
        height: ${({ scrollNav }) => (scrollNav ? "0" : "90%")};
    } */
`;
export const NavBtn = styled.nav`
  /* margin: 50px; */
  /* padding: 100px; */
  display: flex;
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #ffffff;
  margin-left: 10px;
  padding: 10px 22px;
  color: black;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #054382;
    color: #ffffff;
  }
`;

export const Discordbutton = styled.a`
  border-radius: 4px;
  background: #ffffff;
  margin-left: 10px;
  padding: 10px 22px;
  color: black;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #054382;
    color: #ffffff;
  }
`;
