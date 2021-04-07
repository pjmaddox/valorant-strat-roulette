import styled from 'styled-components';
import TeamConstants from "../constants/TeamConstants";


//This looked like dogshit
const handleSelectedStyles = (isSelected) => {
    if (isSelected) {
        return `
        -moz-box-shadow:    inset 0 0 10px #000000;
        -webkit-box-shadow: inset 0 0 10px #000000;
        box-shadow:         inset 0 0 10px #000000;`
    }
    else {
        return `-moz-box-shadow: none;
        -webkit-box-shadow: none;
        box-shadow: none;`
    }
}

export const BaseButton = styled.button`
`;

export const NewStratButton = styled(BaseButton)`
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    margin-right: auto;
`;

export const BaseTeamButton = styled(BaseButton)`
    color: white;
    margin-right: 10px;
`;

export const OffenseTeamButton = styled(BaseTeamButton)`
    background-color: ${props => props.currentTeam === TeamConstants.offense? "darkred;" : "red;"}
    disabled: ${props => props.currentTeam === TeamConstants.offense? true : false}
`;

export const DefenseTeamButton = styled(BaseTeamButton)`
    background-color: ${props => props.currentTeam === TeamConstants.defense? "darkblue;" : "blue;"}
    disabled: ${props => props.currentTeam === TeamConstants.defense? true : false}
`;
