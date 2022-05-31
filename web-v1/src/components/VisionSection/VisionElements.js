import styled from "styled-components";

export const VisionContainer = styled.div`
  /* height: 100vh; */
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  /* margin: 80px; */
  margin: -80px 200px 0 200px;
`;

export const VisionH1 = styled.h1``;

export const VisionH2 = styled.h2``;

export const VisionP = styled.p`
  word-wrap: break-word;
  display: flex;
`;

export const ValueWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding: 0 100px;
  justify-content: center;
`;

export const ValueRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Column1 = styled.div`
  flex-direction: column;
  margin: 20px;
  width: 400px;
  height: 150px;
`;
