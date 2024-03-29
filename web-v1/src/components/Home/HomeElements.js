import styled from "styled-components";

export const HomeContainer = styled.div`
  font-family: "Spline Sans Mono", monospace;
`;

export const Background = styled.video`
  /* background-image: url(../../video/bc2.gif); */
  width: 100%;
  height: 100vh;
  margin-top: -60px;
  z-index: 0;
  background-size: cover;
  background-color: black;
  filter: brightness(90%);
  background-position: center top;
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
  text-align: center;
`;

export const MapH1 = styled.h1``;
export const MapP = styled.p`
  padding: 0% 10%;
`;
