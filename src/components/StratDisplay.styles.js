import styled from 'styled-components';
import TeamConstants from "../constants/TeamConstants";

export const StratiDisplayContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    &::before {
        content: '';
        flex: 3;
    }
    &::after {
        content: '';
        flex: 1;
    }
`;

export const StratDisplayDiv = styled.div`
    
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
`;