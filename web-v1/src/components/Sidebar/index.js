import React from "react";
import { FaDiscord } from "react-icons/fa";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  DiscordButton,
  DiscordIcon,
  Image,
} from "./SidebarElements";

import marker from "../../images/marker.gif";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        {/* <CloseIcon /> */}
        <Image src={marker} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" onClick={toggle} offset={-50}>
            Home
          </SidebarLink>
          <SidebarLink to="vision" onClick={toggle} offset={-120}>
            Vision
          </SidebarLink>
          <SidebarLink to="timeline" onClick={toggle} offset={-130}>
            Roadmap
          </SidebarLink>
        </SidebarMenu>

        <SideBtnWrap>
          <SidebarRoute to="contact" onClick={toggle} offset={-74}>
            Contact us
          </SidebarRoute>
        </SideBtnWrap>
        <SideBtnWrap>
          <DiscordButton href="https://discord.gg/JuCmutKUFM">
            <DiscordIcon>
              <FaDiscord />
            </DiscordIcon>
            Discord
          </DiscordButton>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
