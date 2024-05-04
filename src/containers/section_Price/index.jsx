import React from 'react';

import { Root } from './price.styled';
import { ContainerTitleSection, LignTitle, TitleSection } from '../section_Home/home.styled';

export default function SectionPrice () {
    return (
        <Root id='price'>
            <ContainerTitleSection>
                <LignTitle></LignTitle>
                <TitleSection>Tarifs</TitleSection>
            </ContainerTitleSection>
        </Root>
    );
};