import React from 'react';
import { StratTitleDiv } from './StratTitle.styles';

const StratTitle = (props) => {
    return (
        <StratTitleDiv>
            {props.name}
        </StratTitleDiv>
    );
}

export default StratTitle;
