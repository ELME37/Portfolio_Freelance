import React from 'react';

import FormContact from '../formContact';

import { cormorantGaramond } from "@/utils/fonts";
import { quicksand } from "@/utils/fonts";

import { Root, ContainerText, Question, Text } from './contact.styled';
import { ContainerTitleSection, LignTitle, TitleSection } from '../section_Home/home.styled';

export default function SectionContact () {
    return (
        <Root id='contact'>
            <ContainerTitleSection>
                <LignTitle></LignTitle>
                <TitleSection>Contact</TitleSection>
            </ContainerTitleSection>
            <ContainerText>
                <Question className={cormorantGaramond.variable}>Prêt à concrétiser votre vision ?</Question>
                <Text className={quicksand.variable}>N&apos;hésitez plus ! Contactez-moi dès maintenant pour transformer vos idées en réalité. Remplissez le formulaire ci-dessous et commençons dès aujourd&apos;hui à façonner l&apos;avenir de votre projet.</Text>
            </ContainerText>
            <FormContact/>
        </Root>
    );
};