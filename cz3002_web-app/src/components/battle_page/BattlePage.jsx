
import React, { useState, useEffect } from 'react'
import './BattlePage.css'

// REACT COMPONENTS //
import BattleTaskBox from './BattleTaskListComponents/BattleTaskBox'
import VictoryBox from './VictoryBox'

// ENTITIES //
import Player from './Player'
import Enemy from './Enemy'

const LOCAL_STORAGE_KEY = "BATTLEPAGE"

const enemies = [
  {
    type: "Sentinel",
    name: "Sentinel",
    health: 120,
    xp: 150,
    money: 200
  },
  {
    type: "observer",
    name: "Observer",
    health: 50,
    xp: 30,
    money: 50
  },
  {
    type: "Metal-Slug",
    name: "Metal Slug",
    health: 100,
    xp: 80,
    money: 100
  },
  {
    type: "steel-eagle",
    name: "Steel Eagle",
    health: 80,
    xp: 50,
    money: 80
  },
  {
    type: "Drone",
    name: "Drone",
    health: 150,
    xp: 250,
    money: 250
  }
]
let damageToDeal = 0;

const BattlePage = () => {
  /* HOOKS */
  const [battlecomplete, setBattleComplete] = useState(false);
  const [taskComplete, setTaskStatus] = useState(false);
  const [enemyState, setEnemyState] = useState({
    name: "",
    currhp: 120,
    hp: 120,
    type: "Sentinel",
    xp: 0,
    money: 0
  });

  useEffect(() => {
    const storeEnemy = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storeEnemy) {
      if(storeEnemy.name == ""){
        createEnemy();
      }
      else{
        setEnemyState(storeEnemy);
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(enemyState))
  }, [enemyState]);


  function createEnemy() {
    let enemyIndex = getRandomValue(0, (enemies.length))
    setEnemyState({
      name: enemies[enemyIndex].name,
      currhp: enemies[enemyIndex].health,
      hp: enemies[enemyIndex].health,
      type: enemies[enemyIndex].type,
      xp:enemies[enemyIndex].xp,
      money:enemies[enemyIndex].money
    });
  }

  function getRandomValue(from, to) {
    return Math.floor(Math.random() * to) + from;
  }

  function setTaskComplete(completed) {
    setTaskStatus(completed)
  }

  useEffect(() => {
    if (taskComplete) {
      // damage enemy
      if (enemyState.currhp > 0) {
        let hp = enemyState.currhp;
        hp = hp - damageToDeal;
        setEnemyState({ ...enemyState, currhp: hp });
      }
      // reset taskcomplete
      setTaskStatus(false);
    }
  }, [taskComplete])

  function getDamageToDeal(value){
    damageToDeal = value;
  }

  if (enemyState.currhp <= 0) {
    // player win
    // Show victory box
    // Show reward
    setBattleComplete(true);
    createEnemy();
  }

  return (
    <div className='battlepage-container'>
      <div className='battlepage-screen'>
        <a href="profile" className='btn return-home-btn'>
          <h5>Return Home</h5>
        </a>
        {/* <button className='btn' onClick={ClearLocalStorage}>Clear Storage</button> */}
        {/* ENTITY COMPONENTS */}
        {!battlecomplete &&
        <div className='entity-space'>
          <Player health={100} maxhealth={100} name="Gregory123" />
          <Enemy
            currHealth={enemyState.currhp}
            health={enemyState.hp}
            name={enemyState.name}
            type={enemyState.type}
          />
        </div>}
        {/* VARIOUS BUTTON SCREENS */}
        <div>
          <BattleTaskBox setTaskComplete={setTaskComplete} damageToDeal={getDamageToDeal}/>
          {battlecomplete && <VictoryBox xp={enemyState.xp} money={enemyState.money} />}
        </div>
      </div>
    </div>
  )
}

export default BattlePage