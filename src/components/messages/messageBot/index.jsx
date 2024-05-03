import React from 'react';

import { quicksand } from "@/utils/fonts";

import { ContainerMessageBot, MessageBotStyle } from '../message.styled';

export default function MessageBot ({ children }) {
    return (
        <ContainerMessageBot>
            <MessageBotStyle className={quicksand.variable}>
                {children}
            </MessageBotStyle>
        </ContainerMessageBot>
    );
};