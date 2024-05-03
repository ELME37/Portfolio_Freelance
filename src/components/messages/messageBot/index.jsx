import React from 'react';

import { ContainerMessageBot, MessageBotStyle } from '../message.styled';

export default function MessageBot ({ children }) {
    return (
        <ContainerMessageBot>
            <MessageBotStyle>
                {children}
            </MessageBotStyle>
        </ContainerMessageBot>
    );
};