import styled from "styled-components";

import { colors } from "@/utils/colors";
import { cormorantGaramond } from "@/utils/fonts";
import { quicksand } from "@/utils/fonts";

export const Root = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 120px;
    margin-top: 80px;
`;

export const ContainerTitleSection = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
`;

export const LignTitle = styled.div`
    width: 50px;
    height: 8px;
    background: ${colors.gold};
    margin-right: 20px;
`;

export const TitleSection = styled.h2`
    font-size: 20px;
    font-family: var(--quicksand), serif;
    letter-spacing: 1px;
    color: ${colors.gray};
`;

export const ContainerDeveloper = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const ContainerDeveloperDescription = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    @media (max-width: 1000px) {
        width: 100%;
    }
`;

export const Title = styled.h1`
    font-size: 10vw;
    text-transform: uppercase;
    text-wrap: wrap;
    line-height: 1;
    font-family: var(--cormorant-garamond), serif;
    color: ${colors.white};
    margin: 50px 0;
    z-index: 9;

    @media (max-width: 1000px) {
        font-size: 14vw;
    }

    @media (max-width: 600px) {
        text-align: center;
    }
`;

export const ContainerDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 0 20px;
    border-left: 14px ${colors.gold} solid;

    @media (max-width: 600px) {
        border-left: none;
        align-items: center;
        margin-top: 50px;
        padding: 0;
    }
`;

export const TextJob = styled.p`
    font-size: 16px;
    font-family: var(--quicksand), serif;
    text-align: start;
    color: ${colors.gray};
    margin: 50px 0 20px 0;
`;

export const Text = styled.p`
    font-size: 16px;
    font-family: var(--quicksand), serif;
    text-align: start;
    color: ${colors.gray};
    margin-bottom: 50px;
`;

export const ContainerImage = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    aspect-ratio: 1;

    &::after {
        content: '';
        position: absolute;
        width: 460px;
        height: 460px;
        border: 16px ${colors.gold} solid;
        rotate: 45deg;

        @media (max-width: 1150px) {
            width: 400px;
            height: 400px;
        }

        @media (max-width: 1000px) {
            width: 60%;
            height: 60%;
        }

        @media (max-width: 600px) {
            width: 68%;
            height: 68%;
            border: 12px ${colors.gold} solid;
        }

        @media (max-width: 400px) {
            border: 10px ${colors.gold} solid;
        }
    }

    @media (max-width: 1000px) {
        margin-top: 50px;
    }

    @media (max-width: 600px) {
        margin-top: 80px;
    }
`;

export const Image = styled.img`
    position: absolute;
    top: -100px;
    width: 680px;
    border-radius: 73% 27% 19% 81% / 56% 71% 29% 44%;
    z-index: 1;
    
    @media (max-width: 1150px) {
        width: 590px;
        top: -50px;
    }

    @media (max-width: 1000px) {
        width: 85%;
        top: 0;
    }

    @media (max-width: 600px) {
        width: 98%;
        top: -6%;
    }

    @media (max-width: 600px) {
        width: 100%;
    }
`;

export const ContainerCitation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    padding: 100px;

    @media (max-width: 1000px) {
        margin-top: 0;
    }

    @media (max-width: 800px) {
        padding: 80px;
    }

    @media (max-width: 800px) {
        margin-top: 120px;
        padding: 0 60px;
    }

    @media (max-width: 600px) {
        margin-top: 100px;
        padding: 0;
    }
`;

export const Citation = styled.p`
    font-size: 30px;
    text-align: center;
    line-height: 1.25;
    font-family: var(--cormorant-garamond), serif;
    font-style: italic;
    color: ${colors.gray};

    @media (max-width: 600px) {
        font-size: 26px;
    }

    @media (max-width: 400px) {
        font-size: 22px;
    }
`;

export const LignCitation = styled.div`
    width: 80px;
    height: 8px;
    background: ${colors.gold};
    margin: 50px 0;
`;
