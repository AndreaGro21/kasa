import React from "react";

function Banner (title){
return(

    <div className="banner-container">
        <p className="title-banner">diocane</p> {/* non posso mettere du jsx mi da errore:Objects are not valid as a React child (found: object with keys {bannerTitle}). If you meant to render a collection of children, use an array instead.  */}
    </div>
)
}

export default Banner