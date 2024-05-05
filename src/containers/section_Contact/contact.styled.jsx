import styled from "styled-components";

import { colors } from "@/utils/colors";
import { cormorantGaramond } from "@/utils/fonts";
import { quicksand } from "@/utils/fonts";

export const Root = styled.section`
    width: 100%;
    padding-top: 200px;
`;

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 50px auto;

    @media (max-width: 650px) {
        width: 90%;
      }
    
      @media (max-width: 500px) {
        width: calc(100% - 20px);
      }
`;

export const Question = styled.p`
    font-size: 26px;
    font-family: var(--cormorant-garamond), serif;
    text-align: center;
    color: ${colors.white};
`;

export const Text = styled.p`
    font-size: 20px;
    font-family: var(--quicksand), serif;
    text-align: center;
    color: ${colors.gray};
    margin-top: 20px;
`;