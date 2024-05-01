import Link from "next/link";

import styled from "styled-components";

import { colors } from "@/utils/colors";
import { quicksand } from "@/utils/fonts";

export const Root = styled.footer`
    display: flex;
    flex-direction: column;
`;

export const ContainerGeneral = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 40px 0 20px 0;
    margin-bottom: 30px;

    @media (max-width: 1000px) {
        flex-direction: column;
        margin-bottom: 0;
    }
`;

export const ContainerDeveloper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 1000px) {
        align-items: center;
    }
`;

export const ContainerNavigationAndLinks = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;

    @media (max-width: 1000px) {
        align-items: center;
    }
`;

export const Text = styled.p`
    font-size: 14px;
    font-family: var(--quicksand), serif;
    letter-spacing: 1px;
    color: ${colors.gray};
    margin-top: 10px;

    @media (max-width: 1000px) {
        text-align: center;
        margin: 30px 0;
    }
`;

export const Copyright = styled(Text)`
    font-size: 14px;
    font-family: var(--quicksand), serif;
    text-transform: capitalize;
    text-align: center;
    letter-spacing: 1px;
    color: ${colors.gray};
    padding: 30px 0;
    border-top: 1px ${colors.gray} solid;
`;

export const Navigation = styled.nav`
    @media (max-width: 1000px) {
        margin: 0 0 30px 0;
    }
`;

export const List = styled.ul`
    display: flex;

    @media (max-width: 1000px) {
        justify-content: center;
        flex-wrap: wrap;
    }
`;

export const Item = styled.li`
    padding: 0 10px;

    @media (max-width: 1000px) {
        margin: 6px 0;
    }
`;

export const NavigationLink = styled(Link)`
    font-size: 14px;
    font-family: var(--quicksand), serif;
    text-transform: capitalize;
    letter-spacing: 1px;
    text-wrap: nowrap;
    color: ${colors.gray};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        color: ${colors.gold};
    }
`;

export const ContainerLinks = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media (max-width: 300px) {
        justify-content: center;
        flex-wrap: wrap;
    }
`;

export const NetworkLink = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    cursor: pointer;
`;

export const Svg = styled.svg`
    width: 30px;
    height: 30px;
`;

export const SvgLinkedIn = styled(Svg)`
    fill: rgb(0, 119, 181);
`;

export const SvgGitHub = styled(Svg)`
    fill: ${colors.white};
`;

export const SvgEmail = styled(Svg)`
    fill: ${colors.gold};
`;

export const Span = styled.span`
    font-size: 12px;
    font-family: var(--quicksand), serif;
    text-transform: capitalize;
    text-align: center;
    letter-spacing: 1px;
    color: ${colors.gray};
    margin-top: 10px;
`;

export const Image = styled.img`
    width: 30px;
`;