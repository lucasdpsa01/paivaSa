import Header from "../../components/header"
import Introducao from "../../components/introdução"
import Sobre from "../../components/Sobre"
import Skills from "../../components/skills"
import Projetos from "../../components/projetos"
import Links from "../../components/links"
import Footer from "../../components/footer"

import "./home.css"

export default function Home() {
  return(
    <div className="app">
      <Header className="header"/>
      <Introducao />
      <Sobre />
      <Skills />
      <Projetos />
      <Links />
      <Footer />
    </div>
  )
}