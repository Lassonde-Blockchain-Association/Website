import styled from "styled-components";

export const HomeContainer = styled.div``;

export const Background = styled.video`
  width: 100%;
  height: 100vh;
  margin-top: -60px;
  z-index: 0;
  background-size: cover;
  background-color: black;
  filter: brightness(60%);
`;

export const MapBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const MapH1 = styled.h1``;
export const MapP = styled.p`
  padding: 0% 10%;
`;
