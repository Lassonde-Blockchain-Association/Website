import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBoxes, FaDiscord } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

export const Container = styled.div`
  font-family: "Spline Sans Mono", monospace;
  height: 80vh;
  padding: 5%;
  margin-top: -5px;
  background-color: #4e3e67;
`;
export const Image = styled.img`
  width: 40vh;
  @media screen and (max-width: 960px) {
    width: 35vh;
  }
  @media screen and (max-width: 480px) {
    width: 25vh;
  }
`;

export const ContactWrap = styled.div`
  position: absolute;
  padding: 15%;
  justify-content: center;
  padding-top: 50px;
  display: flex;
  flex-direction: row;
  color: white;
  text-align: center;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const ContactH1 = styled.h1`
  padding-left: 8%;
  color: white;
`;
export const ContactLeft = styled.div`
  float: left;
`;
export const ContactRight = styled.div`
  padding-top: 120px;
  float: right;
  @media screen and (max-width: 480px) {
    padding-top: 60px;
  }
`;

export const TextContainer = styled.div`
  margin-bottom: 50px;
`;

export const SocialIconLink = styled.a`
  margin: 25px;
  color: #fff;
  font-size: 35px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #e69a66;
  }
  @media screen and (max-width: 960px) {
    margin: 5px;
  }
`;
