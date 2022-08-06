import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
// import { FaBars } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  font-family: "Spline Sans Mono", monospace;
  letter-spacing: -1px;
  top: 0;
  position: sticky;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  /* .navbar.active {
        background: linear-gradient(90deg, #000 
        (66, 2, 194) 0%, #fff (0, 78, 194) 100%);
        color: #fff;
    } */
  background: ${({ scrollNav }) => (scrollNav ? "#FFFFFF" : "transparent")};
  /* height: ${({ scrollNav }) => (scrollNav ? "80px" : "65px")}; */
  height: 55px;
  /* margin-top: ${({ scrollNav }) => (scrollNav ? "-80px" : "-120px")}; */
  transition: ${({ scrollNav }) =>
    scrollNav ? "all 0.3s ease-in-out" : "none"};
`;

export const NavLogo = styled(Link)`
  /* color: ${({ scrollNav }) => (scrollNav ? "transparent" : "black")}; */
  color: black;
  font-size: 35px;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  padding-top: 7px;
`;

// export const NavbarContainer = styled.div`
//     color: #fff;
//     display: flex;
//     align-items: center;
//     text-decoration: none;
//     padding: 0 1rem;
//     height: 100%;
//     cursor: pointer;

//     &.active {
//         color: #15cdfc;
//     }
// `;

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
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(LinkS)`
  /* color: ${({ scrollNav }) => (scrollNav ? "white" : "black")}; */
  font-size: 18px;
  /* font-weight: bold; */

  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  /* &:hover {
        height: ${({ scrollNav }) => (scrollNav ? "0" : "90%")};
    } */
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
