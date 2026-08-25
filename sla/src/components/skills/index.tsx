import { skills } from "../../data/skills"

import "./skills.css"

export default function Skills() {
    return (
        <div className="skills" id="Skills">
            <h2>O que eu faço</h2>
            <p>Um programador Full Stack e Analista de Dados que almeja explorar tudo sobre essas áreas</p>
            <div className="slider-wrapper">
                <div className="slider">
                    <div className="list" style={{ "--quantity": skills.length }}>
                        {skills.map((skill, index) => (
                            <div key={skill.id} className="item" style={{ "--position": index + 1 }}>
                                <img src={skill.images} alt="imagens" height={40} className="skills-images" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="areas-description">
                <p>⚡Desenvolver interfaces front-end / User Interfaces para suas aplicações web</p>
                <p>⚡Análise, manipulação e visualização de dados com Python</p>
                <p>⚡Integração de serviços terceiros como supabase</p>
            </div>
        </div>
    )
}