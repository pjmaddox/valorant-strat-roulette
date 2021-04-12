import { StratDescriptionDiv, StratDetailsParagraph } from './StratDescription.styles';


const StratDescription = (props) => {
    console.log(props);
    return (
        <StratDescriptionDiv>
            <StratDetailsParagraph>{props.description}</StratDetailsParagraph>
        </StratDescriptionDiv>
    );
}

export default StratDescription;
