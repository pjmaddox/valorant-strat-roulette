import styled from 'styled-components';

export const LogoContainer = styled.div`
    background-color: var(--dark);
    color: var(--light);
    position: relative;
    display: flex;
    justify-content: center;
    padding: 0.75rem 0;
    margin: 0;
    line-height: 5.5rem;
    font-family: "Tungsten Bold";
    font-size: 4rem;
    text-transform: uppercase;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1.5px var(--light);
    z-index: 2;


    &:before {
        content: '';
        display: block;
        position: absolute;
        width: 5rem;
        height: 0;
        bottom: -4.5rem;
        left: 0;
        border-top: 4.5rem solid var(--dark);
        border-right: 5rem solid transparent;
        box-sizing: border-box;
    }
`;
