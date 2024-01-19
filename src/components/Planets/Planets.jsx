import React, {useEffect, useState} from 'react';
import axios from "axios";
import '../../index.css'
import placeholderImage from "../placeholderImage.jsx";
import Placeholder404 from "../placeholderData.jsx";
import Loading from "../LoadingIcon.jsx";

const Planets = () => {
    const [number, setNumber] = useState(1)
    const [planet, setPlanet] = useState(null)
    const [planetImage, setPlanetImage] = useState(null)

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${number}`)
            .then(response => setPlanet(response.data))
            .catch(() => setPlanet(0));
        axios.get(`https://starwars-visualguide.com/assets/img/planets/${number}.jpg`)
            .then(response => setPlanetImage(response.config.url))
            .catch(() => setPlanetImage(placeholderImage))
    }, [number]);

    const buttonClick = () => {
        setNumber(number + 1)
        setPlanet(null)
    }

    if(planet){
        return (

            <div className="data-container">
                <img className="data-container-img" src={planetImage} alt={planet.name} />
                <div>
                    <h2>{planet.name}</h2>
                    <p>Період обертання: <b>{planet.rotation_period}</b></p>
                    <p>Період обертання навколо сонця: <b>{planet.orbital_period}</b></p>
                    <p>Діаметр: <b>{planet.diameter}</b></p>
                    <p>Клімат: <b>{planet.climate}</b></p>
                    <p>Гравітація: <b>{planet.gravity}</b></p>
                    <p>Рельєф: <b>{planet.terrain}</b></p>
                    <p>Поверхнева вода: <b>{planet.surface_water}</b></p>
                    <p>Населення: <b>{planet.population}</b></p>
                    <div className="Button" onClick={() => setNumber(number + 1)}>Наступна</div>
                </div>
            </div>
        )
    }
    else if(planet === 0) {
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

export default Planets;
