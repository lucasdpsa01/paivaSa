import Header from "./components/header"
import Introducao from "./components/introdução"
import Sobre from "./components/Sobre"
import Skills from "./components/skills"
import Projetos from "./components/projetos"
import Links from "./components/links"
import Footer from "./components/footer"

export default function App() {
  return(
    <div className="app">
      <Header />
      <Introducao />
      <Sobre />
      <Skills />
      <Projetos />
      <Links />
      <Footer />
    </div>
  )
}