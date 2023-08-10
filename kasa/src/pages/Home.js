import React from "react"
import Banner from "../components/Banner"
import Main from "../components/Main"
import BannerimgAcc from "../assets/bannerhome.png"

function Home() {
    return (
        <div className="home">
            <Banner titleBanner={"Chez vous, partout et ailleurs"} background={BannerimgAcc} />
            <Main />
        </div>
    )
}
export default Home