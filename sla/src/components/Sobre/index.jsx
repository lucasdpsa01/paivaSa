import analise from "../../assets/analise.png"
import fullstack from "../../assets/fullstack.png"
import games from "../../assets/games.png"

import "./sobre.css"

export default function Sobre(){
    return(
        <div className="sobre" id="Sobre">
            <h1>Sobre</h1>
            <>
                <h2>Desenvolvedor Full-Stack</h2>
                <div className="sobre-fullstack">
                    <p>Conhecimento no desenvolvimento de aplicações web completas, atuando tanto no frontend quanto no backend. Possuo Conhecimento em linguagens como JavaScript(React.js, Node.js), e SQL.</p>
                    <img src={fullstack} alt="fullstack" height={120}/>
                </div>
            </>
            <>
                <h2>Analista de Dados</h2>
                <div className="sobre-analise-dados">
                    <p>Experiência em coletar, organizar, interpretar e apresentar dados de forma clara para auxiliar na tomada de desições dentro de uma organização utilizando Python.</p>
                    <img src={analise} alt="analise" height={120}/>
                </div>
            </>
            <>
                <h2>Gamedev</h2>
                <div className="sobre-games">
                    <p>Aprendendo na área de games, em fase inicial de aprendizado e prática. Tenho estudado na criação de games 2D, design de mecânicas, e uso de engines como Unity(C#) e Godot(GDScript).</p>
                    <img src={games} alt="games" height={120}/>
                </div>
            </>
        </div>
    )
}