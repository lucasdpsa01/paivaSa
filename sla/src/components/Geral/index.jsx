import Introducao from "../../components/introdução"
import Sobre from "../../components/Sobre"
import Skills from "../../components/skills"
import Projetos from "../../components/projetos"
import Links from "../../components/links"

import "./geral.css"

export default function Geral() {
    return(
        <div className="geral">
            <Introducao />
            <Sobre />
            <Skills />
            <Projetos />
            <Links />
        </div>
    )
}