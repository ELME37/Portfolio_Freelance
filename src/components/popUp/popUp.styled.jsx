import styled, { keyframes } from "styled-components";

import { colors } from "@/utils/colors";

const slideIn = keyframes`
  from {
    bottom: -100px;
  }

  to {
    bottom: 25px;
  }
`;

export const Root = styled.div `
    position: fixed;
    bottom: -100px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${slideIn} 1s ease-in-out forwards 1s;
    z-index: 99;
`;

export const ContainerGlobal = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    background-color: ${colors.gray};
    padding: 10px 40px;
    border-radius: 10px;
    z-index: 9999;

    @media (max-width: 1000px) {
        width: 80%;
    }

    @media (max-width: 500px) {
        padding: 10px 20px;
    }

    @media (max-width: 400px) {
        padding: 10px 10px;
    }
`;

export const ContainerNews= styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SpanPopUp= styled.span `
    background: ${colors.gold};
    color: ${colors.dark2};
    padding: 6px 10px;
    border-radius: 4px;
    font-weight: bold;
`;

export const TextPopUp= styled.p `
    margin-left: 30px;
    font-style: italic;
    font-weight: bold;
    color: ${colors.dark2};

    @media (max-width: 400px) {
        margin-left: 16px;
    }
`;

export const Svg= styled.svg `
    width: 30px;
    height: 30px;
    fill: ${colors.dark2};
    cursor: pointer;
`;