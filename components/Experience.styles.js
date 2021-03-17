import styled from "styled-components";

export const ExperienceContainer = styled.div`
    background-color:${props => props.theme.beigeLight};
    border:1px solid${props => props.theme.beige};
    padding:20px 5%;
    margin-bottom:50px;
    margin-left:15px;
    width:42%;
    @media screen and (max-width: 1140px) {
        width:auto;

    }

    div {
        margin-bottom:15px;
    }
    h3 {
        margin-top:20px;
        margin-bottom:10px;
        color:${props => props.theme.secondary};
        font-weight:600px;
    }
    h4 {
        color:${props => props.theme.primary};
        margin:0;
        font-size:1rem;
    }

    h5 {
        font-weight:600;
    }
    h6 {
        margin-top:10px;
        color:${props => props.theme.text};
    }




`;
 