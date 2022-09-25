import React from "react";
import * as TeamElements from "./TeamElements";

import img1 from "./images/img1.jpeg";
import img2 from "./images/img2.jpeg";
import img3 from "./images/img3.jpeg";
import img4 from "./images/img4.jpeg";
import img5 from "./images/img5.png";
import img6 from "./images/img6.jpeg";

const TeamSection = () => {
  return (
    <>
      <TeamElements.Team id="team">
        <h1>Our Team</h1>
        <TeamElements.TeamBigContainer>
          <TeamElements.TeamContainer>
            <TeamElements.TeamMemberContainer className="App">
              <TeamElements.TeamMemberPhoto src={img1} />
              <TeamElements.TeamMemberDescription>
                Samson Chan
                <br></br>
                Co-Founder and Product Manager
                <br></br>
                0x5EFB44eD50fC56F957E06C5c...
              </TeamElements.TeamMemberDescription>
            </TeamElements.TeamMemberContainer>

            <TeamElements.TeamMemberContainer className="App">
              <TeamElements.TeamMemberPhoto src={img2} />
              <TeamElements.TeamMemberDescription>
                Quang
                <br></br>
                Co-founder
                <br></br>
                Metamask Wallet Address
              </TeamElements.TeamMemberDescription>
            </TeamElements.TeamMemberContainer>

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
          </TeamElements.TeamContainer>

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
        </TeamElements.TeamBigContainer>
      </TeamElements.Team>
    </>
  );
};

export default TeamSection;
