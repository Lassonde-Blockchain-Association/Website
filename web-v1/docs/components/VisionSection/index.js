import React from "react";

import {
  VisionContainer,
  VisionH1,
  VisionStatement,
  VisionH2,
  VisionP,
  ValueRow,
  Column1,
  VisionPhoto,
} from "./VisionElements";
import Timeline from "./timeline";
import img1 from "./images/img1.png";

const VisionSection = () => {
  return (
    <>
      <VisionContainer id="vision">
        <VisionH1>Vision</VisionH1>
        <VisionStatement>
          By asking questions and considering others' feedback, we hope to learn
          and enjoy our journey together.
        </VisionStatement>

        <ValueRow>
          <VisionPhoto src={img1} />
          <Column1>
            <VisionH2>Curiosity</VisionH2>
            <VisionP>
              Striving for innovations, curisoity is the first step to be a
              creative and innovative.{" "}
            </VisionP>
          </Column1>

          {/* </ValueRow> */}

          {/* <ValueRow> */}
          <Column1>
            <VisionH2>Communication</VisionH2>
            <VisionP>
              Being transparent in how we lead, providing constant communication
              and feedback for each other.
            </VisionP>
          </Column1>
          <VisionPhoto src={img1} />
        </ValueRow>

        <ValueRow>
          <VisionPhoto src={img1} />
          <Column1>
            <VisionH2>Execution</VisionH2>
            <VisionP>
              Striving to create products from those ideas. Setting clear
              expectation by having a transparent priorities.
            </VisionP>
          </Column1>
          {/* </ValueRow> */}

          {/* <ValueRow> */}
          <Column1>
            <VisionH2>Reflection</VisionH2>
            <VisionP>
              Admitting all feedback, thinking thoroughly about what we have
              done and brainstorming what we can do better in the future.
            </VisionP>
          </Column1>
          <VisionPhoto src={img1} />
        </ValueRow>
      </VisionContainer>

      <Timeline />
    </>
  );
};

export default VisionSection;
