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
            <Link to="/" className="header-portfolio"><h1>Portfólio</h1></Link>
            <div className="header-links">
                <button onClick={() => scrollToSection('Sobre')}>Sobre</button>
                <button onClick={() => scrollToSection('Skills')}>Skills</button>
                <button onClick={() => scrollToSection('Projetos')}>Projetos</button>
                <Link to="/contato"><h3>Contato</h3></Link>
            </div>
        </div>
    )
}