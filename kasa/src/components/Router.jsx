import React from "react"
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/Home"
import Apropos from "../pages/Apropos"
import Error from "../pages/Error"
import Card from "./Card"
import Data from "./Data"

function MainRoute() {  /* posso chiamarlo semplicemente Router? */
    const fetchedData = Data()
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logements/:logementId" element={<Card Data={fetchedData} />} />
            <Route path="/Apropos" element={<Apropos />} />   {/* Come cambio il bg e testo del banner? */}
            <Route path="*" element={<Error />} />
        </Routes>
    )
}
export default MainRoute


/* DEVO METTERLO IN UNA CARTELLA A PARTE? */