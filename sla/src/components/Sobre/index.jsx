import Proficiency from "../Proficiency";
import "./sobre.css"

export default function Sobre() {
  const pro = [
    { name: "Front end", level: 75 },
    { name: "Back end", level: 65 },
    { name: "Analista de Dados", level: 70 },
    { name: "Game Dev", level: 25 },
  ];

  return (
    <div className="sobre-container">
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
