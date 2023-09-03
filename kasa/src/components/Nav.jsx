import React from 'react';
import Logo from "../assets/LOGO.svg"
import { Link } from 'react-router-dom'
function Nav (){
return (
    <nav className='nav-container'>
        <Link to="/"> <img src={Logo} alt='Logo Kasa' className='home-logo' /></Link>
            <div className='nav-menu'>
                <Link to="/" className="link">Accueil</Link>
                <Link to="/Apropos" className="link">A Propos</Link>
            </div>
</nav>
)
}
export default Nav