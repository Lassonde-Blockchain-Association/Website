import styled from "styled-components";

export const RoadmapContainer = styled.body`
  /* background-color: aqua; */
  width: 100%;
  height: 100vh;
  /* padding: 40px 20px; */
  justify-content: center;
  font-family: "Spline Sans Mono", monospace;
  font-size: 16px;
  color: rgb(53, 53, 53);
  background: grey;
  position: relative;
`;

export const Background = styled.video`
  margin: 0px;
  width: 100%;
  // height: 100%;
  object-fit: contain;
`;

export const TimelineH3 = styled.h3`
  padding-top: 0.25em;
`;

export const TimelineH1 = styled.h1`
  text-align: left;
  margin: 10px 200px 0 200px;
`;
