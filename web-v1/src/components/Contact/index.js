import React from "react";
import {
  ContactH1,
  ContactWrap,
  Container,
  TextContainer,
  Image,
  ContactLeft,
  ContactRight,
  SocialIconLink,
} from "./ContactElements";
import test from "../../images/test.gif";

import {
  FaLinkedinIn,
  FaInstagram,
  FaLink,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Container id="contact">
        <ContactH1>CONTACT US</ContactH1>

        <ContactWrap>
          {/* <ContactContainer> */}
          <ContactLeft>
            <Image src={test} />
          </ContactLeft>

          <ContactRight>
            <TextContainer>
              Lassonde Blockchain Assoication would love to hear and connect
              with you. Learn mroe about us!
              <br />
              <br />
              Our Office Hour is coming soon!!
            </TextContainer>

            <SocialIconLink href="https://www.linkedin.com/company/lassonde-blockchain-association/">
              <FaLinkedinIn />
            </SocialIconLink>
            <SocialIconLink href="https://www.instagram.com/lassondeblockchain/">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="https://twitter.com/lassondeLBA/">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="https://www.tiktok.com/@lassondeblockchain/">
              <FaTiktok />
            </SocialIconLink>
            <SocialIconLink href="https://linktr.ee/lassondeblockchain/">
              <FaLink />
            </SocialIconLink>
          </ContactRight>
        </ContactWrap>
      </Container>
    </>
  );
};

export default Contact;
