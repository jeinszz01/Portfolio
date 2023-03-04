import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import github from '../assets/img/github.svg'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className='content-footer'>
                <div className='footer-logo'>
                    <a href='/'>JeinS</a>
                </div>
                <div className='footer-icons'>
                    <div className='social-icon'>
                        <a href='https://www.linkedin.com/in/jein-josef-rojas-licas-213446110/' className='icon' target="_blank"><img src={navIcon1} alt='nav-icon1' /></a>
                        <a href='https://www.facebook.com/jeinjosef.rojaslicas' className='icon' target="_blank"><img src={navIcon2} alt='nav-icon2'  /></a>
                        <a href='https://www.instagram.com' className='icon' target="_blank"><img src={navIcon3} alt='nav-icon3'  /></a>
                        <a href='https://github.com/jeinszz01' className='icon' target="_blank"><img src={github} alt='nav-icon3'  /></a>
                    </div>
                    <p>&copy; Copyright 2023. All Rights Reserved | J.J.Rojas</p>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer