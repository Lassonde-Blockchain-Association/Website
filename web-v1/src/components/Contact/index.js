import React from "react";
import {
  ContactH1,
  ContactWrap,
  Container,
  Text,
  ContactLink,
  TextWrapper,
  Background,
  TextContainer,
  Icon,
  ContactNav,
  NavBtn,
  NavBtnLink,
  Discordbutton,
  Discord,
} from "./ContactElements";

import { FaMailBulk, FaGithub, FaPencilAlt, FaDiscord } from "react-icons/fa";
import videoBg from "../../video/bc2.mp4";
import Navbar from "../Navbar";

const Contact = () => {
  return (
    <>
      <Container>
        {/* <ContactNav>
          <Icon to="/">LBC</Icon>
          <NavBtn>
            <NavBtnLink to="/contact">Contact Us</NavBtnLink>

            <Discordbutton href="https://discord.gg/JuCmutKUFM">
              <Discord>
                <FaDiscord />
              </Discord>
              Discord
            </Discordbutton>
          </NavBtn>
        </ContactNav> */}

        <ContactWrap>
          <Background src={videoBg} autoPlay loop muted />
          <TextContainer>
            <TextWrapper>
              <ContactH1>Contact us</ContactH1>
              <ContactH1>General Inquiries</ContactH1>

              <Text>
                Lassonde Blockchain’s mission is to create a community of
                blockchain innovators at York University. Feel free to reach out
                to us by email below:
              </Text>

              <ContactLink href="mailto:lassondeblockchain@gmail.com">
                <FaMailBulk /> lassondeblockchain@gmail.com
              </ContactLink>

              <ContactH1>Joining Our Club</ContactH1>

              <Text>
                Feel free to sign up to become a member via the Google Form
                below! It takes only 3 minutes to fill out and the information
                will help us make the most of our journey together. You can also
                stay up to date with us by joining our Discord server --
                non-official members are also welcome!
              </Text>

              <ContactLink href="https://forms.gle/mA3g2T4SzV5JKrkbA">
                <FaPencilAlt /> Member Sign Up
              </ContactLink>

              <ContactH1>For Code Geeks</ContactH1>

              <Text>
                If you would like take a backstage tour of our website, feel
                free to browse its code on GitHub. It is built using React and
                styled components.
              </Text>
              <ContactLink href="https://github.com/Lassonde-Blockchain-Club">
                <FaGithub /> Lassonde-Blockchain-Club
              </ContactLink>
              {/* <ContactLink>
                  <FaLinkedin /> Lassonde Blockchain Club
                </ContactLink> */}
            </TextWrapper>
          </TextContainer>
        </ContactWrap>
      </Container>
    </>
  );
};

export default Contact;
