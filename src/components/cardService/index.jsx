import React from 'react';

import { quicksand } from "@/utils/fonts";
import { cormorantGaramond } from "@/utils/fonts";

import { Root, ContainerImage, ContainerChildren, TitleCard, Span } from './cardService.styled';

export default function CardService ( { logo, content, title, affiche } ) {
    return (
        <Root>
            <ContainerImage>{logo}</ContainerImage>
            <ContainerChildren className={quicksand.variable}>{content}</ContainerChildren>
            <TitleCard className={cormorantGaramond.variable}>{title}</TitleCard>
            <Span>{affiche}</Span>
        </Root>
    );
};