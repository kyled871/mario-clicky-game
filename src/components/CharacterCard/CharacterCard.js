import React from 'react';
import './CharacterCard.css';

function CharacterCard(props) {
    return(

        <div className="col-3 mb-3">
            <img 
                className="img-box"
                src={props.image} 
                alt={props.name} 
                onClick={() => props.clickChar(props)}>
            </img>
        </div>
        
    )
}

export default CharacterCard;