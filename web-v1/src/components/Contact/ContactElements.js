import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBoxes, FaDiscord } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

export const Container = styled.div`
  font-family: "Spline Sans Mono", monospace;
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: -60px;
  z-index: 0;
  background-color: black;
  @media screen and (max-width: 1500px) {
    height: 100%;
  }
`;

export const Background = styled.video`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 0;
  margin-top: 60px;
  background-size: cover;
  background-color: black;
  filter: brightness(50%);
`;

export const ContactWrap = styled.div`
  height: 100%;
  display: grid;
`;

export const TextContainer = styled.div`
  content-justify: center;
  grid-template-columns: 1fr 1fr 1fr;
  flex-direction: column;
  display: grid;
  padding: 0% 10% 10% 10%;
  z-index: 1;
  @media screen and (max-width: 1500px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: 0% 10% 10% 10%;
  }
`;

export const TextWrapper = styled.div`
  color: white;
  text-decoration: none;

  padding: 10px;
  @media screen and (max-width: 480px) {
    padding-bottom: 0;
  }
`;

export const ContactH2 = styled.h2`
  font-weight: 700;
`;

export const ContactH1 = styled.h1`
  padding: 10% 0% 0% 10%;
  z-index: 0;
  color: white;
`;

export const ContactLink = styled.a`
  font-size: 14px;
  text-decoration: none;
`;

export const Text = styled.span`
  font-size: 18px;
`;
