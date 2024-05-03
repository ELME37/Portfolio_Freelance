import React from 'react';

import { ContainerMessageUser, MessageUserStyle } from '../message.styled';

export default function MessageUser ({ children }) {
    return (
        <ContainerMessageUser>
            <MessageUserStyle>
                {children}
            </MessageUserStyle>
        </ContainerMessageUser>
    );
};