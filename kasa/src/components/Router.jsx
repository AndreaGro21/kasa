import React from "react"
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/Home"
import Apropos from "../pages/Apropos"
import Error from "../pages/Error"
import Card from "./Card"

function LogementDetail() {
    const { logementId } = useParams() // "toto"
    const logement = {} // trouver le logement qui a l'ID "toto"

    return (
        <div>Afficher les infos du logement {logement.id}</div>
    )
}

function MainRoute() {  /* posso chiamarlo semplicemente Router? */
    return (
    
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logements/:logementId" element={<Card />} />
            <Route path="/Apropos" element={<Apropos/>} />   {/* Come cambio il bg e testo del banner? */}
            <Route path="*" element={<Error />} />
        </Routes>
    
    )
}

export default MainRoute


/* DEVO METTERLO IN UNA CARTELLA A PARTE? */