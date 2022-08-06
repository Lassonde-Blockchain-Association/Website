import React from "react";
import {
  Icon,
  ContactH1,
  ContactWrap,
  Container,
  Text,
  ContactLink,
  InfoRow,
  ImgWrap,
  Img,
  Column1,
  Column2,
  TextWrapper,
  SocialMediaRow,
  SocialMediaColumn,
  Circle,
  SocialIcons,
  SocialIconLink,
  HorizontalLine,
  VerticalLine,
} from "./ContactElements";

import {
  FaMailBulk,
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaYoutube,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Contact = ({ imgStart, img }) => {
  return (
    <>
      <Container>
        <ContactWrap>
          <Icon to="/">Lassonde Blockchain</Icon>

          <InfoRow imgStart={imgStart}>
            {/* left side */}
            <Column1>
              <TextWrapper>
                <ContactH1>Contact us</ContactH1>
                <ContactH1>General Inquiries</ContactH1>

                <Text>
                  Lassonde Blockchain’s mission is to create a community of
                  blockchain innovators at York University. Feel free to reach
                  out to us by email below:
                </Text>

                <ContactLink>
                  {" "}
                  <a href="mailto:lassondeblockchain@gmail.com">
                    <FaMailBulk /> lassondeblockchain@gmail.com
                  </a>{" "}
                </ContactLink>

                <ContactH1>For Code/Networking Geeks</ContactH1>
                <Text>
                If you would like take a backstage tour of our website, feel 
                free to browse its code on GitHub. It is built using React 
                and styled components.
                </Text>
                <ContactLink>
                  <a href="https://github.com/Lassonde-Blockchain-Club">
                    <FaGithub /> Lassonde-Blockchain-Club{" "}
                  </a>
                </ContactLink>
                {/* <ContactLink>
                  <FaLinkedin /> Lassonde Blockchain Club
                </ContactLink> */}
              </TextWrapper>
            </Column1>
            {/* right side */}
            {/* find a img/drawing */}
            <Column2>
              {/* <a>
                <ImgWrap>
                  <Img src={img} />
                </ImgWrap>
              </a> */}
              <SocialMediaRow>
                <SocialMediaColumn>
                  <Circle>
                    <SocialIcons>
                      <SocialIconLink href="mailto:lassondeblockchain@gmail.com" target="" aria-label="Mail">
                        <FaMailBulk />
                      </SocialIconLink>
                    </SocialIcons>
                  </Circle>
                  <VerticalLine />
                  <Circle>
                  </Circle>
                </SocialMediaColumn>
                <SocialMediaColumn>
                  <div style={{marginTop:200}}></div>
                  <HorizontalLine />
                </SocialMediaColumn>
                <SocialMediaColumn>
                  <div style={{marginTop:200}}></div>
                  <Circle>
                    <SocialIcons>
                      <SocialIconLink href="https://github.com/Lassonde-Blockchain-Club" target="" aria-label="GitHub">
                        <FaGithub />
                      </SocialIconLink>
                    </SocialIcons>
                  </Circle>
                </SocialMediaColumn>
              </SocialMediaRow>
            </Column2>
          </InfoRow>
        </ContactWrap>
      </Container>
    </>
  );
};

export default Contact;
