import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  font-family: "Spline Sans Mono", monospace;
  min-height: 100vh;
  background: #e6f0ed;
`;

export const ContactWrap = styled.div`
  height: 100%;
  display: grid;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
`;

export const Icon = styled(Link)`
  /* margin-left: 30px; */
  text-align: center;
  margin-top: 20px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 30px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 16px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  padding-top: 140px;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
`;
export const TextWrapper = styled.div`
  max-width: 540px;
  /* padding-top: 140px; */
  padding-bottom: 60px;

  @media screen and (max-width: 480px) {
    padding-bottom: 0;
  }
`;

export const ContactH1 = styled.h1`
  /* margin-bottom: 40px; */
  color: black;
  font-size: 28px;
  font-weight: 700;
  /* text-align: center; */
`;

export const ContactLink = styled.div`
  padding-top: 20px;
  /* height: 25px; */
  font-size: 14px;
  text-decoration: none;
`;

export const Text = styled.span`
  /* margin-top: 24px; */
  font-size: 18px;
`;

export const Column1 = styled.div`
  /* margin-bottom: 10px; */
  padding: 0 50px;
  grid-area: col1;

  @media screen and (max-width: 480px) {
    margin-bottom: 0;
  }
`;

export const Column2 = styled.div`
  margin-bottom: 30px;
  /* margin-top: 100px; */
  padding: 0 50px;
  grid-area: col2;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;
export const Img = styled.img`
  width: 100%;
  margin: 0 0 20px 0;
  padding-right: 0;
  transition: all 0.5s ease-in-out;
  border-radius: 10px;
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  height: 100px;
  margin: 0 0 100px 0;
  background-color: green;
  border-radius: 50%;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  margin: 0 50px 0 20px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 60px;
  transition: all 0.2s ease-in-out;

  &:hover {
    // font-size:30px;
    color: #cccccc;
  }
`;
