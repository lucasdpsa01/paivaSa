import { useEffect, useRef, useState } from "react";
import "./proficiency.css"

export default function Proficiency({ name, level}) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true);
            }
        });

        if (ref.current) {
            observer.observe(ref.current);
        }
        
        return () => observer.disconnect();
    }, []);
    
    return(
        <div className="proficiency" ref={ref}>
            <div className="proficiency-header">
                <span>{name}</span>
                <span>{level}%</span>
            </div>

            <div className="proficiency-bar">
                <div className="proficiency-fill" style={{ width: visible ? `${level}%` : "0%" }}></div>
            </div>
        </div>
    )
}