import React from 'react';

import { Root } from './portfolio.styled';
import { ContainerTitleSection, LignTitle, TitleSection } from '../section_Home/home.styled';

export default function SectionPortfolio () {
    return (
        <Root id='portfolio'>
            <ContainerTitleSection>
                <LignTitle></LignTitle>
                <TitleSection>Porfolio</TitleSection>
            </ContainerTitleSection>
        </Root>
    );
};