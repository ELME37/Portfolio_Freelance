import React from 'react';

import CardService from '@/components/cardService';

import { Root, ContainerCard } from './service.styled';
import { ContainerTitleSection, LignTitle, TitleSection } from '../section_Home/home.styled';
import { Icon } from '@/components/cardService/cardService.styled';

export default function SectionService () {
    return (
        <Root id='service'>
            <ContainerTitleSection>
                <LignTitle></LignTitle>
                <TitleSection>Les services</TitleSection>
            </ContainerTitleSection>
            <ContainerCard>
                <CardService
                    title="Développement de thèmes WordPress"
                    logo={<Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><path d="M61.7 169.4l101.5 278C92.2 413 43.3 340.2 43.3 256c0-30.9 6.6-60.1 18.4-86.6zm337.9 75.9c0-26.3-9.4-44.5-17.5-58.7-10.8-17.5-20.9-32.4-20.9-49.9 0-19.6 14.8-37.8 35.7-37.8 .9 0 1.8 .1 2.8 .2-37.9-34.7-88.3-55.9-143.7-55.9-74.3 0-139.7 38.1-177.8 95.9 5 .2 9.7 .3 13.7 .3 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l77.5 230.4L249.8 247l-33.1-90.8c-11.5-.7-22.3-2-22.3-2-11.5-.7-10.1-18.2 1.3-17.5 0 0 35.1 2.7 56 2.7 22.2 0 56.7-2.7 56.7-2.7 11.5-.7 12.8 16.2 1.4 17.5 0 0-11.5 1.3-24.3 2l76.9 228.7 21.2-70.9c9-29.4 16-50.5 16-68.7zm-139.9 29.3l-63.8 185.5c19.1 5.6 39.2 8.7 60.1 8.7 24.8 0 48.5-4.3 70.6-12.1-.6-.9-1.1-1.9-1.5-2.9l-65.4-179.2zm183-120.7c.9 6.8 1.4 14 1.4 21.9 0 21.6-4 45.8-16.2 76.2l-65 187.9C426.2 403 468.7 334.5 468.7 256c0-37-9.4-71.8-26-102.1zM504 256c0 136.8-111.3 248-248 248C119.2 504 8 392.7 8 256 8 119.2 119.2 8 256 8c136.7 0 248 111.2 248 248zm-11.4 0c0-130.5-106.2-236.6-236.6-236.6C125.5 19.4 19.4 125.5 19.4 256S125.6 492.6 256 492.6c130.5 0 236.6-106.1 236.6-236.6z"/></Icon>}
                    content={
                        <ul>
                            <li>Conception de thèmes sur mesure</li>
                            <li>Conception de plugin</li>
                            <li>Création de site vitrine / e-commerce</li>
                            <li>Design 100% personnalisé</li>
                            <li>Gestion du contenu évolutif</li>
                            <li>Optimisation de référencement SEO</li>
                            <li>Site responsive sur tout type d&apos;écran</li>
                            <li>Formation des utilisateurs</li>
                        </ul>
                    }
                />
                <CardService
                    title="Développement de sites Web sur mesure"
                    logo={<Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M48 115.8C38.2 107 32 94.2 32 80c0-26.5 21.5-48 48-48c14.2 0 27 6.2 35.8 16H460.2c8.8-9.8 21.6-16 35.8-16c26.5 0 48 21.5 48 48c0 14.2-6.2 27-16 35.8V396.2c9.8 8.8 16 21.6 16 35.8c0 26.5-21.5 48-48 48c-14.2 0-27-6.2-35.8-16H115.8c-8.8 9.8-21.6 16-35.8 16c-26.5 0-48-21.5-48-48c0-14.2 6.2-27 16-35.8V115.8zM125.3 96c-4.8 13.6-15.6 24.4-29.3 29.3V386.7c13.6 4.8 24.4 15.6 29.3 29.3H450.7c4.8-13.6 15.6-24.4 29.3-29.3V125.3c-13.6-4.8-24.4-15.6-29.3-29.3H125.3zm2.7 64c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160zM256 320h32c35.3 0 64-28.7 64-64V224h64c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V320z"/></Icon>}
                    content={
                        <ul>
                            <li>Conception de sites web 100% personnalisables</li>
                            <li>Intégration de designs sur mesure, reflétant parfaitement votre identité visuelle et votre marque</li>
                            <li>Intégration de fonctionnalités performantes</li>
                            <li>Flexibilité totale</li>
                            <li>Performance optimale</li>
                            <li>Optimisation de référencement SEO</li>
                            <li>Site responsive sur tout type d&apos;écran</li>
                            <li>Formation des utilisateurs</li>
                        </ul>
                    }
                />
                <CardService
                    title="Développement d&apos;applications Web"
                    logo={<Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/></Icon>}
                    content={
                        <ul>
                            <li>Conception et développement d&apos;applications web sur mesure pour répondre à vos besoins spécifiques</li>
                            <li>Création d&apos;interfaces utilisateur interactives et conviviales</li>
                            <li>Intégration de fonctionnalités avancées pour améliorer l&apos;expérience utilisateur</li>
                            <li>Performance optimale</li>
                            <li>Intégration de bases de données robustes pour gérer efficacement les données de votre application</li>
                            <li>Tests rigoureux pour garantir la fiabilité et la sécurité de l&apos;application</li>
                            <li>Application responsive sur tout type d&apos;écran</li>
                            <li>Formation des utilisateurs</li>
                        </ul>
                    }
                />
                <CardService
                    title="Développement de fonctionnalités spécifiques"
                    logo={<Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></Icon>}
                    content={
                        <ul>
                            <li>Analyse approfondie des besoins et des exigences fonctionnelles de votre projet</li>
                            <li>Conception et développement de fonctionnalités personnalisées (backend)</li>
                            <li>Intégration de fonctionnalités innovantes pour améliorer l&apos;expérience utilisateur (frontend)</li>
                            <li>Tests rigoureux pour garantir la fiabilité et la sécurité des nouvelles fonctionnalités</li>
                            <li>Formation des utilisateurs</li>
                        </ul>
                    }
                />
            
            </ContainerCard>

            <p>L&apos;importance de la présence numérique dans le monde moderne
            Dans un monde de plus en plus connecté, être présent numériquement est devenu essentiel pour les entreprises et les professionnels souhaitant prospérer et rester compétitifs. Que ce soit pour promouvoir une marque, vendre des produits, ou fournir des services, une présence en ligne solide est un élément clé de la réussite dans le paysage numérique actuel.
            </p>

            <p>
            WordPress et React : deux piliers de la présence en ligne
            WordPress est reconnu pour sa simplicité d&apos;utilisation et sa large accessibilité. En tant que plateforme de gestion de contenu populaire, il offre une solution flexible pour la création et la gestion de sites web de toutes tailles, que ce soit des sites vitrine, des blogs, ou des sites e-commerce. Avec sa grande variété de thèmes et de plugins, WordPress permet de développer rapidement des sites fonctionnels et attrayants, et offre la possibilité de créer des thèmes sur mesure, 100% personnalisés pour répondre aux besoins spécifiques de chaque projet, que ce soit pour de petites entreprises ou des grandes marques.
            </p>

            <p>
            D&apos;un autre côté, React se distingue par sa performance et sa flexibilité. Utilisé par des entreprises de renom telles que Facebook, Instagram et Airbnb, React est une bibliothèque JavaScript prisée pour son aptitude à créer des interfaces utilisateur dynamiques et réactives. Sa robustesse et son évolutivité en font un choix de prédilection pour les applications web nécessitant une haute performance et une interactivité avancée.
            </p>

            <p>
            Alors, comment choisir entre WordPress et React pour votre présence en ligne ? Tout dépend des spécificités de votre projet et de vos objectifs commerciaux. Si vous visez un déploiement rapide avec une solution éprouvée et conviviale, WordPress est une option à considérer, notamment pour les sites vitrine et e-commerce. En revanche, si votre projet requiert une performance optimale et une personnalisation poussée, React pourrait être la solution idéale pour répondre à vos besoins spécifiques.
            </p>
        </Root>
    );Z
};