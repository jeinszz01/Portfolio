import styled from "styled-components";
import Carousel from "react-multi-carousel";

export const SectionSkillsContainer = styled.section`
    padding: 0 0 50px 0;
    background: linear-gradient(16deg, rgba(136,106,118,1) 0%, rgba(255,244,230,0) 50%);
`
export const SkillBox = styled.div`
    background: ${({theme}) => theme.contenido};
    border-radius: 2rem;
    text-align: center;
    padding: 4rem 0;
    width: 90%;
    margin: 0 auto;
    h2 {
        font-size: 45px;
        font-weight: 700;
        padding: 0 0 3rem 0;
    }
`
export const CarouselCss = styled(Carousel)`
    width: 80%;
    margin: 0 auto;
    position: relative;
    :hover {
        cursor: pointer;
    }
`
export const ImgSkills = styled.img`
    width: 160px;
    height: 160px;
    margin: 0 auto 15px auto;
    -webkit-user-drag: none;
    user-select: none;
`