import React, {useEffect, useState} from 'react';
import axios from "axios";
import placeholderImage from "../placeholderImage.jsx";
import Placeholder404 from "../placeholderData.jsx";
import Loading from "../LoadingIcon.jsx";
import '../../index.css'

const Starships = () => {
    const [number, setNumber] = useState(1)
    const [starship, setStarship] = useState(null)
    const [starshipImage, setStarshipImage] = useState(null)

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${number}`)
            .then(response => setStarship(response.data))
            .catch(() => setStarship(0));
        axios.get(`https://starwars-visualguide.com/assets/img/starships/${number}.jpg`)
            .then(response => setStarshipImage(response.config.url))
            .catch(() => setStarshipImage(placeholderImage))
    }, [number]);

    const buttonClick = () => {
        setNumber(number + 1)
        setStarship(null)
    }

    if(starship){
        return (
            <div className="data-container">
                <img className="data-container-img" src={starshipImage} alt={starship.name} />
                <div>
                    <h2>{starship.name}</h2>
                    <p>Модель: <b>{starship.model}</b></p>
                    <p>Виробник: <b>{starship.manufacturer}</b></p>
                    <p>Вартість в кредитах: <b>{starship.cost_in_credits}</b></p>
                    <p>Довжина: <b>{starship.length}</b></p>
                    <p>Максимальна швидкість в атмосфері: <b>{starship.max_atmosphering_speed}</b></p>
                    <p>Екіпаж: <b>{starship.crew}</b></p>
                    <p>Пасажири: <b>{starship.passengers}</b></p>
                    <p>Грузопідйомність: <b>{starship.cargo_capacity}</b></p>
                    <p>Споживані ресурси: <b>{starship.consumables}</b></p>
                    <p>Клас гіперприводу: <b>{starship.hyperdrive_rating}</b></p>
                    <p>MGLT: <b>{starship.MGLT}</b></p>
                    <p>Клас зіркового корабля: <b>{starship.starship_class}</b></p>
                    <div className="Button" onClick={() => setNumber(number + 1)}>Наступна</div>
                </div>
            </div>
        )
    }
    else if(starship === 0) {
        return(
            <div className="main-container">
                <Placeholder404 id={number}/>
                <div style={{background: "black"}} className="Button" onClick={buttonClick}>Наступний</div>
            </div>
        )
    }
    else {
        return(
            <div className="main-container">
                <Loading/>
            </div>
        )
    }
};


export default Starships;

