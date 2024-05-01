import React from 'react';
import Link from 'next/link';

import { Root } from './logo.styled';

export default function Logo () {
    return (
        <Link href="/">
            <Root src="/assets/images/logo.png" alt="logo MTU" />
        </Link>
    );
};