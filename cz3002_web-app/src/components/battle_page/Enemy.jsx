import React, {useState, useEffect} from 'react'
import './Enemy.css'
import Healthbar from './Healthbar'
import sentinel from '../../assets/Sentinel.png'

let hp = 100;

function Enemy({ health, atk, reward, name }) {
  const [hp, setHP] = useState(health);

  function hpSetter(value){
      setHP(value);
  }

  useEffect(() => {
    hpSetter(health);
  }, [health])

  return (
    <div className='enemy-container'>
      <div className='enemy-avatar'>
        <h5>{name}</h5>
        <Healthbar currHealth={health} hpSetter={hpSetter}/>
        <img src={sentinel} alt="" />
      </div>
    </div>
  )
}

export default Enemy