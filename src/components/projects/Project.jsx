import { DivProjectCards, DivProjectText, DivProjectTextLinks } from "./Projects-styled-component"
import goProject from '../../assets/img/deploy.svg'
import github from '../../assets/img/github.svg'

const Project = ({project}) => {
    const { imagen, titulo, descripcion, website, repository } = project
    return (
        <DivProjectCards>
            <img src={imagen} alt={`imagen_${imagen}`} />
            <DivProjectText>
                <h3>{titulo}</h3>
                <p>{descripcion}</p>
                <DivProjectTextLinks>
                    <a href={website} target="_blank"><img src={goProject} alt='go-projects' />Visit Wesite</a>
                    <a href={repository} target="_blank"><img src={github} alt='github' />Repository</a> 
                </DivProjectTextLinks>
            </DivProjectText>
        </DivProjectCards>
    )
}

export default Project