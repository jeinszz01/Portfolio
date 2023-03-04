
import htmlLogo from '../assets/img/HTML5.png'
import cssLogo from '../assets/img/css3.png'
import javaScriptLogo from '../assets/img/JavaScript-logo.png'
import reactLogo from '../assets/img/react-logo.png'
import responsiveLogo from '../assets/img/responsive.png'
import sassLogo from '../assets/img/sass-logo.png'
import visualSLogo from '../assets/img/Visual_Studio_Code.png'
import restApiLogo from '../assets/img/rest-api.png'
import gitLogo from '../assets/img/Git.png'
import gitHubLogo from '../assets/img/GitHub-Mark.png'

import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import './Skills.css'


const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    }
    return (
        
        <section className="skills-container" id='skills'>
            <div className='skill-bx'>
                <h2>Skills</h2>
                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                    <div className="item">
                        <img src={htmlLogo} alt="Imagen-item1" />
                        <h3>HTML5</h3>
                    </div>
                    <div className="item">
                        <img src={cssLogo} alt="Imagen-item2" />
                        <h3>Css3</h3>
                    </div>
                    <div className="item">
                        <img src={javaScriptLogo} alt="Imagen-item3" />
                        <h3>JavaScript</h3>
                    </div>
                    <div className="item">
                        <img src={reactLogo} alt="Imagen-item4" />
                        <h3>React</h3>
                    </div>
                    <div className="item">
                        <img src={responsiveLogo} alt="Imagen-item5" />
                        <h3>Responsive Websites</h3>
                    </div>
                    <div className="item">
                        <img src={sassLogo} alt="Imagen-item6" />
                        <h3>SASS</h3>
                    </div>
                    <div className="item">
                        <img src={visualSLogo} alt="Imagen-item7" />
                        <h3>VS Code</h3>
                    </div>
                    <div className="item">
                        <img src={restApiLogo} alt="Imagen-item8" />
                        <h3>RESTful APIs</h3>
                    </div>
                    <div className="item">
                        <img src={gitLogo} alt="Imagen-item9" />
                        <h3>Git</h3>
                    </div>
                    <div className="item">
                        <img src={gitHubLogo} alt="Imagen-item10" />
                        <h3>GitHub</h3>
                    </div>
                </Carousel>
            </div>
            
        </section>
    )
}

export default Skills