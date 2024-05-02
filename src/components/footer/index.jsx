import React from 'react';

import Logo from '../logo';
import NetworkLinks from '../networkLinks';

import { Root, ContainerGeneral, ContainerDeveloper, ContainerNavigationAndLinks, Text, Copyright, Navigation, List, Item, NavigationLink } from './footer.styled';

export default function Footer () {
    return (
        <Root>
            <ContainerGeneral>
                <ContainerDeveloper>
                    <Logo/>
                    <Text>Développeur front-end spécialisé en ReactJS / NextJS, créateur de solutions web innovantes et performantes.</Text>
                </ContainerDeveloper>
                <ContainerNavigationAndLinks>
                    <Navigation>
                        <List>
                            <Item>
                                <NavigationLink href="/">
                                    Accueil
                                </NavigationLink>
                            </Item>
                            <Item>
                                <NavigationLink href="/#about">
                                    A propos
                                </NavigationLink>
                            </Item>
                            <Item>
                                <NavigationLink href="/#service">
                                    Services
                                </NavigationLink>
                            </Item>
                            <Item>
                                <NavigationLink href="/#portfolio">
                                    Portfolio
                                </NavigationLink>
                            </Item>
                            <Item>
                                <NavigationLink href="/price">
                                    Tarifs
                                </NavigationLink>
                            </Item>
                            <Item>
                                <NavigationLink href="/#feedback">
                                    Feedback
                                </NavigationLink>
                            </Item>
                            <Item>
                                <NavigationLink href="/#contact">
                                    Contact
                                </NavigationLink>
                            </Item>
                        </List>
                    </Navigation>
                    <NetworkLinks/>
                </ContainerNavigationAndLinks>
            </ContainerGeneral>
            <Copyright>Conception et réalisation par Mickaël TURQUAIS &copy; 2024 - Tous droits réservés.</Copyright>
        </Root>
    );
};
