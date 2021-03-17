import styled from "styled-components";

export const HeroContainer = styled.div`
    align-items:center;
    display:flex;
    justify-content:center;
    padding:20px 0% 20px 3%; 
    min-height:80vh;

    @media screen and (max-width: 1140px) {
        flex-wrap:wrap;
        padding:20px;

    }


`;

export const LeftHero = styled.div`
    width:38%;
    margin-top:-60px;
    margin-right:2%;
    @media screen and (max-width: 1140px) {
        width:100%;
        margin:auto;

    }

    h1 {
        margin-top:20px;
        color:${props => props.theme.secondary};
        span {
            border-bottom: 6px solid ${props => props.theme.primary}
        }

    }

    h4 {
        margin-top:50px;
        max-width:500px;
    }

    p {
        color:${props => props.theme.text};
        font-size:1.4rem;

    }

`;


export const RightHero = styled.div`
    width:60%;
    @media screen and (max-width: 1140px) {
        width:100%;
        margin:auto;

    }    
`;
