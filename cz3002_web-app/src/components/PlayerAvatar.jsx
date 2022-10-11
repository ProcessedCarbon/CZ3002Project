import React from 'react'
import char_sprites from '../assets/player_idle_sprite_sheet.png'
import sword_sprite from '../assets/player_sword.png'
import './PlayerAvatar.css'
const PlayerAvatar = () => {
    return (
        <div className='player'>
            <img className="player_sword" src={sword_sprite} alt="" />
            <div className='player-avatar'>
                <img className="player_spritesheet" src={char_sprites} alt="" />
            </div>
        </div>
    )
}

export default PlayerAvatar