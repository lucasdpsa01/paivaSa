import { useEffect, useState } from "react";

import "./tema.css"
import sun from "../../assets/sun.png"
import moon from "../../assets/moon.png"

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
            <img src={darkMode ? moon : sun} 
                alt="Alternar tema"
                height={35}
                onClick={() => setDarkMode(!darkMode)}
                className="header-img"
            />
        </div>
    )
}