import styled from "styled-components";
// import {StyleSheet, Text, View} from "react-native";
/* 
TODO: 
1. 3 members of the team per row
2. When the screen is size equals to mobile, the team members are displayed vertically
transition css 
*/

export const Team = styled.div`
  font-family: "Spline Sans Mono", monospace;
  /* letter-spacing: -1px; */
  /* margin: 100px 200px 0 200px; */
  height: 100vh;
  padding: 5%;
  margin-top: -5px;
  background-color: #e2e7f1;
`;

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  color: #f5f5f5;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* margin: 10px 10px; */
  }
`;
export const TeamH1 = styled.h1`
  padding-left: 8%;
`;

export const TeamMemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px;
  /* border: 1px solid black; */
  border-radius: 5px;
  /* width: 300px;
  height: 300px; */
`;

export const TeamMemberPhoto = styled.img`
  height: 250px;
  width: 250px;
  border-radius: 25px;
  padding: 10px;
  align-self: center;
  display: inline-block;
  vertical-align: top;

  &:hover {
    background-color: #fff;
  }
  @media only screen and (max-width: 600px) {
    height: 250px;
    width: 250px;
  }
`;

export const TeamMemberDescription = styled.p`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  color: #000;
`;
