import React from 'react';
import Logo from "../assets/LOGO.svg"
import { Link } from 'react-router-dom'
function Nav (){
return (
    <nav className='nav-container'>
<img src={Logo} alt='Logo Kasa' className='home-logo' />
<div className='nav-menu'>
            <Link to="/" className="link">Accueil</Link>
            <Link to="/Apropos" className="link">A Propos</Link>
</div>
</nav>
)
}
export default Nav