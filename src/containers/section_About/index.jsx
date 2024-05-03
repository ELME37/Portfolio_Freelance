import React from 'react';

import ChatBox from '../chatBox';

import { Root } from './about.styled';
import { ContainerTitleSection, LignTitle, TitleSection } from '../section_Home/home.styled';

export default function SectionAbout () {
    return (
        <Root id='about'>
            <ContainerTitleSection>
                <LignTitle></LignTitle>
                <TitleSection>A propos</TitleSection>
            </ContainerTitleSection>
            <ChatBox/>
        </Root>
    );
};