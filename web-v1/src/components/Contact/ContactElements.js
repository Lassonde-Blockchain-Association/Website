import styled from "styled-components";

export const Container = styled.div`
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
export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
`;
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 140px;
  padding-bottom: 60px;

  @media screen and (max-width: 480px) {
    padding-bottom: 0;
  }
`;

export const ContactH1 = styled.h1`
  margin-bottom: 40px;
  color: black;
  font-size: 28px;
  font-weight: 400;
  text-align: center;
`;

export const ContactLink = styled.div`
  padding-top: 20px;
  height: 25px;
  font-size: 14px;
  /* color: #fff; */
`;

export const Text = styled.span`
  margin-top: 24px;
  /* color: #fff; */
  font-size: 14px;
`;

export const Column1 = styled.div`
  margin-bottom: 10px;
  padding: 0 15px;
  grid-area: col1;

  @media screen and (max-width: 480px) {
    margin-bottom: 0;
  }
`;

export const Column2 = styled.div`
  margin-bottom: 10px;
  padding: 0 15px;
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
