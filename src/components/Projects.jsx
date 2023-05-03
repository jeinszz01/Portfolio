import { useRef, useState, useEffect } from 'react'
import planificadorGastos from '../assets/img/planificador-gastos.webp'
import cotizador from '../assets/img/criptomonedas.webp'
import clima from '../assets/img/clima.webp'
import bebidas from '../assets/img/bebidas.webp'
import veterinaria from '../assets/img/veterinaria_pacientes.webp'
import encriptador from '../assets/img/encriptador.webp'
import ecommerce from '../assets/img/demo1.webp'
import github from '../assets/img/github.svg'
import goProject from '../assets/img/go-project.svg'
import { SectionProjects, DivProjectMenu, DivProjectContent, DivProjectCards, DivProjectText, DivProjectTextLinks } from './Projects-styled-component'


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
        <SectionProjects ref={boxRef} animado={animado} id='projects'>
            <DivProjectMenu>
                <h2>Projects</h2>
                <DivProjectContent>
                    <DivProjectCards>
                        <img src={planificadorGastos} alt='img1' />
                        <DivProjectText>
                            <h3>Planificador de Gastos</h3>
                            <p>Project realizado con React, react-swipeable-list y otros...</p>
                            <DivProjectTextLinks>
                                <a href='https://thirsty-jackson-1304e1.netlify.app' target="_blank"><img src={goProject} alt='go-projects' />Visit Wesite</a>
                                <a href='https://github.com/jeinszz01/Control-Gastos' target="_blank"><img src={github} alt='github' />Repository</a> 
                            </DivProjectTextLinks>
                        </DivProjectText>
                    </DivProjectCards>
                    <DivProjectCards>
                        <img src={cotizador} alt='img2' />
                        <DivProjectText>
                            <h3>Criptos React</h3>
                            <p>Aplicación desarrollada con React, Styled Component, y consultando una API.</p>
                            <DivProjectTextLinks>
                                <a href='https://cocky-heyrovsky-785d7a.netlify.app' target="_blank"><img src={goProject} alt='go-projects' />Visit Wesite</a>
                                <a href='https://github.com/jeinszz01/Criptos-React' target="_blank"><img src={github} alt='github' />Repository</a> 
                            </DivProjectTextLinks>
                        </DivProjectText>
                    </DivProjectCards>
                    <DivProjectCards>
                        <img src={clima} alt='img2' />
                        <DivProjectText>
                            <h3>Clima Provider</h3>
                            <p>proyecto ClimaProvider, react, context.</p>
                            <DivProjectTextLinks>
                                <a href='https://stately-zuccutto-2c4031.netlify.app' target="_blank"><img src={goProject} alt='go-projects' />Visit Wesite</a>
                                <a href='https://github.com/jeinszz01/ClimaProvider' target="_blank"><img src={github} alt='github' />Repository</a> 
                            </DivProjectTextLinks>
                        </DivProjectText>
                    </DivProjectCards>
                    <DivProjectCards>
                        <img src={bebidas} alt='img2' />
                        <DivProjectText>
                            <h3>Buscador de Bebidas</h3>
                            <p>Deployment del proyecto BuscadorBebidas, con Vite, react-bootstrap, Axios, API, providers.</p>
                            <DivProjectTextLinks>
                                <a href='https://scintillating-kelpie-2c09a2.netlify.app' target="_blank"><img src={goProject} alt='go-projects' />Visit Wesite</a>
                                <a href='https://github.com/jeinszz01/BuscadorBebidas' target="_blank"><img src={github} alt='github' />Repository</a> 
                            </DivProjectTextLinks>
                        </DivProjectText>
                    </DivProjectCards>
                    <DivProjectCards>
                        <img src={veterinaria} alt='img2' />
                        <DivProjectText>
                            <h3>Proyecto Citas</h3>
                            <p>Deployment del proyecto Citas en React con TailwindCSS, Vite y otros</p>
                            <DivProjectTextLinks>
                                <a href='https://gallant-feynman-1508b1.netlify.app' target="_blank"><img src={goProject} alt='go-projects' />Visit Wesite</a>
                                <a href='https://github.com/jeinszz01/citas_react' target="_blank"><img src={github} alt='github' />Repository</a> 
                            </DivProjectTextLinks>
                        </DivProjectText>
                    </DivProjectCards>
                    <DivProjectCards>
                        <img src={encriptador} alt='img2' />
                        <DivProjectText>
                            <h3>Encriptador de Texto</h3>
                            <p>Proyecto encriptador de Texto hecho con Html, Css y Js. | #challengeonecodificador4</p>
                            <DivProjectTextLinks>
                                <a href='https://jeinszz01.github.io/Encriptador-de-texto---Html-Css-and-Js/' target="_blank"><img src={goProject} alt='go-projects' />Visit Wesite</a>
                                <a href='https://github.com/jeinszz01/Encriptador-de-texto---Html-Css-and-Js' target="_blank"><img src={github} alt='github' />Repository</a> 
                            </DivProjectTextLinks>
                        </DivProjectText>
                    </DivProjectCards>
                    <DivProjectCards>
                        <img src={ecommerce} alt='img-ecommerce' />
                        <DivProjectText>
                            <h3>Ecommerce Games</h3>
                            <p>Proyecto e-commerce de videojuegos hecho en Java Script. | #challengeonealurageeklatam4</p>
                            <DivProjectTextLinks>
                                <a href='https://taupe-dodol-54fe4c.netlify.app' target="_blank"><img src={goProject} alt='go-projects' />Visit Wesite</a>
                                <a href='https://github.com/jeinszz01/e-commerce-games' target="_blank"><img src={github} alt='github' />Repository</a> 
                            </DivProjectTextLinks>
                        </DivProjectText>
                    </DivProjectCards>
                </DivProjectContent>
            </DivProjectMenu>
        </SectionProjects>
    )
}

export default Projects