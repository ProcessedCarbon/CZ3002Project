import React, {useState} from 'react'
import './Player.css'
import Healthbar from './Healthbar'
import char_avatar from '../../assets/char_avatar.png'

function Player({health, name}) {
    const [hp, setHP] = useState(health);

    function hpSetter(value){
        setHP(value);
    }

    return (
        <div className='player-container'>
            <div className='character-avatar'>
                <h5>{name}</h5>
                <Healthbar currHealth={hp} hpSetter={hpSetter}/>
                <img src={char_avatar} alt="" />
            </div>
        </div>
    )
}

export default Player