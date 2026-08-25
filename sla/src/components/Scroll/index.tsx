import { useEffect, useState } from "react";
import cima from "../../assets/cima.png"

import './scroll.css';

export default function Scroll() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`scroll-top ${isVisible ? 'show' : ''}`}
        >
        <img src={cima} alt="cima" height={20}/>
        </button>
    );
}
