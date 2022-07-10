import React from "react";
import * as TeamElements from "./TeamElements";

import img1 from "./images/img1.webp";
import img2 from "./images/img2.webp";
import img3 from "./images/img3.jpeg";
import img4 from "./images/img4.png";
import img5 from "./images/img5.webp";

const TeamSection = () => {
  return (
    <>
      <TeamElements.Team id="team">
        <h1>Our Team</h1>
        <TeamElements.TeamBigContainer>
          <TeamElements.TeamContainer>
            {/* 
      First team member information
      */}
            <TeamElements.TeamMemberContainer className="App">
              <TeamElements.TeamMemberPhoto src={img1} />
              <TeamElements.TeamMemberDescription>
                Samson Chan
                <br></br>
                Co-Founder
                <br></br>
                0x5EFB44eD50fC56F957E06C5c...
              </TeamElements.TeamMemberDescription>
            </TeamElements.TeamMemberContainer>

            {/* 
      Second team member information
      */}
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

            {/* 
      Third team member information
      */}
            <TeamElements.TeamMemberContainer className="App">
              <TeamElements.TeamMemberPhoto src={img3} />
              <TeamElements.TeamMemberDescription>
                James
                <br></br>
                Co-founder
                <br></br>
                Metamask Wallet Address
              </TeamElements.TeamMemberDescription>
            </TeamElements.TeamMemberContainer>
          </TeamElements.TeamContainer>

          <TeamElements.TeamContainer>
            {/* 
      Fourth team member information
      */}
            <TeamElements.TeamMemberContainer className="App">
              <TeamElements.TeamMemberPhoto src={img4} />
              <TeamElements.TeamMemberDescription>
                Sam
                <br></br>
                Co-founder
                <br></br>
                Metamask Wallet Address
              </TeamElements.TeamMemberDescription>
            </TeamElements.TeamMemberContainer>

            {/* 
      Fifth team member information
      */}
            <TeamElements.TeamMemberContainer className="App">
              <TeamElements.TeamMemberPhoto src={img5} />
              <TeamElements.TeamMemberDescription>
                Brian
                <br></br>
                Co-founder
                <br></br>
                Metamask Wallet Address
              </TeamElements.TeamMemberDescription>
            </TeamElements.TeamMemberContainer>
          </TeamElements.TeamContainer>
        </TeamElements.TeamBigContainer>
      </TeamElements.Team>
    </>
  );
};

export default TeamSection;
