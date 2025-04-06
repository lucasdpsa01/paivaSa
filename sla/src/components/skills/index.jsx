import { skills } from "../../data/skills"

import "./skills.css"

export default function Skills() {
    return (
        <div className="skills">
            <h1>Skills</h1>
            <div className="skills-icon">
                {skills.map((skill) => (
                    <div key={skill.id} className="skill-container">
                        <img src={skill.images} alt="imagens" height={100}/>
                        <div className="nomes">{skill.nome}</div> 
                    </div>
                ))}
            </div>
        </div>
    )
}