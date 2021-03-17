import styled from "styled-components";

export const FlexContainer = styled.section`
    display:flex;
    flex-wrap:wrap;



`;
export const PageContainer = styled.section`
    padding:10px 3% 20px 0; 
    h1 {
        color: ${props => props.theme.secondary};
        text-align:right;
        margin:0px 0 60px 0;
        span {
            border-bottom:8px solid ${props => props.theme.primary};
            
        }

    }
    @media screen and (max-width: 1140px) {
        padding:20px;

    }

`;

export const PageBody = styled.div`
    display:flex;
    justify-content:center;
    align-items:flex-start;



    @media screen and (max-width: 1140px) {
        flex-wrap:wrap;
        padding:0;

    }


`;

export const PageLeft = styled.div`
    width:48%;
    margin-right:2%;
    min-height:30vh;
    display:flex;
    padding-top:20px;
    //align-items:center;

    @media screen and (max-width: 1140px) {
        width:100%;
        margin:auto;

    }


    p {
        color:${props => props.theme.primary};
        font-size:1.6rem;

    }

`;


export const PageRight = styled.div`
    width:58%;
    padding:0 3%;
    padding-top:20px;


    @media screen and (max-width: 1140px) {
        width:100%;
        margin:auto;

    }    
`;
