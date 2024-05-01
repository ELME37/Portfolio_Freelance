import Link from "next/link";

import styled from "styled-components";

import { colors } from "@/utils/colors";
import { cormorantGaramond } from "@/utils/fonts";

export const Root = styled.header`
    width: 100%;
    height: 120px;
    padding: 20px 0;
    position: fixed;
    top: 0;
    z-index: 999;
    background: ${colors.darkbg};
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
`;

export const Label = styled.label`
    display: none;
    cursor: pointer;

    @media (max-width: 800px) {
        display: inline-flex;
    }
`;

export const Svg = styled.svg`
    width: 40px;
    height: 40px;
    fill: ${colors.gold};
`;

export const Input = styled.input`
    display: none;
`;

export const Navigation = styled.nav`
    @media (max-width: 800px) {
        width: 100%;
        top: -350px;
        max-height: 0;
        opacity: 0;
        overflow: hidden;
        transition: top 1s ease-in-out, opacity 0.5s ease-in-out 0.2s, max-height 1s ease-in-out;

        ${Input}:checked ~ & {
            max-height: 100%;
            top: 0;
            opacity: 1;
        }
    }
`;

export const List = styled.ul`
    display: flex;

    @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        padding-top: 20px;
        width: 100%;
        background-color: rgba(40, 40, 40, 1);
    }
`;

export const Item = styled.li`
    padding: 0 10px;

    @media (max-width: 800px) {
        padding: 6px 0;
        width: 100%;
        text-align: center;
        border-bottom: 2px ${colors.gold} dotted;
    }
`;

export const LinkHeader = styled(Link)`
`;

export const Span = styled.span`
    font-size: 18px;
    font-family: var(--cormorant-garamond), serif;
    text-transform: capitalize;
    letter-spacing: 1px;
    color: ${colors.white};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        color: ${colors.gold};
    }

     ${props => props.$active && `
        color: ${colors.gold};
        font-weight: bold;
    `}

    @media (max-width: 800px) {
        font-size: 16px;
        text-transform: uppercase;
    }
`;