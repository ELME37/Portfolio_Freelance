import React, { useState, useEffect } from 'react';

import { handleScroll } from '@/utils/scroll';

import LayoutDefault from '@/containers/layout';
import Logo from '../logo';

import { Root, Container, Label, Svg, Input, Navigation, List, Item, LinkHeader, Span} from './header.styled';

export default function Header () {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        function scroll() {
            handleScroll(setActiveSection);
        }

        window.addEventListener('scroll', scroll);

        return () => {
            window.removeEventListener('scroll', scroll);
        };
    }, []);
    
    return (
        <Root>
            <LayoutDefault>
                <Container>
                    <Logo/>
                    <Label htmlFor="toggler">
                        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                        </Svg>
                    </Label>
                    <Input type='checkbox' id='toggler' name='menu'/>
                    <Navigation>
                        <List>
                            <Item>
                                <LinkHeader href="/">
                                    <Span $active={activeSection === 'home'}>Accueil</Span>
                                </LinkHeader>
                            </Item>
                            <Item>
                                <LinkHeader href="/#about">
                                    <Span $active={activeSection === 'about'}>A propos</Span>
                                </LinkHeader>
                            </Item>
                            <Item>
                                <LinkHeader href="#service">
                                    <Span $active={activeSection === 'service'}>Services</Span>
                                </LinkHeader>
                            </Item>
                            <Item>
                                <LinkHeader href="#portfolio">
                                    <Span $active={activeSection === 'portfolio'}>Portfolio</Span>
                                </LinkHeader>
                            </Item>
                            <Item>
                                <LinkHeader href="#price">
                                    <Span $active={activeSection === 'price'}>Tarifs</Span>
                                </LinkHeader>
                            </Item>
                            <Item>
                                <LinkHeader href="#feedback">
                                    <Span $active={activeSection === 'feedback'}>Feedback</Span>
                                </LinkHeader>
                            </Item>
                            <Item>
                                <LinkHeader href="#contact">
                                    <Span $active={activeSection === 'contact'}>Contact</Span>
                                </LinkHeader>
                            </Item>
                        </List>
                    </Navigation>
                </Container>
            </LayoutDefault>
        </Root>
    );
};