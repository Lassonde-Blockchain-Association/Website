import styled from "styled-components";

export const VisionContainer = styled.div``;

export const VisionH1 = styled.h1``;

export const VisionH2 = styled.h2``;

export const VisionP = styled.p`
    word-wrap: break-word;
    display: flex;
`;

export const ValueWrapper = styled.div`
    // display: grid;
    // max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 100px;
    justify-content: center;
`;

export const ValueRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    // grid-auto-columns: minmax(auto, lfr);
    // align-items: center;
    // grid-template-areas: 'col1 col2 col3 col4';
    @media only screen and (max-width: 600px){
        flex-direction: column;
    }
`;

export const Column1 = styled.div`
    display: flex;
    flex-direction: column;
    // max-width: 500px;
`;
