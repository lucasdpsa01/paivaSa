import ceub from "../../assets/ceub.jpg"
import mgi from "../../assets/mgi.jpg"

import "./experiences.css"

export default function Experiences() {
    return (
        <div className="experiences">
            <h2>Experiências</h2>
            <div className="ex-card">
                <div className="ex">
                    <h3>Ministério de Inovação e Gestão</h3>
                    <img src={mgi} alt="MGI logo"/>
                    <h3>Analista de Dados focado em automação</h3>
                    <p>Out 2025 - Present</p>
                    <p>Análise e automação de dados com Python, Pandas e visualização de dados, transformando informações brutas em insights acionáveis.</p>
                </div>
                <div className="ex">
                    <h3>Centro de Ensino Unificado de Brasília - CEUB</h3>
                    <img src={ceub} alt="aula logo"/>
                    <h3>Monitor de Ciência da Computação</h3>
                    <p>Fev 2025 - Dez 2025</p>
                    <p>Como monitor, fui responsável pelo suporte de alunos em atividades acadêmicas, realização de cursos nas linguagens de programação Python, JavaScript e das linguagens HTML/CSS</p>
                </div>
            </div>
        </div>
    )
}