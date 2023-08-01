import React from "react"
import Banner from "../components/Banner"
import CollapseMenu from "../components/CollapseMenu"
import BannerImg from "../assets/bannerApropos.png"
function Apropos() {

    return (
        <div className="apropos-home">
            <Banner 
            titleBanner={""} background={BannerImg}
            />
            <CollapseMenu />
        </div>
    )
}
export default Apropos