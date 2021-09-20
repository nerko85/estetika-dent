import { createGlobalStyle } from "styled-components";

const responsive = {
  mobile: "480px",
  tablet: "768px",
  laptop: "960px",
  desktop: "1152px",
  widescreen: "1440px",
  large: "1660px",
  xlarge: "1920px",
};

const colors = {
  primary: "#141C5E",
  gold: "#CA9C5E",
  text: "#52575D",
  white: "#fff",
};

const mainTheme = {
  font: "Raleway",
  heading: "Butler",
  ...colors,
  ...responsive,
};

const darkTheme = {};

const GlobalStyles = createGlobalStyle`
    .container-fluid {
        margin:0 6rem;
    }

    .container {
        max-width:1400px;
        width:80%;
        margin: 0 auto;
        padding: 0 2rem;
    }

    h1,h2,h3,h4 {
        font-family:${({ theme }) => theme.heading};
        line-height:1.25;
    }

    h1,h2 {
        font-size:9rem;
    }

    h3 {
        font-size:4.8rem;
    }

    p {
        font-family:${({ theme }) => theme.font};
        font-size:1.8rem;
        line-height:1.7;
    }

    @media(max-width:${({ theme }) => theme.desktop}){
        h1,h2 {
        font-size:7rem;
        }

        h3 {
        font-size:4rem;
        }
    }

    @media(max-width:${({ theme }) => theme.tablet}){
        h1,h2 {
        font-size:5rem;
        }

        h3 {
        font-size:2.6rem;
        }
    }
    
`;

export { GlobalStyles, mainTheme, darkTheme };
