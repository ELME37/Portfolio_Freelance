import React from 'react';

import { quicksand } from "@/utils/fonts";

import { ContainerMessageUser, MessageUserStyle } from '../message.styled';

export default function MessageUser ({ children }) {
    return (
        <ContainerMessageUser>
            <MessageUserStyle className={quicksand.variable}>
                {children}
            </MessageUserStyle>
        </ContainerMessageUser>
    );
};