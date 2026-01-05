import { Link } from "react-router-dom"
import "./header.css"

export default function Header() {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const top = element.getBoundingClientRect().top + window.pageYOffset - 70;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };
    
    return (
        <div className="header">
            <h1>Portfólio</h1>
            <div className="header-links">
                <button onClick={() => scrollToSection('Experiences')}>Experiências</button>
                <button onClick={() => scrollToSection('Skills')}>Skills</button>
                <button onClick={() => scrollToSection('Projetos')}>Projetos</button>
                <button onClick={() => scrollToSection('Contact')}>Contato</button>
            </div>
        </div>
    )
}