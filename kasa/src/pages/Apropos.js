import React from "react"
import Banner from "../components/Banner"
import CollapseMenu from "../components/CollapseMenu"
import BannerImg from "../assets/bannerApropos.png"
import BannerMobile from "../assets/bannerAproposMobile.png"
import { useState, useEffect } from 'react';
function Apropos() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const background = windowWidth < 780 ? BannerMobile : BannerImg;
    return (
        <div className="apropos-home">
            <Banner
                className="banner-apropos"
                titleBanner={""}
                background={background}
            />
<div className="collapse-container">   
            <CollapseMenu
                styleContainer="collapse-list"
                styleBar="title-collapse_apropos"
                title="Fiabilité"
                text="Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
            />
            <CollapseMenu
                styleContainer="collapse-list"
                styleBar="title-collapse_apropos"
                title="Respect"
                text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            />
            <CollapseMenu
                styleContainer="collapse-list"
                styleBar="title-collapse_apropos"
                title="Service"
                text="Chez Kasa, le service est au cœur de notre métier. Nous nous assurons que chaque voyageur passe un moment d'exception, du début à la fin de leur séjour."
            />
            <CollapseMenu
                styleContainer="collapse-list"
                styleBar="title-collapse_apropos"
                title="Sécurité"
                text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
                correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
                également des ateliers sur la sécurité domestique pour nos hôtes."
            />
            </div>
        </div>
    )
}
export default Apropos