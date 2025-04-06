import Header from "./components/header"
import Introducao from "./components/introdução"
import Sobre from "./components/Sobre"
import Skills from "./components/skills"

export default function App() {
  return(
    <div className="app">
      <Header />
      <Introducao />
      <Sobre />
      <Skills />
    </div>
  )
}