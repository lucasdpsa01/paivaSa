import { useEffect, useState } from "react";
import Tema from "../Tema";

import "./nav.css"

export default function Nav({ isOpen, navClose }) {
    const [closing, setClosing] = useState(false)

    useEffect(() => {
        if (!isOpen) return;
        setClosing(false);
    }, [isOpen]);
    
    const handleClose = () => {
        setClosing(true);
        setTimeout(() => {
            navClose();
        }, 300);
    }

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const top = element.getBoundingClientRect().top + window.pageYOffset - 90;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    const handleNavigate = (id) => {
        scrollToSection(id);
        handleClose();
    };

    if (!isOpen && !closing) return null

    return(
        <div className={`navbar ${closing ? "closing" : "open"}`}>
            <div className="nav-header" onClick={handleClose}>
                <section className="nav-sec1">
                    <h2>Paiva Sá</h2>
                </section>
                <section className="nav-sec2">
                    <img src="https://zvthzrqyqghxxrojjdnf.supabase.co/storage/v1/object/public/tools%20icons/iconx.png" alt="sair" onClick={navClose} className="navbar-btn"/>
                </section>
            </div>
            <div className="navbar-container">
                <Tema />
                <button onClick={() => handleNavigate('Competencias')}>Competências</button>
                <button onClick={() => handleNavigate('Skills')}>Tecnologias</button>
                <button onClick={() => handleNavigate('Experiences')}>Experiências</button>
                <button onClick={() => handleNavigate('Projetos')}>Projetos</button>
                <button onClick={() => handleNavigate('Contact')}>Contato</button>
            </div>
        </div>
    )
}