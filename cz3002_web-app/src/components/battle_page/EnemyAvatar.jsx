import React from 'react'
import './EnemyAvatar.css'

function EnemyAvatar({ type, damaged }) {
    var image = require(`../../assets/enemies/${type}.png`)

    return (
        <div className='enemyavatar-container'>
            <div id={type} className="enemy">
                <img className={(damaged) ? "damaged" : ""} src={image} alt="" />
            </div>
        </div>
    )
}

export default EnemyAvatar