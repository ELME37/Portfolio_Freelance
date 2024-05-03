import React from 'react';
import Link from 'next/link';

import NetworkLinks from '@/components/networkLinks';
import Button from '@/components/button';

import { Root, ContainerTitleSection, LignTitle, TitleSection, ContainerDeveloper, ContainerDeveloperDescription, Title,
    ContainerDescription, Text, TextJob, ContainerImage, Image, ContainerCitation, Citation, LignCitation } from './home.styled';

export default function SectionHome () {
    return (
        <Root id='home'>
            <ContainerTitleSection>
                <LignTitle></LignTitle>
                <TitleSection>Développeur Web Freelance Full Remote</TitleSection>
            </ContainerTitleSection>
            <ContainerDeveloper>
                <ContainerDeveloperDescription>
                    <Title>Mickaël TURQUAIS</Title>
                    <ContainerDescription>
                        <NetworkLinks/>
                        <TextJob>Développeur front-end spécialisé en ReactJS / NextJS, créateur de solutions web innovantes et performantes.</TextJob>
                        <Text>À la recherche d&apos;un partenaire pour concrétiser vos projets web ? Ensemble, nous pouvons créer des solutions innovantes et personnalisées qui répondent à vos besoins. Contactez-moi pour commencer cette aventure.</Text>
                        <Link href="/#portfolio">
                            <Button>
                                Portfolio
                            </Button>
                        </Link>
                    </ContainerDescription>
                </ContainerDeveloperDescription>
                <ContainerImage>
                    <Image src="/assets/images/cerf.png" alt="Mickaël" />
                </ContainerImage>
            </ContainerDeveloper>
            <ContainerCitation>
                <Citation>&quot;L&apos;innovation naît de la collaboration. En tant que développeur web, chaque ligne de code que nous écrivons est une invitation à repousser les limites de ce qui est possible, en travaillant main dans la main avec nos clients pour créer des solutions technologiques qui transforment leur vision en réalité.&quot;</Citation>
                <LignCitation></LignCitation>
            </ContainerCitation>
        </Root>
    );
};