import styled from "styled-components";


export const Navbar = styled.nav`
    width: 100%;
    position: fixed;
    z-index: 2;
    top: 0;
    transition: .5s ease-in-out;
    padding: ${({scrolled, activeScroll}) => !scrolled || activeScroll ? '' : '0'};
    background-color: ${({scrolled, activeScroll, theme}) => !scrolled || activeScroll ? '' : theme.contenidoNav};
    backdrop-filter: ${({scrolled, activeScroll}) => !scrolled || activeScroll ? '' : 'blur(10px)'};
`
export const DivContainer = styled.div`
    padding: 20px 0 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    z-index: 2;
    position: relative;
    transition: .5s ease-in-out;
`

export const DivSocialButtons = styled.div`
    display: flex;
    gap: 0 2rem;
    button {
        background-color: transparent;
        border: 1px solid ${({theme}) => theme.texto};
        color: ${({theme}) => theme.texto};
        padding: 1rem 2rem;
        position: relative;
        transition: 0.3s ease-in-out;
        font-size: 18px;
        font-weight: 700;
        z-index: 1;
        white-space: nowrap;  /*evita un salto de linea*/
        cursor: pointer;
        :hover {
            color: ${({theme}) => theme.fondo};
            ::before {
                content: '';
                width: 100%;
                height: 100%;
                position: absolute;
            }
        }
        ::before {
            content: '';
            width: 0%;
            height: 100%;
            background-color: ${({theme}) => theme.texto};
            position: absolute;
            top: 0;
            left: 0;
            transition: 0.3s ease-in-out;
            z-index: -1;
        }
    }
    @media (max-width: 1124px) {
        display: flex;
        gap: 2rem;
        flex-direction: column;
        align-items: center;
    }
`
export const BotonMenuIcon = styled.button`
    display: none;
    cursor: pointer;
    background-color: transparent;
    img {
        width: 35px;
        height: 35px;
        filter: ${({theme}) => theme.icons};
    }
    @media (max-width: 1124px) {
        display: flex;
        justify-content: center;
        background-color: transparent;
    }
`
export const DivMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 0 1rem;
    font-size: 18px;
    @media (max-width: 1124px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        position: fixed;
        top: ${({activeScroll}) => activeScroll ? '0' : '-230px'};
        left: 0;
        background-color: ${({activeScroll, theme}) => activeScroll ? theme.contenidoNav : 'transparent'};/****** */
        transition: .8s ease-in-out;
        z-index: -1;
        gap: ${({activeScroll}) => activeScroll ? '2rem' : ''};
        padding-top: ${({activeScroll}) => activeScroll ? '120px' : ''};
        padding-bottom: 1rem;
    }
`
export const Links = styled.a`
    font-size: 18px;
    font-weight: 700;
    color: ${({theme}) => theme.texto};
    letter-spacing: 0.8px;
    padding: 0 25px;
    opacity: ${({activeLink}) => activeLink ? '1' : '0.7'};
    &:hover {
        opacity: 1;
    }
`

// Boton switcher theme
export const ButtonSwitcher = styled.button`
    background-color: ${({activeMode}) => activeMode ? 'orange' : '#4b4b4b'};
    border-radius: 1000px;
    border: none;
    position: relative;
    cursor: pointer;
    outline: none;
    display: flex;
    gap: 0 2.5px;
    &::after {
        content: '';
        width: 25px;
        height: 25px;
        border-radius: 100px;
        display: block;
        background-color: aliceblue;
        position: absolute;
        top: 0;
        left: ${({activeMode}) => activeMode ? 'unset' : '0'};
        right: ${({activeMode}) => activeMode ? '0' : 'unset'};
        transition: .3s ease-in-out;
        box-shadow: 0px 0px 2px 2px #121212;
    }
    span {
        width: 25px;
        height: 25px;
        line-height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: none;
        img {
            width: 80%;
            height: 80%;
            filter: invert(97%) sepia(3%) saturate(12%) hue-rotate(84deg) brightness(105%) contrast(104%);
        }
    }
`