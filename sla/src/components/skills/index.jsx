import { skills } from "../../data/skills"

import "./skills.css"

export default function Skills() {
    return (
        <div className="skills" id="Skills">
            <h1>Tecnologias</h1>
            <div className="skills-icon">
                {skills.map((skill) => (
                    <div key={skill.id} className="skill-container">
                        <img src={skill.images} alt="imagens" height={90}className="skills-images"/>
                        <div className="nomes">{skill.nome}</div> 
                    </div>
                ))}
            </div>
        </div>
    )
}