import "./sobre.css"

export default function Sobre(){
    return(
        <div className="sobre" id="Sobre">
            <h1>Sobre</h1>
            <div className="sobre-fullstack">
                <h2>Desenvolvedor Full-Stack</h2>
                <p>Conhecimento no desenvolvimento de aplicações web completas, atuando tanto no frontend quanto no backend. Possuo Conhecimento em linguagens como JavaScript(React.js, Node.js), e SQL</p>
            </div>
            <div className="sobre-analise-dados">
                <h2>Analista de Dados</h2>
                <p>Experiência em coletar, organizar, interpretar e apresentar dados de forma clara para auxiliar na tomada de desições dentro de uma organização utilizando Python.</p>
            </div>
            <div className="sobre-games">
                <h2>Gamedev</h2>
                <p>Aprendendo na área de games, em fase inicial de aprendizado e prática. Tenho estudado na criação de games 2D, design de mecânicas, e uso de engines como Unity(C#) e Godot(GDScript)</p>
            </div>
        </div>
    )
}