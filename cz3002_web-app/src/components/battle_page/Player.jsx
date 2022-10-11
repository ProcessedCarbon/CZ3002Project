import React, { useState } from 'react'
import './Player.css'
import Healthbar from './Healthbar'
import PlayerAvatar from '../PlayerAvatar';

function Player({ health, maxhealth, name }) {
    const [hp, setHP] = useState(health);

    function hpSetter(value) {
        setHP(value);
    }

    return (
        <div className='player-container'>
            <div className='character-avatar'>
                <h5>{name}</h5>
                <Healthbar currHealth={hp} health={maxhealth} hpSetter={hpSetter} />
                <PlayerAvatar/>
            </div>
        </div>
    )
}

export default Player