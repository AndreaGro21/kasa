import React from "react";
import Data from "./Data";
import { useParams } from 'react-router-dom';
import CollapseMenu from "./CollapseMenu";
import Slider from "./Slider";
function Card() {
    const fetchedData = Data();
    const { logementId } = useParams()
    const selectedData = fetchedData.find(item => item.id === logementId);
    if (selectedData) {
        return (
            <div className="card-container" key={fetchedData.id}>
                {console.log(selectedData)}
                <div to={`/logements/${selectedData}`} className="card_details" >
                    <Slider imagesList={logementId} />
                    <div className="profile-info">
                        <div className="profile-info_title">
                            <h2>{selectedData.title}</h2>
                            <p>{selectedData.location}</p>
                            {selectedData.tags.map((tag, index) => (
                                <button key={index}>
                                    {tag}
                                </button>
                            ))}
                        </div>
                        <div className="profile-container">
                            <h5>{selectedData.host.name}</h5>
                            <img
                                src={selectedData.host.picture}
                                className="picture-profile"
                                alt={`photo of:${selectedData.host.name} `}
                            />
                        </div>
                    </div>
                    <div className="locations-collapse">
                        <CollapseMenu
                            styleContainer="collapse-bar"
                            styleBar="text-bar"
                            title="Description"
                            text={selectedData.description} />
                        <CollapseMenu
                            styleContainer="collapse-bar"
                            styleBar="text-bar"
                            title="Équipements"
                            text={
                                <ul>
                                    {selectedData.equipments.map((equipment) => (
                                        <li key={equipment}>
                                            {equipment}
                                        </li>
                                    ))}
                                </ul>
                            }
                        />
                    </div>
                </div>


            </div>
        )
    }
}
export default Card