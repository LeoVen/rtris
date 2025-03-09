import React from 'react';
import { MarbleContainer } from './components';

function Marble(props: React.PropsWithChildren) {

    return (
        <MarbleContainer>
            {props.children}
        </MarbleContainer>
    )
}

export default Marble;
