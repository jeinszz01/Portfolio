import styled from "styled-components";

export const SectionContact = styled.section`
    background: ${({theme}) => theme.fondoContact};
    padding: 3.5rem 0;
    transition: all .5s;
    h2 {
        font-size: 45px;
        font-weight: 700;
        margin-bottom: 30px;
    }
`
export const ContactContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    gap: 1rem;
    place-items: center;
    opacity: ${({animado}) => animado ? '1' : '0'};
    transition: all 2s;
    /**animation: ${({animado}) => animado ? 'subir' : ''} 1s; keyframe App.css**/
    img {
        max-width: 100%;
        width: 550px;
        height: auto;
    }
`
export const DivContactForm = styled.div`
    width: 90%;
    margin: 0 auto;
`
export const DivFormContent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    gap: .5rem .7rem;
    max-width: 740px;
    input, textarea {
        width: 100%;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 20px;
        color: #fff;
        padding: 18px 26px;
        font-family: Centra;
        font-weight: 500;
        font-size: 18px;
        letter-spacing: 0.8px;
        transition: 0.3s ease-in-out;
        resize: none;
        &:focus {
            background: rgba(255, 255, 255, 1);
            color: #121212;
            &::placeholder {
                color: #121212;
                opacity: 0.8;
            }
        }
        &::placeholder {
            font-size: 16px;
            font-weight: 400;
            color: #fff;
        }
    }
    button {
        font-weight: 700;
        font-size: 18px;
        color: #000;
        background-color: #fff;
        padding: 14px 48px;
        margin-top: 20px;
        border-radius: 0;
        transition: 0.3s ease-in-out;
        position: relative;
        span {
            z-index: 1;
            position: relative;
        }
        &:hover {
            cursor: pointer;
            color: #fff;
            &::before {
                width: 100%;
            }
        }
        &:before {
            content: "";
            background: #121212;
            width: 0;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            transition: 0.3s ease-in-out;
        }
    }
`
export const DivTextarea = styled.div`
    span {
        font-size: 12px;
        letter-spacing: 1px;
    }
    @media (min-width:560px) {
        grid-column: 1/3;
    }
    @media (min-width:608px) {
        grid-column: 1/2;
    }
    @media (min-width:1123px) {
        grid-column: 1/3;
    }
`