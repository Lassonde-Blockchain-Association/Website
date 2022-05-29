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
          <VisionP>(Vision statement and explanation) 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </VisionP>

            <ValueRow>
              <Column1>
                <VisionH2>Curiosity</VisionH2>
                <VisionP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </VisionP>
              </Column1>
              <Column1>
                <VisionH2>Communication</VisionH2>
                <VisionP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </VisionP>
              </Column1>
              <Column1>
                <VisionH2>Execution</VisionH2>
                <VisionP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </VisionP>
              </Column1>
              <Column1>
                <VisionH2>Reflection</VisionH2>
                <VisionP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </VisionP>
              </Column1>
            </ValueRow>

          <Timeline />
      </VisionContainer>
    </>
  );
};

export default VisionSection;
