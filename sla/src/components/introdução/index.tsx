import eu from "../../assets/eu.jpg"
import { redes_sociais } from "../../data/redes-sociais"

import "./introducao.css"

export default function Introducao() {
    return (
        <div className="introducao" id="introducao">
            <div className="introducao-text">
                <h2>Olá, eu sou Paiva de Sá</h2>
                <p>Estou sempre aprimorado minhas skills em React and Node para ser um programador full-stack. Meu objetivo é criar ferramentas que ajudem as pessoas e sempre buscando conhecimento.</p>
                <div className="links-icon">
                    {redes_sociais.map((redes) => (
                        <div key={redes.id} className="redes-container">
                            <a href={redes.url}><img src={redes.images} alt="redes sociais" height={40} className="links-images" /></a>
                        </div>
                    ))}
                </div>
            </div>
            <img src={eu} alt="minha foto" height={250} className="introducao-imagem" />
        </div>
    )
}