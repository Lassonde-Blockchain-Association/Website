import React from "react";


import { VisionContainer, VisionContent, VisionH1, VisionH2, VisionP, VisionRow, Column1, timelineELements } from "./VisionElements";
import { Timeline } from "./timeline.js"

const VisionSection = () => {
  return (
    <VisionContainer id="vision">
      <VisionContent>

        <VisionH1>Vision</VisionH1>
        <VisionP>(Vision statement and explanation)</VisionP>

        <VisionRow>
          <Column1>
            <VisionH2>Curiosity</VisionH2>
            <VisionP>(Description)</VisionP>
          </Column1>
          <Column1>
            <VisionH2>Communication</VisionH2>
            <VisionP>(Description)</VisionP>
          </Column1>
          <Column1>
            <VisionH2>Execution</VisionH2>
            <VisionP>(Description)</VisionP>
          </Column1>
          <Column1>
            <VisionH2>Reflection</VisionH2>
            <VisionP>(Description)</VisionP>
          </Column1>
        </VisionRow>

        <Timeline />

      </VisionContent>
    </VisionContainer>
  );
};

export default VisionSection;
