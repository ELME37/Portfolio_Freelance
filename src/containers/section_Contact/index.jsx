import React from 'react';

import { Root } from './contact.styled';
import { ContainerTitleSection, LignTitle, TitleSection } from '../section_Home/home.styled';

export default function SectionContact () {
    return (
        <Root id='contact'>
            <ContainerTitleSection>
                <LignTitle></LignTitle>
                <TitleSection>Contact</TitleSection>
            </ContainerTitleSection>
        </Root>
    );
};