import styled from "styled-components";

import { colors } from "@/utils/colors";

export const ContainerLinks = styled.div`
    display: flex;
    align-items: flex-end;

    @media (max-width: 320px) {
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
    text-align: center;
    letter-spacing: 1px;
    color: ${colors.gray};
    margin-top: 10px;
    text-wrap: nowrap;
`;

export const Image = styled.img`
    width: 30px;
`;