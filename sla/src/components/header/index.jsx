import { useState } from "react";
import Tema from "../Tema";
import Nav from "../Nav";

import "./header.css"

export default function Header() {

    const [isNav, setIsNav] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const top = element.getBoundingClientRect().top + window.pageYOffset - 90;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <div className="header">
            <h1>Portfólio</h1>
            <div className="header-links">
                <button onClick={() => scrollToSection('Competencias')}>Competências</button>
                <button onClick={() => scrollToSection('Skills')}>Tecnologias</button>
                <button onClick={() => scrollToSection('Experiences')}>Experiências</button>
                <button onClick={() => scrollToSection('Projetos')}>Projetos</button>
                <button onClick={() => scrollToSection('Contact')}>Contato</button>
                <Tema />
            </div>

        </div>
    )
}