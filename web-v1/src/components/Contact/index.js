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
  Circle,
  SocialIcons,
  SocialIconLink,
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
                  In addition, feel free to explore our open-source projects on
                  GitHub and see our organization’s LinkedIn page below:
                </Text>
                <ContactLink>
                  <a href="https://github.com/Lassonde-Blockchain-Club">
                    <FaGithub /> Lassonde-Blockchain-Club{" "}
                  </a>
                </ContactLink>
                <ContactLink>
                  <FaLinkedin /> Lassonde Blockchain Club
                </ContactLink>
              </TextWrapper>
            </Column1>

            {/* right side */}
            {/* find a img/drawing */}
            <Column2>
              <InfoRow imgStart={imgStart}>
                {/* <Column1> */}
                <Circle>
                  <SocialIcons>
                    <SocialIconLink href="" target="" aria-label="Discord">
                      <FaDiscord />
                    </SocialIconLink>
                  </SocialIcons>
                </Circle>
                <Circle>
                  <SocialIcons>
                    <SocialIconLink href="" target="" aria-label="Instagram">
                      <FaInstagram />
                    </SocialIconLink>
                  </SocialIcons>
                </Circle>
                {/* </Column1> */}
                {/* <Column2> */}
                <Circle>
                  <SocialIcons>
                    <SocialIconLink href="" target="" aria-label="Facebook">
                      <FaFacebook />
                    </SocialIconLink>
                  </SocialIcons>
                </Circle>
                <Circle>
                  <SocialIcons>
                    <SocialIconLink href="" target="" aria-label="YouTube">
                      <FaYoutube />
                    </SocialIconLink>
                  </SocialIcons>
                </Circle>
                {/* </Column2> */}
              </InfoRow>
            </Column2>
          </InfoRow>
        </ContactWrap>
      </Container>
    </>
  );
};

export default Contact;
