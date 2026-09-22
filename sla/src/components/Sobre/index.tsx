import Proficiency from "../Proficiency";
import "./sobre.css"

export default function Sobre() {
  const pro = [
    { name: "Front end", level: 80 },
    { name: "Back end", level: 55 },
    { name: "Analista de Dados", level: 50 },
  ];

  return (
    <div className="sobre-container" id="Competencias">
      <h2>Minhas Proficiências</h2>

      {pro.map(({ name, level }, index) => (
        <Proficiency
          key={index}
          name={name}
          level={level}
        />
      ))}
    </div>
  );
}
