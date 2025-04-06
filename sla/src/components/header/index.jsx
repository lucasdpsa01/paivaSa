import { Link } from "react-router-dom"
import "./header.css"

export default function Header(){
    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      };
    return (
        <div className="header">
            <h1>Portifólio</h1>
            <div className="header-links">
                <button onClick={() => scrollToSection('Sobre')}>Sobre</button>
                <button onClick={() => scrollToSection('Skills')}>Skills</button>
                <button onClick={() => scrollToSection('Projetos')}>Projetos</button>
                <Link to="/contato"><h3>Contato</h3></Link>
            </div>
        </div>
    )
}