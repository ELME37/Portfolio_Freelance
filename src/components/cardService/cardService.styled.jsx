import styled from "styled-components";

import { colors } from "@/utils/colors";
import { cormorantGaramond } from "@/utils/fonts";
import { quicksand } from "@/utils/fonts";

export const Root = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(100% / 2 - 40px);
    height: 250px;
    margin-bottom: 80px;
    background: ${colors.white};
    border: 4px ${colors.gold} solid;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        height: 380px;

        @media (max-width: 390px) {
            height: 400px;
        }

        @media (max-width: 360px) {
            height: 420px;
        }
    }

    @media (max-width: 1200px) {
        width: calc(100% / 2 - 30px);
    }

    @media (max-width: 880px) {
        width: calc(100% / 2 - 20px);
    }

    @media (max-width: 750px) {
        width: calc(100% / 2 - 10px);
    }

    @media (max-width: 680px) {
        width: calc(80% - 20px);
    }

    @media (max-width: 580px) {
        width: calc(90% - 20px);
    }

    @media (max-width: 480px) {
        width: calc(100% - 20px);
    }
`;

export const ContainerImage = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    inset: 20px 20px 50px 20px;
    background: ${colors.white};
    border-radius: 15px;
    transition: 0.5s;
    z-index: 1;

    ${Root}:hover & {
        inset: -60px 80px 340px 80px;
        box-shadow: 0 0 0 6px ${colors.darkbg};
        background: ${colors.gold};

        @media (max-width: 390px) {
            inset: -60px 80px 360px 80px;
        }

        @media (max-width: 360px) {
            inset: -60px 60px 380px 60px;
        }

        @media (max-width: 320px) {
            inset: -60px 40px 380px 40px;
        }
    }
`;

export const Icon = styled.svg`
    position: absolute;
    width: 80%;
    height: 80%;
    fill: ${colors.gold};

    ${Root}:hover & {
        fill: ${colors.white};
    }
`;

export const ContainerChildren = styled.div`
 
`;

export const List = styled.ul`
    padding: 0 20px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-50px);
    transition: 0.5s;

    ${Root}:hover & {
        opacity: 1;
        visibility: visible;
        transform: translateY(10px);
    }
`;

export const Item = styled.li`
    font-size: 14px;
    font-family: var(--quicksand), serif;
    text-align: left;
    color: ${colors.darkbg};
    list-style: square;

    @media (max-width: 360px) {
        font-size: 12px;
    }
`;

export const TitleCard = styled.span`
    position: absolute;
    bottom: 8px;
    width: 80%;
    font-size: 18px;
    font-family: var(--cormorant-garamond), serif;
    font-weight: bold;
    text-align: center;
    color: ${colors.darkbg};
    transition: 0.5s;

    ${Root}:hover & {
        bottom: -40px;
        padding: 5px 20px;
        box-shadow: 0 0 0 6px ${colors.darkbg};
        border-radius: 15px;
        background: ${colors.gold};
        color: ${colors.white};

        @media (max-width: 680px) {
            bottom: -20px;
            padding: 10px 20px;
        }

        @media (max-width: 450px) {
            bottom: -30px;
        }

        @media (max-width: 420px) {
            bottom: -40px;
        }

        @media (max-width: 360px) {
            bottom: -30px;
            padding: 5px 10px;
        }
    }

    @media (max-width: 360px) {
        font-size: 16px;
    }

`;

export const Span = styled.span`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 14px;
    font-family: var(--quicksand), serif;
    font-style: italic;
    font-weight: bold;
    text-align: center;
    color: ${colors.darkbg};
    opacity: 1;
    visibility: visible;
    z-index: 9;
    transition: 0.5s;

    ${Root}:hover & {
        opacity: 0;
        visibility: hidden;
    }
`;