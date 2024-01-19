import React, {useEffect, useState} from 'react';
import axios from "axios";
import '../../index.css'
import placeholderImage from "../placeholderImage.jsx";
import Placeholder404 from "../placeholderData.jsx";
import Loading from "../LoadingIcon.jsx";

const Characters = () => {
    const [number, setNumber] = useState(1)
    const [character, setCharacter] = useState(null)
    const [characterImage, setCharacterImage] = useState(null)

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${number}`)
            .then(response => setCharacter(response.data))
            .catch(() => setCharacter(0))
        axios.get(`https://starwars-visualguide.com/assets/img/characters/${number}.jpg`)
            .then(response => setCharacterImage(response.config.url))
            .catch(() => setCharacterImage(placeholderImage))
    }, [number]);

    const buttonClick = () => {
        setNumber(number + 1)
        setCharacter(null)
    }

    if(character){
        return (
            <div className="main-container">
                <div className="data-container">
                    <img className="data-container-img" src={characterImage} alt={character.name} />
                    <div className="data-container-textside">
                        <h2>{character.name}</h2>
                        <p>Зріст: <b>{character.height}</b></p>
                        <p>Вага: <b>{character.mass}</b></p>
                        <p>Колір волосся: <b>{character.hair_color}</b></p>
                        <p>Колір шкіри: <b>{character.skin_color}</b></p>
                        <p>Колір очей: <b>{character.eye_color}</b></p>
                        <p>Рік народження: <b>{character.birth_year}</b></p>
                        <p>Стать: <b>{character.gender}</b></p>
                        <div className="Button" onClick={buttonClick}>Наступний</div>
                    </div>
                </div>
            </div>
        )
    }
    else if(character === 0) {
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

export default Characters;
