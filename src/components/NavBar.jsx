import { useState, useEffect } from 'react'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import github from '../assets/img/github.svg'
import menu from '../assets/img/menu.svg'
import sun from '../assets/img/sun.svg'
import moon from '../assets/img/moon.svg'
import './NavBar.css'

const NavBar = () => {

    const [ activeLink, setActiveLink ] = useState('home')
    const [ activeMode, setActiveMode ] = useState(false)
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

    const eventNavbar = async(dat) => {
        if(dat === 'home') {
            window.scrollTo(0,0)
            setActiveLink('home')
        }
        if(dat === 'skills') {
            setActiveLink('skills')
        }
        if(dat === 'projects') {
            setActiveLink('projects')
        }
        if(dat === 'contactMe') {
            setActiveLink('contact')
        }
    }

    return (
        <nav className={`navbar  ${scrolled===false || activeScroll ? '' : 'scrolled'}`} id='home' >
            <div className={`container`}>
                <nav>
                    <a href='/'>JeinS</a>
                </nav>
                <div className={`menu ${activeScroll  ? 'menu active-scroll' : ''}`}>
                    <a href='#home' className={activeLink === 'home' ? 'navbar-link active' : 'navbar-link'} onClick={() => eventNavbar('home')} >Home</a>
                    <a href="#skills" className={activeLink === 'skills' ? 'navbar-link active' : 'navbar-link'} onClick={() => eventNavbar('skills')}>Skills</a>
                    <a href="#projects" className={activeLink === 'projects' ? 'navbar-link active' : 'navbar-link'} onClick={() => eventNavbar('projects')}>Projects</a>
                    <div className='social-buttons'>
                        <div className='social-icon'>
                            <a href='https://www.linkedin.com/in/jein-josef-rojas-licas-213446110/' className='icon' target="_blank"><img src={navIcon1} alt='nav-icon1' /></a>
                            <a href='https://www.facebook.com/jeinjosef.rojaslicas' className='icon' target="_blank"><img src={navIcon2} alt='nav-icon2' /></a>
                            <a href='https://www.instagram.com' className='icon' target="_blank"><img src={navIcon3} alt='nav-icon3' /></a>
                            <a href='https://github.com/jeinszz01' className='icon' target="_blank"><img src={github} alt='nav-icon3' /></a>
                        </div>
                        <a href="#contact"><button type='button' onClick={() => eventNavbar('contactMe')}><span>Contact me</span></button></a>
                    </div>
                    <button className={activeMode ? 'switch' : 'active-dark switch'} onClick={() => setActiveMode(!activeMode)}>
                        <span><img src={sun} alt='icono-sun'/></span>
                        <span><img src={moon} alt='icono-moon'/></span>
                    </button>
                </div>
                
                <button type='button' className='menu-icono' onClick={() => setActiveScroll(!activeScroll)}><img src={menu} alt='icono-menu' /></button>
            </div>
        </nav>
    )
}

export default NavBar