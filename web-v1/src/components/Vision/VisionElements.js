import styled from "styled-components";
import { motion } from "framer-motion";

export const VisionContainer = styled.div`
  *height: 100vh;
  height: 100%;
  width: 100%;
  margin: 0px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  // background: black;
  color: white;
`;

export const VisionH1 = styled.h1`
  margin-left: 100px;
  /* text-align: center; */
`;

export const VisionStatement = styled.h2`
  /* margin: 10px 200px 0 200px; */
  margin: 50px;
  text-align: center;
`;

export const CardContainer = styled.div`
  height: 500px;
  width: 320px;
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
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    /* opacity: 0.3; */
    cursor: pointer;
  }
`;

export const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  z-index: 1;
  border-top-right-radius: 25px;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    /* opacity: 0.3; */
    cursor: pointer;
  }
`;
export const Circle = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  top: 19em;
  right: -1em;
  z-index: 2;
  background-color: #ffccbc;
  border-radius: 50%;
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
  max-width: 1300px;
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
  flex: 0.8;
  padding: 0 1em;
  color: black;
  z-index: 3;
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
