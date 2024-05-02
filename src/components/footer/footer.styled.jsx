import Link from "next/link";

import styled from "styled-components";

import { colors } from "@/utils/colors";
import { quicksand } from "@/utils/fonts";

export const Root = styled.footer`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
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