import React from 'react';

import { Root } from './service.styled';
import { ContainerTitleSection, LignTitle, TitleSection } from '../section_Home/home.styled';

export default function SectionService () {
    return (
        <Root id='service'>
            <ContainerTitleSection>
                <LignTitle></LignTitle>
                <TitleSection>Les services</TitleSection>
            </ContainerTitleSection>
        </Root>
    );
};