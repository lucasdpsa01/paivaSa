import ceub from "../../assets/ceub.jpg"

import "./education.css"

export default function Education() {
    return(
        <div className="education">
            <h2>Education</h2>
            <div className="edu-ceub">
                <img src={ceub} alt="logo ceub" height={50}/>
                <div className="edu-text">
                    <h2>Centro de Ensino Unificado de Brasília</h2>
                    <h3>Ciência da Computação</h3>
                    <h3>Janeiro 2023 - Dezembro 2026</h3>
                    <p>Estudante de Ciência da Computação com experiência prática em desenvolvimento web, lógica de programação e bancos de dados.</p>
                </div>
            </div>
        </div>
    )
}