// Constants and Main Modules
import React from 'react';
import {
    ROBOHASH_API_URL,
    ROBOHASH_SIZE,
    ROBOHASH_SET
} from '../../constants.js';

// Style Sheets
import './card.styles.css';

export const Card = props => {
    return (
        <div className="card-container">
            <img 
                alt="monster" 
                src={
                    `${ROBOHASH_API_URL}/${props.monster.id}?set=${ROBOHASH_SET}&size=${ROBOHASH_SIZE}`
                }
            ></img>
            <h1>{props.monster.firstName}</h1>
            <p>{props.monster.email}</p>
        </div>
    );
};