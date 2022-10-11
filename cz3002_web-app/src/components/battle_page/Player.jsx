import React, {useState} from 'react'
import './Player.css'
import Healthbar from './Healthbar'
// import char_avatar from '../../assets/char_avatar.png'
import char_sprites from '../../assets/player_idle_sprite_sheet.png'
import sword_sprite from '../../assets/player_sword.png'
function Player({health, maxhealth,name}) {
    const [hp, setHP] = useState(health);

    function hpSetter(value){
        setHP(value);
    }

    return (
        <div className='player-container'>
            <div className='character-avatar'>
                <h5>{name}</h5>
                <Healthbar currHealth={hp} health={maxhealth} hpSetter={hpSetter}/>
                <div className='player'>
                <img  className="player_sword" src={sword_sprite} alt="" />
                    <div className='player-avatar'>
                        <img className="player_spritesheet" src={char_sprites} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player