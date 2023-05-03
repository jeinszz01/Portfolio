import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Centra;
    src: url('../src/assets/font/CentraNo2-Book.ttf');
    font-weight: 400;
    font-display: fallback;
  }
  @font-face {
    font-family: Centra;
    src: url('../src/assets/font/CentraNo2-Medium.ttf');
    font-weight: 500;
    font-display: fallback;
  }
  @font-face {
    font-family: Centra;
    src: url('../src/assets/font/CentraNo2-Bold.ttf');
    font-weight: 700;
    font-display: fallback;
  }

  /***** Default Css *****/
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    border: none;
    outline: none;
  }
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 75px;
  }
  body {
    font-weight: 400;
    //overflow-x: hidden;
    background-color: ${({theme}) => theme.fondo};
    color: ${({theme}) => theme.texto};
    font-family: Centra, sans-serif, Helvetica, 'Courier New', Courier, monospace;
  }
  textarea {
    font-family: Centra, sans-serif, Helvetica, 'Courier New', Courier, monospace;
  }

  /** Configuración Scroll **/
  ::-webkit-scrollbar {
    width: 1rem;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background: #797979;
    transition: all 0.5s ease-in-out;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #222224;
  }
  ::-webkit-scrollbar-track {
    background: #bbb7c0fa;
  }

  @keyframes costado {
    0% {
        transform: translateX(100px);
    }
    100% {
        transform:  translateX(0);
    }
  }
  @keyframes subir {
    0% {
        transform: translateY(100px);
    }
    100% {
        transform:  translateY(0);
    }
  }

`
export default GlobalStyle

