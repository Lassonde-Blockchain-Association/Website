import styled from "styled-components";
import { motion } from "framer-motion";

export const VisionSection = styled.div`
  /* height: 100vh; */
  width: 100%;
  display: flex;
  padding: 2%;
  flex-direction: column;
  // justify-content: center;
  background-color: #101522;
  margin-top: -5px;
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;
export const VisionContainer = styled.div`
  color: white;
  height: 100vh;
  align-items: center;
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

export const VisionH1 = styled.h1`
  padding: 2%;
  padding-left: 10%;
  text-align: left;
  position: relative;
`;

export const VisionStatement = styled.h3`
  padding: 2%;
  text-align: left;
  position: relative;
`;

export const CardContainer = styled.div`
  height: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  z-index: 0;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: #77a6f7;
  color: #fff;
  position: relative;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  &:hover {
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 15px;
`;

export const ProjectsWrapper = styled.div`
  max-width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 26px;
  padding: 0 50px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 0 1em;
  color: black;
  z-index: 5;
`;

export const CardText = styled.h1`
  color: black;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  z-index: 10;
  font-size: 30px;
  font-weight: 900;
`;
