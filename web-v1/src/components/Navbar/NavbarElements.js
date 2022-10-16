import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaBoxes, FaDiscord } from "react-icons/fa";
import { icons } from "react-icons/lib";

export const Nav = styled.nav`
  font-family: "Spline Sans Mono", monospace;
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-size: 18px; */
  position: sticky;
  top: 0;
  z-index: 10;
  background: ${({ scrollNav }) =>
    scrollNav ? "rgba(0,0,0,0.7)" : "transparent"};
  height: ${({ scrollNav }) => (scrollNav ? "80px" : "60px")};
  /* height: 60px; */
  /* padding-top: 2%; */
  /* margin-top: ${({ scrollNav }) => (scrollNav ? "80px" : "-120px")}; */
  transition: ${({ scrollNav }) =>
    scrollNav ? "all 0.3s ease-in-out" : "none"};
  transition: 0.3s all ease;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  font-family: "Spline Sans Mono", monospace;
  display: flex;
  justify-content: space-between;
  height: 120px;
  z-index: 1;
  width: 100%;
  /* padding: 0 24px; */
  max-width: 1100px;
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 40px;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  padding-left: 5%;
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    /* rotate: 180deg; */
    position: absolute;
    height: 80px;
    right: 0px;
    /* height: ${({ scrollNav }) => (scrollNav ? "50px" : "75px")}; */
    // top: ${({ scrollNav }) => (scrollNav ? "1rem" : "1.2rem")};
    // right: 1.5rem;

    transform: translate(-100%, 60%);
    font-size: 30px;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.div`
  /* padding: 0 10% 0 10%;
  display: flex;
  align-items: center; */
  padding-left: 10%;
  padding-right: 10;
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  /* height: 120px; */
`;

export const NavLink = styled(LinkS)`
  /* color: ${({ scrollNav }) => (scrollNav ? "white" : "black")}; */
  font-size: 18px;
  color: white;
  display: flex;
  text-decoration: none;
  padding: 0 1.2rem;
  cursor: pointer;

  &:hover {
    color: #087cc4;
  }
`;
export const NavBtn = styled.nav`
  align-items: center;
  display: flex;
  padding-right: 5%;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 10px;
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
    background: #06639c;
    color: #ffffff;
  }
`;

export const Discordbutton = styled.a`
  border-radius: 10px;
  background-color: #5865f2;
  color: white;
  margin-left: 10px;
  padding: 10px 22px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #4650c1;
  }
`;
export const Discord = styled(FaDiscord)`
  font-size: 20px;
  height: 10px;
`;
