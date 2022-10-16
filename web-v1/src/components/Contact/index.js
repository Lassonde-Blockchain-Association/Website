import React from "react";
import {
  ContactH1,
  ContactH2,
  ContactWrap,
  Container,
  Text,
  ContactLink,
  TextWrapper,
  Background,
  TextContainer,
} from "./ContactElements";

import { FaMailBulk, FaGithub, FaPencilAlt } from "react-icons/fa";
import videoBg from "../../video/bc2.mp4";

const Contact = () => {
  return (
    <>
      <Container>
        <ContactWrap>
          <Background src={videoBg} autoPlay loop muted />

          <ContactH1>Contact Us</ContactH1>
          <TextContainer>
            <TextWrapper>
              <ContactH2>General Inquiries</ContactH2>

              <Text>
                Lassonde Blockchain’s mission is to create a community of
                blockchain innovators at York University. Feel free to reach out
                to us by email below:
              </Text>
            </TextWrapper>

            <TextWrapper>
              <ContactH2>Joining Our Club</ContactH2>

              <Text>
                Feel free to sign up to become a member via the Google Form
                below! It takes only 3 minutes to fill out and the information
                will help us make the most of our journey together. You can also
                stay up to date with us by joining our Discord server --
                non-official members are also welcome!
              </Text>
            </TextWrapper>

            <TextWrapper>
              <ContactH2>For Code Geeks</ContactH2>
              <Text>
                If you would like take a backstage tour of our website, feel
                free to browse its code on GitHub. It is built using React and
                styled components.
              </Text>
            </TextWrapper>

            <TextWrapper>
              <ContactLink href="mailto:lassondeblockchain@gmail.com">
                <br></br>
                <FaMailBulk /> lassondeblockchain@gmail.com
              </ContactLink>
            </TextWrapper>

            <TextWrapper>
              <ContactLink href="https://forms.gle/mA3g2T4SzV5JKrkbA">
                <br></br>
                <FaPencilAlt /> Member Sign Up
              </ContactLink>
            </TextWrapper>

            <TextWrapper>
              <ContactLink href="https://github.com/Lassonde-Blockchain-Club">
                <br></br>
                <FaGithub /> Lassonde-Blockchain-Club
              </ContactLink>
            </TextWrapper>
          </TextContainer>
        </ContactWrap>
      </Container>
    </>
  );
};

export default Contact;
