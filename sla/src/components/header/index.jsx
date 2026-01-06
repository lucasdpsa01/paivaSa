import { useEffect, useState } from "react";
import "./header.css"

export default function Header() {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const top = element.getBoundingClientRect().top + window.pageYOffset - 70;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
            document.body.classList.remove("light");
        } else {
            document.body.classList.add("light");
            document.body.classList.remove("dark");
        }
    })
    
    return (
        <div className="header">
            <h1>Portfólio</h1>
            <div className="header-links">
                <button onClick={() => scrollToSection('Skills')}>Skills</button>
                <button onClick={() => scrollToSection('Experiences')}>Experiências</button>
                <button onClick={() => scrollToSection('Projetos')}>Projetos</button>
                <button onClick={() => scrollToSection('Contact')}>Contato</button>
                <img src={darkMode ? "https://unpwemjugtntyiedmdvc.supabase.co/storage/v1/object/public/images/moon.png" : "https://unpwemjugtntyiedmdvc.supabase.co/storage/v1/object/public/images/sun.png"} 
                alt="Alternar tema"
                height={35}
                onClick={() => setDarkMode(!darkMode)}
                className="header-img"
                />
            </div>
        </div>
    )
}