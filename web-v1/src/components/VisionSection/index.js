import React from "react";

import {
  VisionContainer,
  VisionH1,
  VisionH2,
  VisionP,
  ValueRow,
  Column1,
} from "./VisionElements";
import Timeline from "./timeline";

const VisionSection = () => {
  return (
    <>
      <VisionContainer id="vision">
        <VisionH1>Vision</VisionH1>
        <VisionP>
          By asking questions and considering others' feedback, we hope to learn
          and enjoy our journey together.
        </VisionP>

        <ValueRow>
          <Column1>
            <VisionH2>Curiosity</VisionH2>
            <VisionP>Asking questions, exploring.</VisionP>
          </Column1>

          <Column1>
            <VisionH2>Communication</VisionH2>
            <VisionP>
              Being transparent in how we lead, providing constant communication
              and feedback for each other.
            </VisionP>
          </Column1>
        </ValueRow>

        <ValueRow>
          <Column1>
            <VisionH2>Execution</VisionH2>
            <VisionP>Striving to create products from those ideas.</VisionP>
          </Column1>

          <Column1>
            <VisionH2>Reflection</VisionH2>
            <VisionP>
              Admitting all feedback, thinking thoroughly about what we have
              done and brainstorming what we can do better in the future.
            </VisionP>
          </Column1>
        </ValueRow>

        <Timeline />
      </VisionContainer>
    </>
  );
};

export default VisionSection;
