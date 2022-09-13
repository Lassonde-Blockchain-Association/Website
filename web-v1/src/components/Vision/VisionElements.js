import styled from "styled-components";
import { motion } from "framer-motion";

export const VisionSection = styled.div`
  /* height: 100vh; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #101522;
  margin-top: -5px;
`;
export const VisionContainer = styled.div`
  color: white;
  height: 100vh;
  /* width: 100%; */
  /* margin: 10px 200px 50px 200px; */
`;

// export const Background = styled.video`
//   /* margin: -5px; */
//   width: 100%;
//   // height: 100vh;
//   object-fit: cover;
//   position: absolute;
// `;

export const VisionH1 = styled.h1`
  margin-left: 100px;
  margin-top: 10%;
  text-align: left;
  position: relative;
`;

export const VisionStatement = styled.h2`
  margin: 50px 200px 50px 200px;
  text-align: left;
  position: relative;
`;

export const CardContainer = styled.div`
  height: 500px;
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
    transition: all 0.2s ease-in-out;
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
  /* border-botton-radius: 25px; */
  &:hover {
    transition: all 0.2s ease-in-out;
    /* cursor: pointer; */
  }
`;
export const Circle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 15em;
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
  max-width: 80%;
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
