import { curriculos } from "../../data/curriculos.js"

import "./resume.css"

export default function Resume() {
    return (
        <div className="resume">
            <h2>Meus Currículos</h2>
            <p>Disponibilizo abaixo as versões do meu currículo para análise.</p>
            <div className="resume-container">
                {curriculos.map((item) => (
                <div key={item.id} className="resume-list">
                    <a href={item.caminho} target="_blank" rel="noreferrer">
                        <div className="resume-item">
                            <h3>{item.nome}</h3>
                        </div>
                    </a>
                </div>
                ))}
            </div>
        </div>
    )
}