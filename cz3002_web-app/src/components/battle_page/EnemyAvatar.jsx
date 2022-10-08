import React from 'react'
import './EnemyAvatar.css'

function EnemyAvatar({ type, damaged }) {
    var image = require(`../../assets/enemies/${type}.png`)

    return (
        <div className='enemyavatar-container'>
            <img id={type} className={(damaged) ? "damaged" : ""} src={image} alt="" />
        </div>
    )
}

export default EnemyAvatar