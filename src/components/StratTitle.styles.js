import styled from "styled-components";

export const StratTitleDiv = styled.div`
    font-family: "Tungsten Bold";
    font-size: 5rem;
    color: #f5f4f4;
    position: relative;

    &:after {
        content: "";
        display: block;
        position: absolute;
        width: 70%;
        bottom: 0vh;
        left: -5%;
        z-index: 1;
        pointer-events: none;
        border: 1px solid rgba(236,232,225,.5)
    }
`;

