import React, { useEffect, useState } from 'react';

import Carousel from '../carousel';

import { Root } from './feedback.styled';
import { ContainerTitleSection, LignTitle, TitleSection } from '../section_Home/home.styled';

export default function SectionFeedback () {
    const [feedbacks, setFeedbacks] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/data/feedbacks/feedbacks.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setFeedbacks(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <Root id='feedback'>
            <ContainerTitleSection>
                <LignTitle></LignTitle>
                <TitleSection>Feedback</TitleSection>
            </ContainerTitleSection>
            <Carousel slides={feedbacks}/>
        </Root>
    );
};