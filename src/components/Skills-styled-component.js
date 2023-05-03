import styled from "styled-components";
import Carousel from "react-multi-carousel";

export const SectionSkillsContainer = styled.section`
    padding: 0 0 50px 0;
    background-image: url('/src/assets/img/color-sharp.png');
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
`
export const SkillBox = styled.div`
    background: ${({theme}) => theme.contenido};
    border-radius: 64px;
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