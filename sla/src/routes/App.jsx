import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Contato from "../pages/Contact"

export default function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contato" element={<Contato/>}/>
      </Routes>
    </Router>
  )
}