import React from "react";
import Data from "./Data";

function Card() {
    const fetchedData = Data();
    console.log(fetchedData)
    return (
        <div className="card-container">
            {fetchedData.map((arrayData) => (
                <div key={`${arrayData.id}`} className="card_details" >
                    <img key={`${arrayData}`} src={arrayData.cover} alt={`${arrayData.title}`} className="banner-card" />
                    <h2 key={`${arrayData.title}`}>{arrayData.title}</h2>
                    <p> {arrayData.location}</p>
                    <div>{arrayData.tags.map((tags) => (
                        <button key={`${tags}`}>{tags}</button>
                    ))}
                    </div>
                    <button
                        className="collapse-handler"
                        /* onClick={} */>
                        Équipments
                        <i className={'fa-solid fa-chevron-up'}></i>
                    </button>
                    <div>
                        <ul key={arrayData.equipments}>
                            {arrayData.equipments.map((listEquip) => (
                                <li key={listEquip}>{listEquip}</li>
                            ))}
                        </ul>
                    </div>
                    <button
                        className="collapse-handler"
                    /* onClick={} */>
                        Description
                        <i className={'fa-solid fa-chevron-up'}></i>
                    </button>
                    <p>{arrayData.description}</p>
                    {/* <div>{arrayData.find(hostProfile => {
                        return(<div>
                            <div> {hostProfile.name}</div>
                            <div> {hostProfile.picture}</div>
                        </div>
                    )})}
                    </div> */}



                </div>

            )
            )
            }
        </div>
    )
}
export default Card