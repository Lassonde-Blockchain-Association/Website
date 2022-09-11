import React, { useState } from "react";

import {
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
} from "./VisionElements";

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
      <VisionContainer id="vision">
        <VisionH1>Vision</VisionH1>
        <VisionStatement>
          By asking questions and considering others' feedback, we hope to learn
          and enjoy our journey together.
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
    </>
  );
};

export default Vision;
