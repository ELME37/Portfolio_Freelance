import styled from "styled-components";

import { colors } from "@/utils/colors";
import { quicksand } from "@/utils/fonts";

export const Root = styled.button`
    font-size: 16px;
    font-family: var(--quicksand), serif;
    border: 2px ${colors.gold} solid;
    padding: 20px 30px;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.5s;
    color: ${colors.white};
    background: none;
    cursor: pointer;

    &:hover {
        color: ${colors.gold};
    }
`;