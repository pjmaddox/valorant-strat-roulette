import React from 'react';
import { StratTitleDiv, StratTitleParagraph } from './StratTitle.styles';

const StratTitle = (props) => {
    return (
        <StratTitleDiv>
            <b>Name: </b> <StratTitleParagraph> {props.name} </StratTitleParagraph>
        </StratTitleDiv>
    );
}

export default StratTitle;