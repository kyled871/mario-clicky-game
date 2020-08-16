import React from 'react';
import './CharacterCard.css';

function CharacterCard(props) {
    return(

        <div className="col-3">
            <img src={props.image} alt={props.name}></img>
        </div>
        
    )
}

export default CharacterCard;