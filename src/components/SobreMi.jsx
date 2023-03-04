import imgDowload from '../assets/img/dowload.svg'
import sobreMi from '../assets/img/About-me.png'
import './SobreMi.css'

const SobreMi = () => {
    return (
        <section className='sobre-mi'>
            <div className='about-me-container'>
                <h2>About Me</h2>
                <div className='sobre-mi-content'>
                    <div className='sobre-mi-img'>
                        <img src={sobreMi} />
                    </div>
                    <div className='sobre-mi-texto'>
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
                        <a href="https://drive.google.com/file/d/1bz9OBdq1Q-voDWd2bp1CJhDKvcmkSG7E/view">Dowload C.V <img src={imgDowload} alt='icono-dowload'/></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SobreMi