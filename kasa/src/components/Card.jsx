import React from "react";
import { useParams, Link } from 'react-router-dom';
import CollapseMenu from "./CollapseMenu";
import Slider from "./Slider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faStar } from '@fortawesome/free-solid-svg-icons'; 
import Error from "../pages/Error";
function Card({ Data }) {
    const { logementId } = useParams();
    const selectedData = Data.find(item => item.id === logementId);
    const starsArray = new Array(1,2,3,4,5)
    const stars = starsArray.map((star) =>(<i key={star}className="fa-solid fa-star"></i> ))
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
                <Link to={`/logements/${logementId}`} className="card_details" >
                    <Slider
                        imagesList={selectedData.images}
                        Data={Data}
                    />
                    <div className="profile-info">
                        <div className="profile-info_title">
                            <h2>{selectedData.title}</h2>
                            <p>{selectedData.location}</p>
                            
                            {selectedData.tags.map((tag, index) => (
                                <button key={index}>{tag}</button>
                            ))}
                            
                        </div>
                        
                        <div className="profile-container">
                            <h5>{selectedData.host.name}</h5>
                            <img
                                src={selectedData.host.picture}
                                className="picture-profile"
                                alt={`photo of: ${selectedData.host.name}`}
                            />
                            <div className="stars">{stars}</div>
                        </div>
                    </div>
                    <div className="locations-collapse">
                        <CollapseMenu
                            styleContainer="collapse-bar"
                            styleBar="text-bar"
                            title="Description"
                            text={selectedData.description}
                        />
                        <CollapseMenu
                            styleContainer="collapse-bar"
                            styleBar="text-bar"
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
                </Link>
            </div>
        );
    }
else{return(Error())}


}
export default Card;
