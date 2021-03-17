import styled from "styled-components";

export const ExperienceContainer = styled.div`
    background-color:${props => props.theme.beigeLight};
    border:1px solid${props => props.theme.beige};
    padding:20px 8%;
    margin-bottom:50px;
    div {
        margin-bottom:15px;
    }
    h3 {
        margin-top:20px;
        margin-bottom:10px;
        color:${props => props.theme.secondary};
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
 