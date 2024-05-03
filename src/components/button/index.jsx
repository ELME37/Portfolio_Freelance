import React from 'react';

import { quicksand } from "@/utils/fonts";

import { Root } from './button.styled';

export default function Button ( {children} ) {
    return (
        <Root className={quicksand.variable}>
            {children}
        </Root>
    );
};
