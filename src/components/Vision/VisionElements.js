import styled from "styled-components";

export const VisionSection = styled.div`
  font-family: "Spline Sans Mono", monospace;
  height: 90vh;
  display: flex;
  padding: 5%;
  flex-direction: column;
  background-color: #182033;
  margin-top: -5px;
  @media screen and (max-width: 1500px) {
    height: 100%;
  }
`;
export const VisionContainer = styled.div`
  color: white;
  margin: 0 20px 0 20px;
  position: relative;
`;

export const VisionH1 = styled.h1`
  padding-left: 8%;
`;

export const VisionStatement = styled.h3`
  font-weight: lighter;
  padding: 4% 8% 6% 8%;
`;

export const CardContainer = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  z-index: 0;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: #bbd2fb;
  color: #fff;
  position: relative;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  &:hover {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    transform: scale(1.1);
    background-color: #6f92cd;
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
  @media screen and (max-width: 1500px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const BottomContainer = styled.div`
  margin: 20px;
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
