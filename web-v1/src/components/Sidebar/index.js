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
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="vision" onClick={toggle}>
            Vision
          </SidebarLink>
          <SidebarLink to="timeline" onClick={toggle}>
            Roadmap
          </SidebarLink>
        </SidebarMenu>

        <SideBtnWrap>
          <SidebarRoute to="/contact">Contact us</SidebarRoute>
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
