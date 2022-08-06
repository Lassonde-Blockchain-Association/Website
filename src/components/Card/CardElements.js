import styled from "styled-components";
import { motion,} from "framer-motion";


export const CardContainer = styled.div`
    height: 500px;
    width: 320px;
    display: flex;
    flex-direction: column;
    border-radius:25px;
    z-index: 0;
    box-shadow: 0 2px 7px 1px rgba(31,31,31,0.2);
    background-color: #77a6f7;
    color: #fff;
    position: relative;
    grid-template-columns: 1fr 1fr 1fr 1fr;
   
    &:hover{
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
    &:hover{
      transform: scale(1.02);
      transition: all 0.2s ease-in-out;
      /* opacity: 0.3; */
      cursor: pointer;
    }

`
export const Circle = styled.div`
    position:absolute;
    width: 350px;
    height: 350px;
    top: 19em;
    right: -1em;
    z-index: 2;
    background-color: #ffccbc;
    border-radius: 50%;
`

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 15px;
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
  color:black;
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

export const ShoesWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Shoes = styled(motion.div)`
  width: auto;
  height: 190px;
  z-index: 99;
  user-select: none;
  margin-right: 3em;
  margin-top: 4em;
  img {
    width: auto;
    height: 100%;
    user-select: none;
  }
`;


export const VisionContainer = styled.div`
  height: 80vh;
  width: auto;
  /* border: 1px solid black; */
  /* font-family: "Spline Sans Mono", monospace; */
  /* letter-spacing: -1px; */

  display: flex;
  flex-direction: column;
  /* margin: 20px 200px 0 200px; */
`;

export const VisionH1 = styled.h1`
  /* margin: 10px 200px 0 200px; */
  text-align: center;
`;

export const VisionStatement = styled.p`
  /* margin: 10px 200px 0 200px; */
  text-align: center;
`;


export const VisionP = styled.p`
  word-wrap: break-word;
  display: flex;
`;

export const ValueWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding: 0 100px;
  justify-content: center;
`;

export const ValueRow = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Column1 = styled.div`
  flex-direction: column;
  margin: 20px;
  width: 400px;
  height: 150px;
`;

export const VisionPhoto = styled.img`
  height: 150px;
  width: 150px;
  // border-radius: 25px;
  padding: 10px;
  align-self: center;
  display: inline-block;
  vertical-align: top;

  &:hover {
    background-color: #fff;
  }
  @media only screen and (max-width: 600px) {
    height: 150px;
    width: 150px;
  }
`;

export const TimelineBody = styled.body`
  /* background-color: aqua; */
  font-family: "Spline Sans Mono", monospace;

  font-size: 16px;
  color: rgb(53, 53, 53);
`;

export const TimelineH3 = styled.h3`
  padding-top: 0.25em;
`;

export const TimelineH1 = styled.h1`
  margin: 10px 200px 0 200px;
`;
