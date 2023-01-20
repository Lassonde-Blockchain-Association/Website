import styled from "styled-components";
import { FaRegWindowClose } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  font-family: "Spline Sans Mono", monospace;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;

  // if isOpen is true, then do 100%, or else we do 0.
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};

  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  // top: 0;
`;

export const CloseIcon = styled(FaRegWindowClose)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 0;
  right: 0.5rem;
  // right: 0;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const Image = styled.img`
  width: 120px;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 100px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 80px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #087cc4;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  margin-left: 20px;
`;

export const SidebarRoute = styled(LinkS)`
  /* margin: auto; */
  border-radius: 10px;
  background: white;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010666;
  font-size: 1.6rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #fff;
    background: #06639c;
  }
`;
export const DiscordButton = styled.a`
  border-radius: 10px;
  background: #5865f2;
  color: white;
  font-size: 1.6rem;
  padding: 16px 64px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #4650c1;
  }
`;
export const DiscordIcon = styled(FaDiscord)`
  font-size: 30px;
  height: 18px;
`;
