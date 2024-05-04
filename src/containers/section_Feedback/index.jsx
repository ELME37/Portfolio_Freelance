import React from 'react';

import { Root } from './feedback.styled';
import { ContainerTitleSection, LignTitle, TitleSection } from '../section_Home/home.styled';

export default function SectionFeedback () {
    return (
        <Root id='feedback'>
            <ContainerTitleSection>
                <LignTitle></LignTitle>
                <TitleSection>Feedback</TitleSection>
            </ContainerTitleSection>
        </Root>
    );
};