import styled from "styled-components";

export const FooterTag = styled.footer`
    background: ${({theme}) => theme.fondoFooter};
    background-size: cover;
    background-position: center;
`
export const ContentFooter = styled.div`
    padding: 50px 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
    gap: 1rem;
`
export const FooterLogo = styled.div`
    display: flex;
    justify-self: left;
    align-items: center;
    margin-left: 10rem;
    @media (max-width:1024px) {
        justify-self: center;
        align-items: center;
        margin-left: 0;
    }
`

export const DivFooterIcons = styled.div`
    display: flex;
    flex-direction: column;
    justify-self: right;
    margin-right: 10rem;
    gap: 1rem;
    @media (max-width:1123px) {
        justify-self: center;
        margin: 0;
    }
`