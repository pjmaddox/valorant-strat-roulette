import React from 'react';
import { StratiDisplayContainer, StratDisplayDiv, CurrentTeamDisplay, CurrentMapLabel } from './StratDisplay.styles'
import { ButtonContainer } from "./ButtonContainer.styles";
import { NewStratButton, OffenseTeamButton, DefenseTeamButton } from "./CustomButton.styles";
import StratDescription from "./StratDescription";
import StratTitle from "./StratTitle";
import TeamConstants from "../constants/TeamConstants";
import MapSelection from "../components/MapSelection";

const StratDisplay = ({stratData, team, changeStratFunction, changeTeam, map, changeCurrentMap}) => {
    
    let {name, description} = stratData;
    let changeTeamHelper = function() {
        if(team == TeamConstants.offense) 
            changeTeam(TeamConstants.defense);
        else
            changeTeam(TeamConstants.offense)
    };
    let teamDisplay = team == TeamConstants.offense? "Offense" : "Defense";

    return (
        <StratiDisplayContainer>
            <ButtonContainer>
                <NewStratButton onClick={changeStratFunction}>New Strat</NewStratButton>
                <CurrentMapLabel>Limit To Map:</CurrentMapLabel>
                <MapSelection currentlySelectedId={map} changeMapSelection={changeCurrentMap} />
                <button onClick={changeTeamHelper}>Swap Team</button>
                <CurrentTeamDisplay currentTeam={team}>{teamDisplay}</CurrentTeamDisplay>
            </ButtonContainer>

            <StratDisplayDiv>

                <StratTitle name={name}/>
                
                <br />
                
                <StratDescription description={description} />

            </StratDisplayDiv>
        </StratiDisplayContainer>
    );
};

export default StratDisplay;