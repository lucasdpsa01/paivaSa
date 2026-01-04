import { skills } from "../../data/skills"

import "./skills.css"

export default function Skills() {
    return (
        <div className="skills" id="Skills">
            <h2>O que eu faço</h2>
            <p>Um programador Full Stack e Analista de Dados que almeja explorar tudo sobre essas áreas</p>
            <div className="skills-icon">
                {skills.map((skill) => (
                    <div key={skill.id} className="skill-container">
                        <img src={skill.images} alt="imagens" height={40}className="skills-images"/>
                        <div className="nomes">{skill.nome}</div>
                    </div>
                ))}
            </div>
            <div className="areas-description">
                <p>⚡Desenvolver interfaces front-end / User Interfaces para suas aplicações web</p>
                <p>⚡Análise, manipulação e visualização de dados com Python</p>
                <p>⚡Integração de serviços terceiros como supabase</p>
            </div>
        </div>
    )
}