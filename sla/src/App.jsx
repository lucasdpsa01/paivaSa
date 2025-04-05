import minhafoto from "./assets/minha_foto.jpg"
import reacticon from "./assets/react-brands-solid.svg"
import js from "./assets/js.png"
import node from "./assets/node.png"
import py from "./assets/python.png"
import insta from "./assets/instagram.png"
import facebook from "./assets/facebook.png"
import linkedin from "./assets/linkedin.png"
import github from "./assets/github.png"

export default function App() {
  return (
    <div className="app">
      <div className="sobre-mim">
        <h1>Olá, Sou Lucas Paiva</h1>
        <p>Apaixonado por tecnologia, linguagens e viver através da programação. Sempre aprimorando minhas skills em React and Node.js para ser um desenvolvedor full-stack. De uma olhada nos meus repositórios no meu github😁</p>
        <img src={minhafoto} alt="foto minha" height={250} />
      </div>
      <div className="Skills">
        <h1>Skills</h1>
        <div className="skills-icon">
          <img src={reacticon} alt="react-icon" height={200}/>
          <img src={js} alt="javascript" height={200}/>
          <img src={node} alt="node" height={200}/>
          <img src={py} alt="python" height={200}/>
        </div>
      </div>
      <div className="Minhas redes sociais">
        <h1>Minhas redes sociais</h1>
        <div className="redes-icon">
          <img src={facebook} alt="facebook" height={150}/>
          <img src={github} alt="github" height={150}/>
          <img src={linkedin} alt="linkedin"height={150} />
        </div>
      </div>
    </div>
  )
}