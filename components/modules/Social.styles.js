import styled from "styled-components";

export const SocialFlex = styled.div`
    display:flex;
    align-items:center;
    margin-top:40px;
    margin-bottom:40px;

    a {
        font-size:1.8rem;
        color:${props => props.theme.beigeDark};
        margin-right:35px;
        &:hover {
            text-decoration:none;
        }
    }
    .icon-linkedin:after {
            content: '\f0e1';
            font-family:'Font Awesome 5 Brands';
        }

    .icon-github:after {
            content: '\f09b';
            font-family:'Font Awesome 5 Brands';
        }
     .icon-mail:after {
            content: '\f0e0';
            font-family:'Font Awesome 5 Pro';

        }
`;