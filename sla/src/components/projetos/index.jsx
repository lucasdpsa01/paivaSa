import { projects } from "../../data/projects"

import "./projetos.css"

export default function Projetos(){
    return(
        <div className="projetos" id="Projetos">
            <h1>Projetos</h1>
            {projects.map((project) => (
                <div key={project.id} className="projetos-container">
                    <h2>{project.nome}</h2>
                    <p>{project.descricao}</p>
                </div>
            ))}
        </div>
    )
}