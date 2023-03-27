import planificadorGastos from '../assets/img/planificador-gastos.png'
import cotizador from '../assets/img/criptomonedas.png'
import clima from '../assets/img/clima.png'
import bebidas from '../assets/img/bebidas.png'
import veterinaria from '../assets/img/veterinaria_pacientes.png'
import encriptador from '../assets/img/encriptador.png'
import github from '../assets/img/github.svg'
import goProject from '../assets/img/go-project.svg'
import './Projects.css'
import { useRef, useState, useEffect } from 'react'

const Projects = () => {
    const [animado, setAnimado ] = useState(false)
    const boxRef = useRef()
    
    const mostrarScroll = () => {
        let scrollTops = document.documentElement.scrollTop
        const y = boxRef.current.offsetTop;
        if(y - 400  < scrollTops) {
            setAnimado(true)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', mostrarScroll)
    }, [])
    
    return (
        <section ref={boxRef} className={`projects ${animado ? 'animado mostrarCostado' : ''}`} id='projects'>
            <div className='projects-menu'>
                <h2>Projects</h2>
                <div className='projects-content'>
                    <div className='projects-cards'>
                        <img src={planificadorGastos} alt='img1' />
                        <div className='pro-text'>
                            <h4>Planificador de Gastos</h4>
                            <p>Project realizado con React, react-swipeable-list y otros...</p>
                            <div className='pro-text-links'>
                                <a href='https://thirsty-jackson-1304e1.netlify.app' target="_blank"><img src={goProject} alt='go-projects' />Visit Wesite</a>
                                <a href='https://github.com/jeinszz01/Control-Gastos' target="_blank"><img src={github} alt='github' />Repository</a> 
                            </div>
                        </div>
                    </div>
                    <div className='projects-cards'>
                        <img src={cotizador} alt='img2' />
                        <div className='pro-text'>
                            <h4>Criptos React</h4>
                            <p>Aplicación desarrollada con React, Styled Component, y consultando una API.</p>
                            <div className='pro-text-links'>
                                <a href='https://cocky-heyrovsky-785d7a.netlify.app' target="_blank"><img src={goProject} alt='go-projects' />Visit Wesite</a>
                                <a href='https://github.com/jeinszz01/Criptos-React' target="_blank"><img src={github} alt='github' />Repository</a> 
                            </div>
                        </div>
                    </div>
                    <div className='projects-cards'>
                        <img src={clima} alt='img2' />
                        <div className='pro-text'>
                            <h4>Clima Provider</h4>
                            <p>proyecto ClimaProvider, react, context.</p>
                            <div className='pro-text-links'>
                                <a href='https://stately-zuccutto-2c4031.netlify.app' target="_blank"><img src={goProject} alt='go-projects' />Visit Wesite</a>
                                <a href='https://github.com/jeinszz01/ClimaProvider' target="_blank"><img src={github} alt='github' />Repository</a> 
                            </div>
                        </div>
                    </div>
                    <div className='projects-cards'>
                        <img src={bebidas} alt='img2' />
                        <div className='pro-text'>
                            <h4>Buscador de Bebidas</h4>
                            <p>Deployment del proyecto BuscadorBebidas, con Vite, react-bootstrap, Axios, API, providers.</p>
                            <div className='pro-text-links'>
                                <a href='https://scintillating-kelpie-2c09a2.netlify.app' target="_blank"><img src={goProject} alt='go-projects' />Visit Wesite</a>
                                <a href='https://github.com/jeinszz01/BuscadorBebidas' target="_blank"><img src={github} alt='github' />Repository</a> 
                            </div>
                        </div>
                    </div>
                    <div className='projects-cards'>
                        <img src={veterinaria} alt='img2' />
                        <div className='pro-text'>
                            <h4>Proyecto Citas</h4>
                            <p>Deployment del proyecto Citas en React con TailwindCSS, Vite y otros</p>
                            <div className='pro-text-links'>
                                <a href='https://gallant-feynman-1508b1.netlify.app' target="_blank"><img src={goProject} alt='go-projects' />Visit Wesite</a>
                                <a href='https://github.com/jeinszz01/citas_react' target="_blank"><img src={github} alt='github' />Repository</a> 
                            </div>
                        </div>
                    </div>
                    <div className='projects-cards'>
                        <img src={encriptador} alt='img2' />
                        <div className='pro-text'>
                            <h4>Encriptador de Texto</h4>
                            <p>Proyecto encriptador de Texto hecho con Html, Css y Js. | #challengeonecodificador4</p>
                            <div className='pro-text-links'>
                                <a href='https://jeinszz01.github.io/Encriptador-de-texto---Html-Css-and-Js/' target="_blank"><img src={goProject} alt='go-projects' />Visit Wesite</a>
                                <a href='https://github.com/jeinszz01/Encriptador-de-texto---Html-Css-and-Js' target="_blank"><img src={github} alt='github' />Repository</a> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects