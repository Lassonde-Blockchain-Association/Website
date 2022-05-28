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
    <VisionContainer id="vision">
      <VisionH1>Vision</VisionH1>
      <VisionP>
        (Vision statement and explanation) adl;fk jads;lkf ja;ldskjf a;ldsk
        jf;alsdk jf;ldsak jf;lasdk jf;lakdsjf ;laskdf j;laskd jf;lasdkf j;lsadk
        jf;lsadk jf asdlfkasd;lfk jads;lf kja;lfdk jsa;ldfk ja;ldskf ja;lsdk
        jf;ldsak jf;lsadk jf;lasdk jf;lasdkjf ;aldskf j;ladsk jf;ladskf
        j;lasdkjf ;alsdkf ;lsakd jf;lasd jf;ladsk jf;lsadk j;laskdj f
      </VisionP>

      <ValueRow>
        <Column1>
          <VisionH2>Curiosity</VisionH2>
          <p>
            01234567890123456789012345678901234567890123456789012345678901234567890123456789
          </p>
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
      </ValueRow>

      <Timeline />
    </VisionContainer>
  );
};

export default VisionSection;
