import { useEffect, useState } from "react";

import "./tema.css"

export default function Tema() {
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

    return(
        <div className="tema">
            <img src={darkMode ? "https://unpwemjugtntyiedmdvc.supabase.co/storage/v1/object/public/images/moon.png" : "https://unpwemjugtntyiedmdvc.supabase.co/storage/v1/object/public/images/sun.png"} 
                alt="Alternar tema"
                height={35}
                onClick={() => setDarkMode(!darkMode)}
                className="header-img"
            />
        </div>
    )
}