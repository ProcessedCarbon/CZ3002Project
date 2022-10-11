import React from 'react'
import './EnemyAvatar.css'
import damageEffect from '../../assets/effects/hit_effect_1.png'

function EnemyAvatar({ type, damaged }) {
    var image = require(`../../assets/enemies/${type}.png`)

    return (
        <div className='enemyavatar-container'>
            <div id={type} className="enemy">
                <img className={(damaged) ? "damaged" : ""} src={image} alt="" />
            </div>
            <div className='vfx'>
                <img className={(damaged) ? "hit_effect damaged" : "hit_effect"} src={damageEffect} alt="" />
            </div>
        </div>
    )
}

export default EnemyAvatar