import { createGlobalStyle } from 'styled-components';



//colors

export const primary = '#39f';
export const primaryHover = "#3E82C4";
export const secondary = '#345781';
export const beigeLight = '#F8F8F6';
export const beige = '#E0DED4';
export const beigeDark = '#CECBBE';
export const text = '#303A46';




export const GlobalStyle = createGlobalStyle`

body {
  color:${props => props.theme.text};
}

a, a.uk-link-reset {
    text-decoration: none;
    &:hover {
      color:${props => props.theme.secondary};
    }
    .selected {
      color:${props => props.theme.secondary};
    }
  }


 
  
  h1 {
    font-family: Staatliches;
    font-size: 6rem;
  }
  h2, h3, h4, h5, p, li {
    font-family: 'Open Sans', sans-serif;
}

  h6 {
    font-family: Staatliches;
    color:#777777;
    font-size:1rem;
  }


  
  #category {
    font-family: Staatliches;
    font-weight: 500;
  }
  
  #title {
    letter-spacing: 0.4px;
    font-size: 22px;
    font-size: 1.375rem;
    line-height: 1.13636;
  }
  
  #banner {
    margin: 20px;
    height: 800px;
  }
  
  #editor {
    font-size: 16px;
    font-size: 1rem;
    line-height: 1.75;
  }
  
  .uk-navbar-container {
    background: #fff !important;
    font-family: Staatliches;
  }
  
  img:hover {
    opacity: 1;
    transition: opacity 0.25s cubic-bezier(0.39, 0.575, 0.565, 1);
  }

  .logo {
    display:flex;
    align-items:center;
    padding:20px;
    margin-bottom:0;
  }
  
  .logo a{
    font-size:1.3rem;
    color:${props => props.theme.beigeDark};
    text-transform:uppercase;
    padding:0px;
    font-family: Staatliches;
    :hover {
      text-decoration:none;
      color:${props => props.theme.text};
    }

    
  }

  .footer {
    text-align:center;
    font-size:.8rem;
    //background-color:${props => props.theme.beigeLight};
    height:35px;
    margin:0;
  }
  
  `;