import styled from "styled-components";


export const SectionProjects = styled.section`
    padding: 3rem 0 6rem 0;
    opacity: ${({animado}) => animado ? 1 : 0};
    transition: all 2s;
    animation: ${({animado}) => animado ? `costado` : ''} 1s; /**keyframe GlobalStyle.js**/
`
export const DivProjectMenu = styled.div`
    width: 90%;
    margin: 0 auto;
    h2 {
        font-size: 45px;
        font-weight: 700;
        text-align: center;
        padding: 3rem 0;
    }
`
export const DivProjectContent = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 3rem;
`
export const DivProjectText = styled.div`
    position: absolute;
    text-align: center;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.5s ease-in-out;
    opacity: 0;
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h3 {
        font-size: 30px;
        font-weight: 700;
        letter-spacing: 0.8px;
        line-height: 1.1em;
        color: white;
    }
    p {
        color: white;
    }
`
export const DivProjectTextLinks = styled.div`
    display: flex;
    justify-content: space-around;
    gap: .5rem;
    a {
        color: white;
        display: flex;
        align-items: center;
        gap: .5rem;
        img {
            width: 25px;
            height: 25px;
        }
    }
`
export const DivProjectCards = styled.div`
    position: relative;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    ::before {
        content: '';
        background: linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%);
        opacity: 0.85;
        position: absolute;
        width: 100%;
        height: 0;
        transition: 0.4s ease-in-out;
    }
    :hover::before {
        content: '';
        height: 100%;
        position: absolute;
    }
    :hover ${DivProjectText} {
        top: 50%;
        opacity: 1;
    }
`
