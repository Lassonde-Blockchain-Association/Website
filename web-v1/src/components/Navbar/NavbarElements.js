import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

// TODO:
// 1. Less space btwn navlinks
// 2. Navlinks squeeze to the middle, keep LBC logo on the left
// 3. Change LBC font style
// 4. Change Navlink font style
// 5. Make 'LBC Home' button 

export const Nav = styled.nav`
    background-color: #F0FFF0;
    transition: background-color 200ms linear;
    height: 90px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`;

export const NavLink = styled(Link)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color: #15cdfc;
    }
`


// export const NavbarContainer = styled.div`
//     color: #fff;
//     display: flex;
//     align-items: center;
//     text-decoration: none;
//     padding: 0 1rem;
//     height: 100%;
//     cursor: pointer;

//     &.active {
//         color: #15cdfc;
//     }
// `;

export const Bars = styled(FaBars)`
display: none;
color: #fff;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    
    @media screen and (max-width: 768) {
        display: none;
    } 
     `

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    color: #fff;
    border:none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out; 
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
    `;

// export const 

// export const NavLogo = styled(LinkR)``;

// export const MobileIcon = styled.div``;

// export const NavItem = styled.li``;

// export const NavLink = styled(NavLink)``;

// export const NavBtn = styled.nav``;
// export const NavBtnLink = styled(Link)``;
export const NavH1 = styled.h2`
    color: #000;
    font-size: 30px;
    font-family: 'Bold-700';
    /* font-size: 30px; */
`;