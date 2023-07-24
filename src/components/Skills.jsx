import htmlLogo from '../assets/img/html.png'
import cssLogo from '../assets/img/css3.png'
import javaScriptLogo from '../assets/img/JavaScript-logo.png'
import reactLogo from '../assets/img/react-logo.png'
import responsiveLogo from '../assets/img/responsive.webp'
import sassLogo from '../assets/img/sass-logo.png'
import visualSLogo from '../assets/img/Visual_Studio_Code.png'
import restApiLogo from '../assets/img/rest-api.png'
import gitLogo from '../assets/img/Git.png'
import gitHubLogo from '../assets/img/GitHub-Mark.png'
import nodelogo from '../assets/img/nodelogo.webp'
import styledcomp from '../assets/img/styledcomponents.webp'
import { SectionSkillsContainer, SkillBox, CarouselCss, ImgSkills } from './Skills-styled-component'
import 'react-multi-carousel/lib/styles.css'

const Skills = () => {
    const responsive = {
        superLargeDesktop: {breakpoint: { max: 4000, min: 3000 },items: 5},
        desktop: {breakpoint: { max: 3000, min: 1024 },items: 3},
        tablet: {breakpoint: { max: 1024, min: 464 },items: 2},
        mobile: {breakpoint: { max: 464, min: 0 },items: 1}
    }
    return (
        
        <SectionSkillsContainer id='skills'>
            <SkillBox>
                <h2>Skills</h2>
                <CarouselCss responsive={responsive} infinite={true} className="owl-carousel owl-theme">
                    <div>
                        <ImgSkills src={htmlLogo} alt="Imagen-item1" />
                        <h3>HTML5</h3>
                    </div>
                    <div>
                        <ImgSkills src={cssLogo} alt="Imagen-item2" />
                        <h3>Css3</h3>
                    </div>
                    <div>
                        <ImgSkills src={javaScriptLogo} alt="Imagen-item3" />
                        <h3>JavaScript</h3>
                    </div>
                    <div>
                        <ImgSkills src={reactLogo} alt="Imagen-item4" />
                        <h3>React</h3>
                    </div>
                    <div>
                        <ImgSkills src={nodelogo} alt="Imagen-node" />
                        <h3>Node.js</h3>
                    </div>
                    <div>
                        <ImgSkills src={responsiveLogo} alt="Imagen-item5" />
                        <h3>Responsive Websites</h3>
                    </div>
                    <div>
                        <ImgSkills src={styledcomp} alt="imagen-sc" />
                        <h3>Styled Components</h3>
                    </div>
                    <div>
                        <ImgSkills src={sassLogo} alt="Imagen-item6" />
                        <h3>SASS</h3>
                    </div>
                    <div>
                        <ImgSkills src={visualSLogo} alt="Imagen-item7" />
                        <h3>VS Code</h3>
                    </div>
                    <div>
                        <ImgSkills src={restApiLogo} alt="Imagen-item8" />
                        <h3>RESTful APIs</h3>
                    </div>
                    <div>
                        <ImgSkills src={gitLogo} alt="Imagen-item9" />
                        <h3>Git</h3>
                    </div>
                    <div>
                        <ImgSkills src={gitHubLogo} alt="Imagen-item10" />
                        <h3>GitHub</h3>
                    </div>
                </CarouselCss>
            </SkillBox>
            
        </SectionSkillsContainer>
    )
}

export default Skills