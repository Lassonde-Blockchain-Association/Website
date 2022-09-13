import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const Background = styled.video`
  margin: 0px;
  width: 100%;
  // height: 100%;
  object-fit: contain;
  background-size: cover;
`;

export const MapBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const MapH1 = styled.h1`
  /* font-size: 30px; */
  /* text-align: center; */
`;
export const MapP = styled.p`
  /* font-size: 16px;
  text-align: center; */
`;
