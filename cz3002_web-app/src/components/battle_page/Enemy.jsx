import React, { useState, useEffect } from 'react'
import './Enemy.css'
import Healthbar from './Healthbar'
import sentinel from '../../assets/Sentinel.png'

function Enemy({ health, atk, reward, name }) {
  //const [hp, setHP] = useState(health);
  const [damaged, setDamaged] = useState(false);

  function hpSetter(value) {
    // damage taken
    setDamaged(true);
    setTimeout(() => {
      setDamaged(false);
    }, 200);

    health = value;
  }

  useEffect(() => {
    hpSetter(health);
  }, [health])

  return (
    <div className='enemy-container'>
      <div className='enemy-avatar'>
        <h5>{name}</h5>
        <Healthbar currHealth={health} hpSetter={hpSetter} />
        <img className={(damaged) ? "damaged" : ""} src={sentinel} alt="" />
      </div>
    </div>
  )
}

export default Enemy