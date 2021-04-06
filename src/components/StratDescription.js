import { StratDescriptionDiv, StratDetailsParagraph } from './StratDescription.styles';


const StratDescription = (props) => {
    console.log(props);
    return (
        <StratDescriptionDiv>
            <b>Details: </b> <StratDetailsParagraph>{props.description}</StratDetailsParagraph>
        </StratDescriptionDiv>
    );
}

export default StratDescription;