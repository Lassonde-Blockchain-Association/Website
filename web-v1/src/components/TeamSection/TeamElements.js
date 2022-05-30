import styled from "styled-components";
// import {StyleSheet, Text, View} from "react-native";
/* 
TODO: 
1. 3 members of the team per row
2. When the screen is size equals to mobile, the team members are displayed vertically
transition css 
*/

export const Team = styled.div`
  margin: 40px 100px;
  height: 100vh;
`;

export const TeamMemberPhoto = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 25px;
  padding: 20px;
  align-self: center;
  display: inline-block;
  vertical-align: top;

  @media only screen and (max-width: 600px) {
    height: 150px;
    width: 150px;
  }
`;

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 80px 10px;
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
  }
`;

export const TeamMemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #f5f5f5;
  width: 300px;
  height: 300px;
  // &:hover {
  //     background-color: #e6e6e6;
  // }
`;

export const TeamMemberDescription = styled.p`
  display: flex;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
  color: #000;
`;
