import styled from "styled-components";

import { colors } from "@/utils/colors";
import { cormorantGaramond } from "@/utils/fonts";

export const Root = styled.section`
    width: 100%;
    margin: 0 auto;
    margin-top: 80px;
    background: ${colors.dark2};
    border: 2px ${colors.gold} solid;
    border-radius: 10px;
`;

export const ContainerHeaderChat = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 10px 20px;
    background: ${colors.darkbg};
    border-radius: 10px 10px 0 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Name = styled.p`
    font-size: 18px;
    font-family: var(--cormorant-garamond), serif;
    color: ${colors.gray};
`;

export const Statut = styled.span`
    position: relative;
    font-size: 14px;
    font-family: var(--cormorant-garamond), serif;
    font-style: italic;
    color: ${colors.gray};
    padding-left: 16px;

    &::before {
        content: '';
        position: absolute;
        top: 5px;
        left: 0;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: green;
    }
`;

export const ContainerBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 10px;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const ContainerIntro = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 100%;

    @media (max-width: 1000px) {
        width: 100%;
    }
`;

export const Intro = styled.p`
    font-size: 26px;
    font-family: var(--cormorant-garamond), serif;
    font-style: italic;
    text-align: center;
    color: ${colors.gray};
    padding: 0 30px;

    @media (max-width: 1000px) {
        padding: 50px 10px;
    }
`;

export const ContainerChat = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100% - 300px);
    min-height: 400px;
    max-height: 560px;
    padding-left: 10px;
    border-left: 2px ${colors.gold} dotted;
    overflow-y: auto;

    @media (max-width: 1000px) {
        width: 100%;
        border-left: none;
    }

    @media (max-width: 600px) {
        max-height: 800px;
        padding-left: 0;
    }
`;

export const Button = styled.button`
    font-size: 16px;
    font-family: var(--cormorant-garamond), serif;
    border: 2px ${colors.darkbg} solid;
    padding: 10px 20px;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.5s;
    color: ${colors.white};
    background: none;
    cursor: pointer;

    &:hover {
        color: ${colors.darkbg};
    }
`;