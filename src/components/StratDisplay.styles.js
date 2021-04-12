import styled from 'styled-components';
import TeamConstants from "../constants/TeamConstants";


export const StratDisplayContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    &:before {
        content: "";
        display: block;
        position: absolute;
        height: 100vh;
        top: 0;
        left: 7vw;
        z-index: 1;
        pointer-events: none;
        border: 1px solid rgba(216,212,205,.5)
    }
`;

export const StratDisplayDiv = styled.div`
    position: relative;
    background-size: cover;
    background-position: center center;
    flex-grow: 1;
    display: flex;
    align-items: center;

    &:before {
        content: '';
        display: block;
        position: absolute;
        width: 20vw;
        height: calc(100% + 5px);
        left: 0;
        right: 0;
        background-color: inherit;
    }
`;

export const StratDisplayDivInner = styled.div`
    padding: 6rem 0;
    width: 80%;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    position: relative;

    &:before {
        content: "";
        display: block;
        position: absolute;
        width: 0.5rem;
        height: 0.5rem;
        bottom: -3vh;
        right: calc(30vw + 2px);
        z-index: 1;
        pointer-events: none;
        background-color: rgba(186,182,175,.5);
    }

    &:after {
        content: "";
        display: block;
        position: absolute;
        width: 30vw;
        bottom: -3vh;
        right: 0;
        z-index: 1;
        pointer-events: none;
        border: 1px solid rgba(186,182,175,.5)
    }
`;

export const StratDisplaySpacer = styled.div`
    min-height: 10vh;
    position: relative;

    &:before {
        content: '';
        display: block;
        position: absolute;
        width: 5rem;
        height: 0;
        top: -4.5rem;
        right: 0;
        border-bottom: 4.5rem solid var(--background);
        border-left: 5rem solid transparent;
        box-sizing: border-box;
    }
`;

export const CurrentTeamDisplay = styled.span`
    padding: 5px;
    margin-left: 5px;
    color: ${ props.currentTeam == TeamConstants.offense? "white" : "white" } /* This is redundant but placeholder for decision on background colors*/
    background-color: ${ props.currentTeam == TeamConstants.offense? "darkred" : "darkblue" }
`;

export const CurrentMapLabel = styled(CurrentTeamDisplay)`
    padding: 5px;
    margin-left: 5px;
    margin-right: 0.5rem;
`;
