import { useRef, useState, useEffect } from 'react'
import { SectionProjects, DivProjectMenu, DivProjectContent } from './Projects-styled-component'
import { listaprojects } from './listaprojects'
import Project from './Project'

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
                    
                    {listaprojects.map(project => (
                        <Project key={project.titulo} project={project} />
                    ))}

                </DivProjectContent>
            </DivProjectMenu>
        </SectionProjects>
    )
}

export default Projects