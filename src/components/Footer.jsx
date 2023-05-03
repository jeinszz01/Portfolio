import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import github from '../assets/img/github.svg'
import { DivFooterIcons, FooterTag, ContentFooter, FooterLogo } from './Footer-styled-component'
import { EnlaceLogo, DivSocialIcons } from './themes/defaults'

const Footer = () => {
    return (
        <FooterTag>
            <ContentFooter>
                <FooterLogo>
                    <EnlaceLogo href='/'>Jein<span>S</span></EnlaceLogo>
                </FooterLogo>
                <DivFooterIcons>
                    <DivSocialIcons footers>
                        <a href='https://www.linkedin.com/in/jein-josef-rojas-licas-213446110/' target="_blank"><img src={navIcon1} alt='nav-icon1' /></a>
                        <a href='https://www.facebook.com/jeinjosef.rojaslicas' target="_blank"><img src={navIcon2} alt='nav-icon2'  /></a>
                        <a href='https://www.instagram.com' target="_blank"><img src={navIcon3} alt='nav-icon3'  /></a>
                        <a href='https://github.com/jeinszz01' target="_blank"><img src={github} alt='nav-icon3'  /></a>
                    </DivSocialIcons>
                    <p>&copy; Copyright 2023. All Rights Reserved | J.J.Rojas</p>
                </DivFooterIcons>
                
            </ContentFooter>
        </FooterTag>
    )
}

export default Footer