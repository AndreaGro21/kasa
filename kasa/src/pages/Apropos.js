import React from "react"
import Banner from "../components/Banner"
import CollapseMenu from "../components/CollapseMenu"
import BannerImg from "../assets/bannerApropos.png"
function Apropos() {
    return (
        <div className="apropos-home">
            <Banner
                titleBanner={""} 
                background={BannerImg}
                
            />
            <CollapseMenu
                styleContainer="apropos-list"
                styleBar="collapse-handler"
                title="Fiabilité"
                text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
            />

            <CollapseMenu
                styleContainer="apropos-list"
                styleBar="collapse-handler"
                title="Respect"
                text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            />
            <CollapseMenu

                styleContainer="apropos-list"
                styleBar="collapse-handler"
                title="Service"
                text="Chez Kasa, le service est au cœur de notre métier. Nous nous assurons que chaque voyageur passe un moment d'exception, du début à la fin de leur séjour."
            />
            <CollapseMenu
                styleContainer="apropos-list"
                styleBar="collapse-handler"
                title="Sécurité"
                text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
              correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
              locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
              également des ateliers sur la sécurité domestique pour nos hôtes."
            />
        </div>
    )
}
export default Apropos