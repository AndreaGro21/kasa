import React from "react";
import { useParams } from 'react-router-dom';
import CollapseMenu from "../components/CollapseMenu";
import Slider from "../components/Slider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faStar } from '@fortawesome/free-solid-svg-icons'; 
import Error from "./Error";
function Card({ Data }) {
    const { logementId } = useParams();
    const selectedData = Data.find(item => item.id === logementId);
    const starsArray = new Array(1,2,3,4,5)
    if (selectedData) {
        const stars = starsArray.map(star => (
            <FontAwesomeIcon
                key={star}
                icon={faStar}
                className={star <= selectedData.rating ? 'fa-star active' : 'fa-star'}
            />
        ));
        return (
            <div className="card-container" key={logementId}>
                <div
                style={{ cursor: 'unset' }}
                className="card_details" >
                    <Slider
                        imagesList={selectedData.images}
                        data={Data}
                    />
                    <div className="profile-info">
                        <div className="profile-info_title">
                            <h2>{selectedData.title}</h2>
                            <p>{selectedData.location}</p>
                            
                            {selectedData.tags.map((tag, index) => (
                                <button key={index}>{tag}</button>
                            ))}
                        </div>
                        
                        <div className="flex-stars-profile">
                            <div className="host-picture_title">
                                <h3>{selectedData.host.name}</h3>
                                <img
                                    src={selectedData.host.picture}
                                    className="picture-profile"
                                    alt={`photo of: ${selectedData.host.name}`}
                                />
                            </div>
                            <div className="stars">{stars}</div>
                        </div>
                    </div>
                    <div className="locations-collapse">
                        <CollapseMenu
                            styleContainer="collapse-bar"
                            styleBar="title-bar"
                            title="Description"
                            text={selectedData.description}
                        />
                        <CollapseMenu
                            styleContainer="collapse-bar"
                            styleBar="title-bar"
                            title="Équipements"
                            text={
                                <ul>
                                    {selectedData.equipments.map((equipment, index) => (
                                        <li key={index}>{equipment}</li>
                                    ))}
                                </ul>
                            }
                        />
                    </div>
                </div>
            </div>
        );
    }
    else{
        return(Error())
    }


}
export default Card;
