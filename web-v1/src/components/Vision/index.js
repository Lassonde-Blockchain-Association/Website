import React, { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  VisionSection,
  CardContainer,
  VisionStatement,
  VisionContainer,
  VisionH1,
  CardText,
  ProjectsWrapper,
  TopContainer,
  BottomContainer,
  Background,
} from "./VisionElements";
import videoBg from "../../video/bc3.mp4";
import { useEffect } from "react";

const Vision = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <VisionSection>
        <VisionContainer id="vision">
          {/* <Background src={videoBg} autoPlay loop muted /> */}
          <VisionH1>VISION</VisionH1>
          <VisionStatement>
            We want to help make the world of Web3 more accessible to everyone.
            <br></br>
            <br></br>
            Through this project, our goal is to create intuitive, easily
            deployable data analytics and visualisation tools that help
            translate the arcane code contained in a blockchain transaction or
            NFT smart contract into something our users can more easily
            understand.
            <br></br>
            <br></br>
            In order to achieve this, we will need enthusiastic talent on
            multiple fronts - including but not limited to UX/UI design,
            marketing, frontend/backend/API/blockchain development. This is an
            exciting time to learn about a burgeoning new field with limitless
            opportunities to change the world around us, and LBC offers a
            fantastic opportunity to gain this valuable early experience.
            <br></br>
            <br></br>
            If you are interested in joining an ambitious team and contributing
            to innovative projects with real-world potential, feel free to get
            in touch with us!
          </VisionStatement>
          <ProjectsWrapper>
            <CardContainer data-aos="zoom-in">
              <TopContainer>
                <CardText>Curiosity</CardText>
              </TopContainer>
              <BottomContainer>
                Striving for innovations, curisoity is the first step to be a
                creative and innovative.
              </BottomContainer>
            </CardContainer>

            <CardContainer data-aos="zoom-in">
              <TopContainer>
                <CardText>Execution</CardText>
              </TopContainer>
              <BottomContainer>
                Striving to create products from those ideas. Setting clear
                expectation by having a transparent priorities.
              </BottomContainer>
            </CardContainer>

            <CardContainer data-aos="zoom-in">
              <TopContainer>
                <CardText>Communication</CardText>
              </TopContainer>
              <BottomContainer>
                Being transparent in how we lead, providing constant
                communication and feedback for each other.
              </BottomContainer>
            </CardContainer>

            <CardContainer data-aos="zoom-in">
              <TopContainer>
                <CardText>Reflection</CardText>
              </TopContainer>
              <BottomContainer>
                Admitting all feedback, thinking thoroughly about what we have
                done and brainstorming what we can do better in the future.
              </BottomContainer>
            </CardContainer>
          </ProjectsWrapper>
        </VisionContainer>
      </VisionSection>
    </>
  );
};

export default Vision;
