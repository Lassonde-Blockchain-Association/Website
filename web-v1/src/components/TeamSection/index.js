import React from "react";
import {
  Team,
  TeamContainer,
  TeamMemberContainer,
  TeamMemberPhoto,
  TeamMemberDescription,
  TeamH1,
} from "./TeamElements";

import img1 from "./images/img1.jpeg";
import img2 from "./images/img2.jpeg";
import img3 from "./images/img3.jpeg";
import img4 from "./images/img4.jpeg";
import img5 from "./images/img5.png";
import img6 from "./images/img6.jpeg";

const TeamSection = () => {
  return (
    <>
      <Team id="team">
        <TeamH1>OUR TEAM</TeamH1>

        <TeamContainer>
          <TeamMemberContainer className="App">
            <TeamMemberDescription>
              Samson Chan
              <br></br>
              Founder
            </TeamMemberDescription>
            <TeamMemberPhoto src={img1} />
          </TeamMemberContainer>

          <TeamMemberContainer className="App">
            <TeamMemberDescription>
              Quang Le
              <br></br>
              Head of Development
            </TeamMemberDescription>
            <TeamMemberPhoto src={img2} />
          </TeamMemberContainer>

          {/* <TeamElements.TeamMemberContainer className="App">
              <TeamElements.TeamMemberPhoto src={img3} />
              <TeamElements.TeamMemberDescription>
                James
                <br></br>
                Co-founder
                <br></br>
                Metamask Wallet Address
              </TeamElements.TeamMemberDescription>
            </TeamElements.TeamMemberContainer> */}
        </TeamContainer>

        {/* <TeamElements.TeamContainer>
            <TeamElements.TeamMemberContainer className="App">
              <TeamElements.TeamMemberPhoto src={img6} />
              <TeamElements.TeamMemberDescription>
                Charles
                <br></br>
                Co-founder
                <br></br>
                Metamask Wallet Address
              </TeamElements.TeamMemberDescription>
            </TeamElements.TeamMemberContainer>
          </TeamElements.TeamContainer> */}
      </Team>
    </>
  );
};

export default TeamSection;
