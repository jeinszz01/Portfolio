import styled from "styled-components";

export const SectionSobreMi = styled.section`
    width: 90%;
    padding: 3rem 0 5rem 0;
    position: relative;
    z-index: 1;
    margin: 0 auto;
`
export const AboutMeContainer = styled.div`
    background-color: ${({theme}) => theme.contenido};
    border-radius: 2rem;
    margin-top: -120px;
    padding: 2rem 0;
    position: relative;
    h2 {
        font-size: 45px;
        font-weight: 700;
        text-align: center;
    }
    ::before {
        position: absolute;
        content: ' ';
        top: 0;
        left: 0;
        background: linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%);
        border-radius: 3.5rem;
        width: 100%;
        height: 100%;
        filter: blur(20px);
        z-index: -1;
    }
`
export const AboutMeContent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
    gap: 1rem;
    place-items: center;
    padding: 0 3rem;
    margin-top: 1rem;
    @media (max-width: 500px) {
        padding: 0 3px;
    }
`
export const AboutMeImg = styled.div`
    img {
        width: 100%;
        max-width: 450px;
        height: auto;
    }
`
export const AboutMeText = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    align-items: center;
    p {
        /* color: #B8B8B8; */
        color: ${({theme}) => theme.texto};
        opacity: .7;
        font-family: Centra, sans-serif;
        font-size: 18px;
        span {
            color: rgba(81, 50, 88, 1);
            opacity: 1;
        }
    }
    a {
        color: white;
        font-size: 20px;
        font-weight: 700;
        padding: 8px 35px;
        letter-spacing: 0.8px;
        background: linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%);
        border: 1px solid rgba(255, 255, 255, 0.5);
        display: flex;
        gap: .5rem;
        align-items: center;
        cursor: pointer;
        margin-top: 1.2rem;
        img {
            width: 25px;
            height: 25px;
        }
        :hover {
            background: linear-gradient(90.21deg, rgba(74, 47, 189, 0.5) -5.91%, rgba(170, 54, 124, 0.5) 111.58%);
            color: #B8B8B8;
        }
    }
`