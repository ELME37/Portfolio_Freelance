import React from 'react';

import Logo from '../logo';
import NetworkLinks from '../networkLinks';

import { quicksand } from "@/utils/fonts";

import { Root, ContainerGeneral, ContainerDeveloper, ContainerNavigationAndLinks, Text, Copyright, Navigation, List, Item, NavigationLink } from './footer.styled';

export default function Footer () {
    return (
        <Root>
            <ContainerGeneral>
                <ContainerDeveloper>
                    <Logo/>
                    <Text className={quicksand.variable}>Développeur front-end spécialisé en ReactJS / NextJS, créateur de solutions web innovantes et performantes.</Text>
                </ContainerDeveloper>
                <ContainerNavigationAndLinks>
                    <Navigation>
                        <List>
                            <Item>
                                <NavigationLink className={quicksand.variable} href="/">
                                    Accueil
                                </NavigationLink>
                            </Item>
                            <Item>
                                <NavigationLink className={quicksand.variable} href="/#about">
                                    A propos
                                </NavigationLink>
                            </Item>
                            <Item>
                                <NavigationLink className={quicksand.variable} href="/#service">
                                    Services
                                </NavigationLink>
                            </Item>
                            <Item>
                                <NavigationLink className={quicksand.variable} href="/#portfolio">
                                    Portfolio
                                </NavigationLink>
                            </Item>
                            <Item>
                                <NavigationLink className={quicksand.variable} href="/price">
                                    Tarifs
                                </NavigationLink>
                            </Item>
                            <Item>
                                <NavigationLink className={quicksand.variable} href="/#feedback">
                                    Feedback
                                </NavigationLink>
                            </Item>
                            <Item>
                                <NavigationLink className={quicksand.variable} href="/#contact">
                                    Contact
                                </NavigationLink>
                            </Item>
                        </List>
                    </Navigation>
                    <NetworkLinks/>
                </ContainerNavigationAndLinks>
            </ContainerGeneral>
            <Copyright className={quicksand.variable}>Conception et réalisation par Mickaël TURQUAIS &copy; 2024 - Tous droits réservés.</Copyright>
        </Root>
    );
};
