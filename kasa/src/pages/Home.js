import React from "react"
import Banner from "../components/Banner"
import Main from "../components/Main"

function Home() {
    return (
        <div className="home">
            <Banner bannerTitle={"Chez vous, partout et ailleurs"} />
            <Main />
        </div>
    )
}
export default Home