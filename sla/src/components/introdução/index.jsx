import minhafoto from "../../assets/minha_foto.jpg"

import "./introducao.css"

export default function Introducao(){
    return(
        <div className="introducao" id="introducao">
            <div className="introducao-text">
                <h1>Olá, eu sou Paiva de Sá</h1>
                <p>Estou sempre aprimorado minhas skills em React and Node para ser um programador full-stack. Meu objetivo é criar ferramentas que ajudem as pessoas e sempre buscando conhecimento.</p>
            </div>
            <img src={minhafoto} alt="minha foto" height={250} className="introducao-imagem"/>
        </div>
    )
}