import styled from "styled-components";

export const TimelineBody = styled.body`
  /* background-color: aqua; */
  font-family: "Spline Sans Mono", monospace;

  font-size: 16px;
  color: rgb(53, 53, 53);

  &:hover{
      transform: scale(1.02);
      transition: all 0.2s ease-in-out;
      /* opacity: 0.3; */
      cursor: pointer;
    }
`;

export const TimelineH3 = styled.h3`
  padding-top: 0.25em;
  
`;

export const TimelineH1 = styled.h1`
  margin: 10px 200px 0 200px;
`;
