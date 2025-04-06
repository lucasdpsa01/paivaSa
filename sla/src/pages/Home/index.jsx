import Header from "../../components/header"
import Geral from "../../components/Geral"
import Footer from "../../components/footer"

import "./home.css"

export default function Home() {
  return(
    <div className="app">
      <Header className="header"/>
      <Geral />
      <Footer />
    </div>
  )
}