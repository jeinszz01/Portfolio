import styled from "styled-components";

export const EnlaceLogo = styled.a`
    color: ${({theme}) => theme.textoLogo};
    font-size: 65px;
    font-weight: 700;
    span {
        color: #B184A2;
    }
`
export const DivSocialIcons = styled.div`
    display: flex;
    align-items: center;
    gap: 0 1rem;
    justify-content: ${({footers}) => footers && 'right'};
    a {
        display: flex;
        width: 2.5rem;
        height: 2.5rem;
        position: relative;
        align-items: center;
        justify-content: center;
        line-height: 1;
        border-radius: 50%;
        border: 1px solid ${({theme}) => theme.texto};
        ::before {
            content: "";
            width: 2.5rem;
            height: 2.5rem;
            position: absolute;
            background: ${({theme}) => theme.texto};
            border-radius: 50%;
            transform: scale(0);
            transition: 0.3s ease-in-out;
        }
        &:hover::before {
            transform: scale(1);
        }
        img {
            width: 20px;
            height: 20px;
            transition: .5s ease-in-out;
            filter: ${({theme}) => theme.icons};
        }
        &:hover img {
            filter: ${({theme}) => theme.filter};
        }
    }
    @media (max-width: 1123px) {
        display: flex;
        justify-content: center;
    }
`