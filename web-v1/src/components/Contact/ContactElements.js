import styled from "styled-components";
// import { Link } from "react-router-dom";
// import { FaBoxes, FaDiscord } from "react-icons/fa";

export const Container = styled.div`
  font-family: "Spline Sans Mono", monospace;
  justify-content: center;
  width: 100%;
  min-height: 692px;
  /* position: absolute; */
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  /* overflow: hidden; */
  /* min-height: 100vh;
  background: #e6f0ed; */
  /* margin-left: auto;
  margin-right: auto; */
`;

// export const ContactNav = styled.nav`
//   /* margin-top: -32px; */
//   align-items: center;
//   list-style: none;
//   text-align: center;
//   z-index: 10;
//   position: absolute;
//   display: flex;
//   justify-content: space-between;
//   height: 80px;
//   z-index: 1;
//   width: 100%;
//   /* padding: 0 24px; */
//   max-width: 1100px;
// `;
// export const Icon = styled(Link)`
//   color: #fff;
//   justify-self: flex-start;
//   cursor: pointer;
//   font-size: 40px;
//   display: flex;
//   align-items: center;
//   font-weight: bold;
//   text-decoration: none;
//   padding-left: 5%;
// `;

// export const NavBtn = styled.nav`
//   align-items: center;
//   display: flex;
//   padding-right: 5%;
//   @media screen and (max-width: 960px) {
//     display: none;
//   }
// `;

// export const NavBtnLink = styled(Link)`
//   border-radius: 10px;
//   background: #ffffff;
//   margin-left: 10px;
//   padding: 10px 22px;
//   color: black;
//   border: none;
//   outline: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #06639c;
//     color: #ffffff;
//   }
// `;

// export const Discordbutton = styled.a`
//   border-radius: 10px;
//   background-color: #5865f2;
//   color: white;
//   margin-left: 10px;
//   padding: 10px 22px;
//   border: none;
//   outline: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background-color: #4650c1;
//   }
// `;
// export const Discord = styled(FaDiscord)`
//   font-size: 20px;
//   height: 10px;
// `;

export const Background = styled.video`
  width: 100%;
  height: 100vh;
  margin-top: -60px;
  /* margin-top: -60px; */
  /* padding-top: -60px; */
  z-index: 0;
  background-size: cover;
  background-color: black;
  filter: brightness(50%);
`;

export const ContactWrap = styled.div`
  height: 100%;
  /* width: max-content; */
  display: grid;
`;

export const TextContainer = styled.div`
  position: absolute;
  margin: 15%;
`;

export const TextWrapper = styled.div`
  /* padding-left: 20%; */
  color: white;
  text-decoration: none;
  /* padding-top: 140px; */

  @media screen and (max-width: 480px) {
    padding-bottom: 0;
  }
`;

export const ContactH1 = styled.h1`
  /* margin-bottom: 40px; */
  font-size: 28px;
  font-weight: 700;
  /* text-align: center; */
`;

export const ContactLink = styled.a`
  /* padding-top: 20px; */
  /* height: 25px; */
  font-size: 14px;
  text-decoration: none;
`;

export const Text = styled.span`
  /* margin-top: 24px; */
  font-size: 18px;
`;
