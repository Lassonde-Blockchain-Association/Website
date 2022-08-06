import styled from "styled-components";

export const VisionContainer = styled.div`
  height: 80vh;
  /* border: 1px solid black; */
  /* font-family: "Spline Sans Mono", monospace; */
  /* letter-spacing: -1px; */

  display: flex;
  flex-direction: column;
  /* margin: 20px 200px 0 200px; */
`;

export const VisionH1 = styled.h1`
  margin: 10px 200px 0 200px;
`;

export const VisionStatement = styled.p`
  margin: 10px 200px 0 200px;
`;

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
  justify-content: center;
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

export const VisionPhoto = styled.img`
  height: 150px;
  width: 150px;
  // border-radius: 25px;
  padding: 10px;
  align-self: center;
  display: inline-block;
  vertical-align: top;

  &:hover {
    background-color: #fff;
  }
  @media only screen and (max-width: 600px) {
    height: 150px;
    width: 150px;
  }
`;
