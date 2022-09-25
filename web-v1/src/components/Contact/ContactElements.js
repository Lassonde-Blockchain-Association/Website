import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  font-family: "Spline Sans Mono", monospace;
  justify-content: center;
  width: 100%;
  min-height: 692px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  /* overflow: hidden; */
  /* min-height: 100vh;
  background: #e6f0ed; */
  /* margin-left: auto;
  margin-right: auto; */
`;
export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 26px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 16px;
  }
`;
export const Background = styled.video`
  width: 100%;
  height: 100vh;
  /* margin-top: -60px; */
  padding-top: -60px;
  z-index: 0;
  background-size: cover;
  background-color: black;
  filter: brightness(50%);
`;

export const ContactWrap = styled.div`
  height: 100%;
  /* width: max-content; */
  display: grid;
`;

export const TextContainer = styled.div`
  position: absolute;
  margin: 15%;
`;

export const TextWrapper = styled.div`
  /* padding-left: 20%; */
  color: white;
  /* text-decoration: none; */
  /* padding-top: 140px; */

  @media screen and (max-width: 480px) {
    padding-bottom: 0;
  }
`;

export const ContactH1 = styled.h1`
  /* margin-bottom: 40px; */
  font-size: 28px;
  font-weight: 700;
  /* text-align: center; */
`;

export const ContactLink = styled.a`
  /* padding-top: 20px; */
  /* height: 25px; */
  font-size: 14px;
  text-decoration: none;
`;

export const Text = styled.span`
  /* margin-top: 24px; */
  font-size: 18px;
`;
