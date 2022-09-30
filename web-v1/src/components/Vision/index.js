import React, { useState } from "react";

import {
  VisionSection,
  CardContainer,
  CircleWrapper,
  Circle,
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

const Vision = () => {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);

  const onHover = () => {
    setHover(true);
  };
  const onLeave = () => {
    setHover(false);
  };

  const onHover2 = () => {
    setHover2(true);
  };
  const onLeave2 = () => {
    setHover2(false);
  };
  const onHover3 = () => {
    setHover3(true);
  };
  const onLeave3 = () => {
    setHover3(false);
  };
  const onHover4 = () => {
    setHover4(true);
  };
  const onLeave4 = () => {
    setHover4(false);
  };

  return (
    <>
      <VisionSection>
        <VisionContainer id="vision">
          {/* <Background src={videoBg} autoPlay loop muted /> */}
          <VisionH1>Vision</VisionH1>
          <VisionStatement>

            We want to help make the world of Web3 more accessible to everyone. Our goal is to help make the complicated code contained in a blockchain transaction or NFT smart contract into something our users can more easily understand.<br></br>
            <br></br>

            We're looking for enthusiastic talent on multiple fronts - including but not limited to UX/UI design, marketing, web/software development. This is an exciting time to learn about a exciting new field with limitless opportunities to change the world around us!

            <br></br> <br></br> If you are interested in joining an ambitious team and contributing to innovative projects with real-world potential, feel free to get in touch!

          </VisionStatement>
          <ProjectsWrapper>
            <CardContainer
              onMouseEnter={onHover}
              onMouseLeave={onLeave}
              role="button"
              tabIndex="-3"
            >
              <TopContainer>
                <CardText>Curiosity</CardText>
              </TopContainer>
              {hover ? (
                <BottomContainer>
                  Striving for innovations, curisoity is the first step to be a
                  creative and innovative.
                </BottomContainer>
              ) : (
                ""
              )}

              <CircleWrapper
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                role="button"
                tabIndex="-3"
              >
                {hover ? <Circle /> : ""}
              </CircleWrapper>
            </CardContainer>

            <CardContainer
              onMouseEnter={onHover2}
              onMouseLeave={onLeave2}
              role="button"
              tabIndex="-3"
            >
              <CircleWrapper
                onMouseEnter={onHover2}
                onMouseLeave={onLeave2}
                role="button"
                tabIndex="-3"
              >
                {hover2 ? <Circle /> : ""}
              </CircleWrapper>
              <TopContainer>
                <CardText>Execution</CardText>
              </TopContainer>
              {hover2 ? (
                <BottomContainer>
                  Striving to create products from those ideas. Setting clear
                  expectation by having a transparent priorities.
                </BottomContainer>
              ) : (
                ""
              )}
            </CardContainer>

            <CardContainer
              onMouseEnter={onHover3}
              onMouseLeave={onLeave3}
              role="button"
              tabIndex="-3"
            >
              <CircleWrapper
                onMouseEnter={onHover3}
                onMouseLeave={onLeave3}
                role="button"
                tabIndex="-3"
              >
                {hover3 ? <Circle /> : ""}
              </CircleWrapper>
              <TopContainer>
                <CardText>Communication</CardText>
              </TopContainer>
              {hover3 ? (
                <BottomContainer>
                  Being transparent in how we lead, providing constant
                  communication and feedback for each other.
                </BottomContainer>
              ) : (
                ""
              )}
            </CardContainer>

            <CardContainer
              onMouseEnter={onHover4}
              onMouseLeave={onLeave4}
              role="button"
              tabIndex="-3"
            >
              <CircleWrapper
                onMouseEnter={onHover4}
                onMouseLeave={onLeave4}
                role="button"
                tabIndex="-3"
              >
                {hover4 ? <Circle /> : ""}
              </CircleWrapper>
              <TopContainer>
                <CardText>Reflection</CardText>
              </TopContainer>
              {hover4 ? (
                <BottomContainer>
                  Admitting all feedback, thinking thoroughly about what we have
                  done and brainstorming what we can do better in the future.
                </BottomContainer>
              ) : (
                ""
              )}
            </CardContainer>
          </ProjectsWrapper>
        </VisionContainer>
      </VisionSection>
    </>
  );
};

export default Vision;
