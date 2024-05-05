import React from 'react';

import { quicksand } from "@/utils/fonts";
import { cormorantGaramond } from "@/utils/fonts";

import { Root, ContainerImage, Icon, ContainerChildren, TitleCard } from './cardService.styled';

export default function CardService ( { logo, content, title } ) {
    return (
        <Root>
            <ContainerImage>{logo}</ContainerImage>
            <ContainerChildren className={quicksand.variable}>{content}</ContainerChildren>
            <TitleCard className={cormorantGaramond.variable}>{title}</TitleCard>
        </Root>
    );
};