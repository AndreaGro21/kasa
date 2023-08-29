import React from "react"
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/Home"
import Apropos from "../pages/Apropos"
import Error from "../pages/Error"
import Card from "../pages/Card"
import Data from "../Data"

function MainRoute() {  
    const fetchedData = Data()
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logements/:logementId" element={<Card Data={fetchedData} />} />
            <Route path="/Apropos" element={<Apropos />}/>
            <Route path="*" element={<Error />} />
        </Routes>
    )
}
export default MainRoute


