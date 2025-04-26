import Header from "../../components/header"
import Geral from "../../components/Geral"
import Footer from "../../components/footer"
import Scroll from "../../components/Scroll"

import "./home.css"

export default function Home() {
  return(
    <div className="app">
      <Header className="header"/>
      <Geral />
      <Footer />
      <Scroll />
    </div>
  )
}