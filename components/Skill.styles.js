import styled from "styled-components";

export const SkillContainer = styled.section`
/*     border:1px solid ${props => props.theme.secondary};
    box-shadow: 8px 8px 0px 1px ${props => props.theme.secondary};
    -webkit-box-shadow: 8px 8px 0px 1px ${props => props.theme.secondary};
    -moz-box-shadow: 8px 8px 0px 1px ${props => props.theme.secondary}; */
    background-color:${props => props.theme.beigeLight};
    border:1px solid${props => props.theme.beige};
    min-width:200px;
    width:40%;
    margin:15px;
    padding:20px;
    @media screen and (max-width: 1450px) {
        width:100%;
        margin-bottom:20px;
        margin-right:0;

    }   

    h4 {
        color:${props => props.theme.secondary};
        font-family: Staatliches;
        font-size:1.5rem;
      //  border-bottom: 1px solid ${props => props.theme.primary};

    }

    li {
        color: ${props => props.theme.text};   
    }
`;