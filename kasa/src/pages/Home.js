import React from "react"
import Banner from "../components/Banner"
import Main from "../components/Main"
import BannerimgAcc from "../assets/bannerhome.png"
import Card from "../components/Card"
function Home() {
    return (
        <div className="home">
            <Banner titleBanner={"Chez vous, partout et ailleurs"} background={BannerimgAcc} />
            <Main />
            <Card />
        </div>
    )
}
export default Home