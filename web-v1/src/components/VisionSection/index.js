import React from "react";


import { VisionContainer, VisionContent, VisionH1, VisionH2, VisionP, ValueWrapper, VisionRow, Column1} from "./VisionElements";
import Timeline from "./timeline"

const VisionSection = () => {
  return (
    <VisionContainer id="vision">
      <VisionContent>

        <VisionH1>Vision</VisionH1>
        <VisionP>(Vision statement and explanation)</VisionP>

        <ValueWrapper>
          <VisionRow>
            <Column1>
              <VisionH2>Curiosity</VisionH2>
              <VisionP>0123456789012345678901234567890123456789</VisionP>
            </Column1>
            <Column1>
              <VisionH2>Communication</VisionH2>
              <VisionP>0123456789012345678901234567890123456789</VisionP>
            </Column1>
            <Column1>
              <VisionH2>Execution</VisionH2>
              <VisionP>0123456789012345678901234567890123456789</VisionP>
            </Column1>
            <Column1>
              <VisionH2>Reflection</VisionH2>
              <VisionP>0123456789012345678901234567890123456789</VisionP>
            </Column1>
          </VisionRow>
        </ValueWrapper>

        <Timeline />

      </VisionContent>
    </VisionContainer>
  );
};

export default VisionSection;
