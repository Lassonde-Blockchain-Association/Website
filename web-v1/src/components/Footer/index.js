import React from "react";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIconLink,
  SocialIcons,
} from "./FooterElements";
import {
  FaMailBulk,
  FaLinkedin,
  FaGithub,
  //   FaInstagram,
  //   FaFacebookF,
} from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>
                LBC
              </SocialLogo>

              <WebsiteRights>
                lassondeblockchain © {new Date().getFullYear()} All rights
                reserved.
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  href="mailto:lassondeblockchain@gmail.com"
                  target=""
                  aria-label="Email"
                >
                  <FaMailBulk />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.linkedin.com/school/lassonde-school-of-engineering-york-university/"
                  target=""
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink
                  href="https://github.com/Lassonde-Blockchain-Club"
                  target=""
                  aria-label="Github"
                >
                  <FaGithub />
                </SocialIconLink>
                {/* <SocialIconLink
                  href="https://www.facebook.com/samson.chan.9"
                  target=""
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.instagram.com/samsonnchan/"
                  target=""
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink> */}
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
