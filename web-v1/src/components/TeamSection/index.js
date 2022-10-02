import React from "react";
import {
  Team,
  TeamContainer,
  TeamMemberContainer,
  TeamMemberPhoto,
  TeamMemberDescription,
  TeamH1,
} from "./TeamElements";

import samson from "./images/mom.jpg";
import qaung from "./images/qaung.jpg";
import james from "./images/james.jpg";
// import img5 from "./images/img5.png";
// import img6 from "./images/img6.jpeg";

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
            <TeamMemberPhoto src={samson} />
          </TeamMemberContainer>

          <TeamMemberContainer className="App">
            <TeamMemberDescription>
              Quang Le
              <br></br>
              Head of Development
            </TeamMemberDescription>
            <TeamMemberPhoto src={qaung} />
          </TeamMemberContainer>

          <TeamMemberContainer className="App">
            <TeamMemberDescription>
              James
              <br></br>
              Software Engineer
            </TeamMemberDescription>
            <TeamMemberPhoto src={james} />
          </TeamMemberContainer>
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
