import Introducao from "../../components/introdução"
import Sobre from "../../components/Sobre"
import Skills from "../../components/skills"
import Projetos from "../../components/projetos"
import Education from "../Education"
import Experiences from "../Experiences"
import Email from "../email"

import "./geral.css"

export default function Geral() {
    return(
        <div className="geral">
            <Introducao />
            <Sobre />
            <Skills />
            <Education />
            <Experiences />
            <Projetos />
            <Email />
        </div>
    )
}