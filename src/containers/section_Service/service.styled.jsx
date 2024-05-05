import styled from "styled-components";

import { colors } from "@/utils/colors";
import { cormorantGaramond } from "@/utils/fonts";
import { quicksand } from "@/utils/fonts";

export const Root = styled.section`
    width: 100%;
    padding-top: 200px;
`;

export const ContainerCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 60%;
    margin: 0 auto;

    @media (max-width: 1200px) {
        width: 70%;
    }

    @media (max-width: 1000px) {
        width: 80%;
    }

    @media (max-width: 880px) {
        width: 90%;
    }

    @media (max-width: 750px) {
        width: 100%;
    }

    @media (max-width: 680px) {
        justify-content: center;
    }
`;

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 80px auto;

    @media (max-width: 650px) {
        width: 90%;
    }
    
    @media (max-width: 500px) {
        width: calc(100% - 20px);
    }
`;

export const Text = styled.p`
    font-size: 20px;
    font-family: var(--quicksand), serif;
    text-align: left;
    color: ${colors.gray};
    margin-top: 20px;

    @media (max-width: 500px) {
        font-size: 16px;
    }
`;

export const Question = styled.p`
    font-size: 26px;
    font-family: var(--cormorant-garamond), serif;
    text-align: center;
    text-decoration: underline;
    text-underline-offset: 0.2em;
    color: ${colors.white};
    margin-bottom: 30px;

    @media (max-width: 500px) {
        font-size: 24px;
    }
`;

export const LignService = styled.div`
    width: 80px;
    height: 8px;
    background: ${colors.gold};
    margin: 30px auto;
`;
