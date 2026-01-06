import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

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
                
            </div>
        </div>
    )
}