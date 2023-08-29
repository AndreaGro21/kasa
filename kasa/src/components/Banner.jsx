import React from "react";

function Banner({ titleBanner, background, className}) {
    return (
        <div 
        className={className}
        style={{ backgroundImage: `url(${background})`}}
        >
            <p className="title-banner">{`${titleBanner}`}</p>
        </div>
    )
}
export default Banner



