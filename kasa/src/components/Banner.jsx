import React from "react";

function Banner({ titleBanner, background, style }) {
    return (
        <div className="banner-container" style={{ backgroundImage: `url(${background})` }}>
            <p className="title-banner">{`${titleBanner}`}</p> {/* non posso mettere du jsx mi da errore:Objects are not valid as a React child (found: object with keys {bannerTitle}). If you meant to render a collection of children, use an array instead.  */}
        </div>
    )
}

export default Banner



