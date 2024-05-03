import styled from "styled-components";

import { colors } from "@/utils/colors";
import { quicksand } from "@/utils/fonts";

export const ContainerMessageUser = styled.div`
    display: flex;
    margin: 8px;
    justify-content: start;
`;

export const ContainerMessageBot = styled(ContainerMessageUser)`
    justify-content: flex-end;
`;

export const MessageUserStyle = styled.p`
    max-width: 65%;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 10px;
    font-family: var(--quicksand), serif;
    background: ${colors.gray};
    color: ${colors.darkbg};
    font-style: italic;

    @media (max-width: 600px) {
        max-width: 80%;
    }

    @media (max-width: 450px) {
        max-width: 100%;
    }
`;

export const MessageBotStyle = styled(MessageUserStyle)`
    background: ${colors.gold};
    color: ${colors.white};
`;