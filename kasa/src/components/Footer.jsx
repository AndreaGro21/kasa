import React from 'react';
import LogoFooter from "../assets/LOGO-footer.png"

function Footer (){
    return (
        <footer>
            <img src={LogoFooter} alt='Logo Kasa' className='footer-logo' />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
    }
    export default Footer