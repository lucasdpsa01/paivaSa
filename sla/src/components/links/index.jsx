import { redes_sociais } from "../../data/redes-sociais"

import "./links.css"

export default function Links() {
    return(
        <div className="links">
            <h1>Minhas redes sociais</h1>
            <div className="links-icon">
            {redes_sociais.map((redes) => (
                <div key={redes.id} className="redes-container">
                    <a href={redes.url}><img src={redes.images} alt="redes sociais" height={80} className="links-images"/>
                    <p>🔗{redes.nome}</p></a>
                </div>
            ))}
            </div>
        </div>
    )
}