import { projects } from "../../data/projects"

import "./projetos.css"

export default function Projetos() {
    return (
        <div className="projetos" id="Projetos">
            <h2>Projetos</h2>
            <div className="projects">
                {projects.map((project) => (
                    <div key={project.id} className="projetos-container">
                        <a href={project.site}>
                            <h3>{project.nome}</h3>
                            <p>{project.descricao}</p>
                            <div className="pro-linguagens">
                                {project.linguagens.map((linguagem, index) => (
                                    <span key={index} className="linguagem">{linguagem}</span>
                                ))}
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}