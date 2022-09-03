import styled from "styled-components";

export const Map = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Background = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
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

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  /* background-color: #00000cc; */
  background-color: rgba(0, 0, 0, 0.4);
`;
export const MapH1 = styled.h1`
  /* font-size: 30px; */
  /* text-align: center; */
`;
export const MapP = styled.p`
  /* font-size: 16px;
  text-align: center; */
`;

// export const MapContainer = styled.div`
//   width: 70%;
// `;
