import { useState } from "react";
import Tema from "../Tema";
import Nav from "../Nav";
import hambuger from "../../assets/hamburger.svg"

import "./header.css"

interface HeaderProps {
className?: string;
}

export default function Header( {className}: HeaderProps) {

    const [isNav, setIsNav] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const top = element.getBoundingClientRect().top + window.pageYOffset - 90;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <div className={`header ${className ?? ''}`}>
            <h1>Portfólio</h1>
            <div className="header-links">
                <button onClick={() => scrollToSection('Competencias')}>Competências</button>
                <button onClick={() => scrollToSection('Skills')}>Tecnologias</button>
                <button onClick={() => scrollToSection('Experiences')}>Experiências</button>
                <button onClick={() => scrollToSection('Projetos')}>Projetos</button>
                <button onClick={() => scrollToSection('Contact')}>Contato</button>
                <Tema />
            </div>
            
            <Nav 
                isOpen={isNav}
                navClose={() => setIsNav(false)}
            />

            <button
                className="hambuger"
                onClick={() => setIsNav(true)}
                aria-label="Abrir menu"
            >
                <img src={hambuger} alt="menu" />
            </button>
        </div>
    )
}