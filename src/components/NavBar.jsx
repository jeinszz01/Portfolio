import { useState, useEffect } from 'react'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import github from '../assets/img/github.svg'
import menu from '../assets/img/menu.svg'
import sun from '../assets/img/sun.svg'
import moon from '../assets/img/moon.svg'
import { Navbar, DivContainer, DivSocialButtons, BotonMenuIcon, DivMenu, Links, ButtonSwitcher } from './NavBar-style-component'
import { EnlaceLogo, DivSocialIcons } from './themes/defaults'

const NavBar = ({handleTheme, activeMode}) => {
    
    const [ activeLinkH, setActiveLinkH ] = useState(false)
    const [ activeLinkS, setActiveLinkS ] = useState(false)
    const [ activeLinkP, setActiveLinkP ] = useState(false)
    const [ activeScroll, setActiveScroll ] = useState(false)
    const [ scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const eventNavbar = (dat) => {
        if(dat === 'home') {
            window.scrollTo(0,0)
            setActiveLinkH(true)
            setActiveLinkS(false)
            setActiveLinkP(false)
            setActiveScroll(false)
        }
        if(dat === 'skills') {
            setActiveLinkS(true)
            setActiveLinkH(false)
            setActiveLinkP(false)
            setActiveScroll(false)
        }
        if(dat === 'projects') {
            setActiveLinkP(true)
            setActiveLinkH(false)
            setActiveLinkS(false)
            setActiveScroll(false)
        }
        if(dat === 'contactMe') {
            setActiveScroll(false)
        }
    }

    return (
        <Navbar scrolled={scrolled} activeScroll={activeScroll} id='home' >
            <DivContainer scrolled={scrolled} activeScroll={activeScroll}>
                <nav>
                    <EnlaceLogo href='/'>Jein<span>S</span></EnlaceLogo>
                </nav>
                <DivMenu activeScroll={activeScroll}>
                    <Links href='#home' activeLink={activeLinkH} onClick={() => eventNavbar('home')}>Home</Links>
                    <Links href="#skills" activeLink={activeLinkS}  onClick={() => eventNavbar('skills')}>Skills</Links>
                    <Links href="#projects" activeLink={activeLinkP}  onClick={() => eventNavbar('projects')}>Projects</Links>
                    <DivSocialButtons>
                        <DivSocialIcons>
                            <a href='https://www.linkedin.com/in/jein-josef-rojas-licas-213446110/' target="_blank"><img src={navIcon1} alt='nav-icon1'/></a>
                            <a href='https://www.facebook.com/jeinjosef.rojaslicas' target="_blank"><img src={navIcon2} alt='nav-icon2'/></a>
                            <a href='https://www.instagram.com' target="_blank"><img src={navIcon3} alt='nav-icon3'/></a>
                            <a href='https://github.com/jeinszz01' target="_blank"><img src={github} alt='nav-icon3'/></a>
                        </DivSocialIcons>
                        <a href="#contact"><button type='button' onClick={() => eventNavbar('contactMe')}><span>Contact me</span></button></a>
                    </DivSocialButtons>
                    <ButtonSwitcher activeMode={!activeMode} onClick={() => handleTheme()}>
                        <span><img src={sun} alt='icono-sun'/></span>
                        <span><img src={moon} alt='icono-moon'/></span>
                    </ButtonSwitcher>
                </DivMenu>
                
                <BotonMenuIcon type='button' onClick={() => setActiveScroll(!activeScroll)}><img src={menu} alt='icono-menu'/></BotonMenuIcon>
            </DivContainer>
        </Navbar>
    )
}

export default NavBar