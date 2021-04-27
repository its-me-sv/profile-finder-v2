// Constants and Main Modules
import React from 'react';

// Style Sheets
import './card-list.styles.css';

// Components
import {Card} from '../card/card.component';

export const CardList = ({monsters}) => {
    return (
        <div className="card-list">
            {monsters.map(monster => 
                <Card key={monster.id} monster={monster} />)}
        </div>
    );
};