import imgDowload from '../assets/img/dowload.svg'
import sobreMi from '../assets/img/About-me.png'
import { SectionSobreMi, AboutMeContainer, AboutMeContent, AboutMeImg, AboutMeText } from './SobreMi-styled-component'

const SobreMi = () => {
    return (
        <SectionSobreMi>
            <AboutMeContainer>
                <h2>About Me</h2>
                <AboutMeContent>
                    <AboutMeImg>
                        <img src={sobreMi} alt='img-sobre-mi' />
                    </AboutMeImg>
                    <AboutMeText>
                        <p>Hello! I am currently studying the creation of web sites and applications. 
                            My main focus these days is building accessible, dynamic and responsive products, 
                            with UI/UX design in mind.
                        </p>
                        <p>
                            I constantly rely on learning and teaching platforms such as Udemy, Youtube
                            and Alura Latam which contain interesting courses.
                        </p>
                        <p>
                            You can get more information about me by <span>downloading my C.V.</span>
                        </p>
                        <a href="https://drive.google.com/file/d/1bPmiLAqkMNVP98jsBjpBnFLYTUUGFeZ3/view?usp=sharing" target="_blank">
                            Dowload C.V <img src={imgDowload} alt='icono-dowload'/>
                        </a>
                    </AboutMeText>
                </AboutMeContent>
            </AboutMeContainer>
        </SectionSobreMi>
    )
}

export default SobreMi