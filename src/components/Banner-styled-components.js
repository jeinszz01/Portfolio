import styled, { keyframes } from "styled-components";
import { fondoOscuro, fondoclaro } from "./themes/variables";

const updown = keyframes`
    0% {
        transform: translateY(-20px);
    }
    50% {
        transform: translateY(20px);
    }
    100% {
        transform: translateY(-20px);
    }
`
const blinck = keyframes`
    50% {border-color: transparent}
`

export const SectionProfile = styled.section`

    padding: 10rem 0;
    //background: ${({theme}) => theme.fondo === fondoclaro && theme.fondo}; data:image/svg+xml;utf8,
    //background-image: ${({theme}) => theme.fondo === fondoOscuro && `url(${theme.banner})`};
    background-image: ${({theme}) => `url(${theme.banner})`};
    background-position: center;
    background-repeat: no-repeat;
    

    z-index: 1;
    position: relative;
`
export const DivBanner = styled.div`
    position: relative;
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
    gap: 2rem;
    @media (min-width:1200px) {
        grid-template-columns: repeat(3, 1fr);
    }
`
export const DivTextBanner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    h1 {
        align-self: start;
        font-weight: 700;
        padding: 8px 10px;
        letter-spacing: 0.8px;
        background: linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%);
        border: 1px solid rgba(255, 255, 255, 0.5);
        font-size: 20px;
    }
    h2 {
        align-self: start;
        span {
            font-size: 65px;
            font-weight: 700;
            letter-spacing: 0.8px;
            line-height: 1;
            border-right: 4px solid #666;
            animation: ${blinck} .5s infinite step-end alternate;
        }
    }
    p {
        align-self: start;
        color: ${({theme}) => theme.texto};
        opacity: .7;
        font-family: centra, sans-serif;
        font-size: 18px;
        display: block;
        letter-spacing: normal;
        span {
            display: block;
        }
    }
    img {
        border-radius: 50%;
        height: auto;
        width: auto;
        margin-bottom: .5rem;
    }
    @media (min-width:1200px) {
        grid-column: 1/3;
    }

`
export const DivBannerImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    
    span {
        background-image: ${({theme}) => theme.fondo === fondoclaro ? `url(${theme.imagenBanner})` : `url(${theme.imagenBanner})`};
        max-width: 450px;
        width: 100%;
        height: 100%;
        max-height: 420px;

        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;

        vertical-align: middle;
        animation: ${updown} 3s linear infinite;
        animation-duration: 3s;
        animation-timing-function: linear;
        animation-delay: 0s;
        animation-iteration-count: infinite;
        animation-direction: normal;
        animation-fill-mode: none;
        animation-play-state: running;
        animation-name: ${updown};
    }
`

   
