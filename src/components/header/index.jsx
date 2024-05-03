import React, { useState, useEffect } from 'react';

import { handleScroll } from '@/utils/scroll';

import LayoutDefault from '@/containers/layout';
import Logo from '../logo';

import { cormorantGaramond } from "@/utils/fonts";

import { Root, Container, Label, Svg, Input, Navigation, List, Item, LinkHeader, Span} from './header.styled';

export default function Header () {
    const [activeSection, setActiveSection] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        function scroll() {
            handleScroll(setActiveSection);
            setScrollPosition(window.scrollY);
        }

        window.addEventListener('scroll', scroll);

        return () => {
            window.removeEventListener('scroll', scroll);
        };
    }, []);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    
    return (
        <Root $scrolled={scrollPosition > 0}>
            <LayoutDefault>
                <Container>
                    <Logo/>
                    <Label htmlFor="toggler">
                        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                        </Svg>
                    </Label>
                    <Input type='checkbox' id='toggler' name='menu' checked={isChecked} onChange={handleCheckboxChange}/>
                    <Navigation>
                        <List>
                            <Item>
                                <LinkHeader href="/" onClick={handleCheckboxChange}>
                                    <Span className={cormorantGaramond.variable} $active={activeSection === 'home'}>Accueil</Span>
                                </LinkHeader>
                            </Item>
                            <Item>
                                <LinkHeader href="/#about" onClick={handleCheckboxChange}>
                                    <Span className={cormorantGaramond.variable} $active={activeSection === 'about'}>A propos</Span>
                                </LinkHeader>
                            </Item>
                            <Item>
                                <LinkHeader href="#service" onClick={handleCheckboxChange}>
                                    <Span className={cormorantGaramond.variable} $active={activeSection === 'service'}>Services</Span>
                                </LinkHeader>
                            </Item>
                            <Item>
                                <LinkHeader href="#portfolio" onClick={handleCheckboxChange}>
                                    <Span className={cormorantGaramond.variable} $active={activeSection === 'portfolio'}>Portfolio</Span>
                                </LinkHeader>
                            </Item>
                            <Item>
                                <LinkHeader href="#price" onClick={handleCheckboxChange}>
                                    <Span className={cormorantGaramond.variable} $active={activeSection === 'price'}>Tarifs</Span>
                                </LinkHeader>
                            </Item>
                            <Item>
                                <LinkHeader href="#feedback" onClick={handleCheckboxChange}>
                                    <Span className={cormorantGaramond.variable} $active={activeSection === 'feedback'}>Feedback</Span>
                                </LinkHeader>
                            </Item>
                            <Item>
                                <LinkHeader href="#contact" onClick={handleCheckboxChange}>
                                    <Span className={cormorantGaramond.variable} $active={activeSection === 'contact'}>Contact</Span>
                                </LinkHeader>
                            </Item>
                        </List>
                    </Navigation>
                </Container>
            </LayoutDefault>
        </Root>
    );
};