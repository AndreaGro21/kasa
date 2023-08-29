import React from "react"
import { Link } from 'react-router-dom'

function Error() {
    return (
        <div className="error-page">
            <div className="error-page_text">
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/" className="error-page_link">Retourner sur la page d’accueil</Link>
            </div>
        </div>
    )
}
export default Error