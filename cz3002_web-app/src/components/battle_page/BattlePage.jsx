
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
    type: "tree_man",
    name: "Tree Man",
    health: 120,
    xp: 150,
    gold: 200,
  },
  {
    type: "lesser_devil",
    name: "Lesser Devil",
    health: 50,
    xp: 30,
    gold: 50
  },
  {
    type: "dark_mage",
    name: "Dark Mage",
    health: 100,
    xp: 80,
    gold: 100
  },
  {
    type: "green_slime",
    name: "Green Slime",
    health: 80,
    xp: 50,
    gold: 80
  },
  {
    type: "terror_monster",
    name: "Terror",
    health: 150,
    xp: 250,
    gold: 250
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
    type: "dark_mage",
    xp: 0,
    gold: 0
  });


  useEffect(() => {
    const storeEnemy = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storeEnemy) {
      if (storeEnemy.name == "") {
        createEnemy();
      }
      else {
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
      xp: enemies[enemyIndex].xp,
      gold: enemies[enemyIndex].gold
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

  function getDamageToDeal(value) {
    damageToDeal = value;
  }

  if (enemyState.currhp <= 0) {
    setBattleComplete(true);
    createEnemy();
  }
  function ClearLocalStorage() {
    localStorage.clear();
  }

  return (
    <div className='battlepage-container'>
      <div className='battlepage-screen'>
        <a href="profile" className='btn return-home-btn'>
          <h5>Return Home</h5>
        </a>
        <button className='btn' onClick={ClearLocalStorage}>Clear Storage</button>
        {/* ENTITY COMPONENTS */}
        {!battlecomplete &&
          <div className='entity-space'>
            <Player className="char" health={100} maxhealth={100} name="Gregory123" />
            <Enemy
              currHealth={enemyState.currhp}
              health={enemyState.hp}
              name={enemyState.name}
              type={enemyState.type}
            />
          </div>}
        {/* VARIOUS BUTTON SCREENS */}
        <div>
          <BattleTaskBox setTaskComplete={setTaskComplete} damageToDeal={getDamageToDeal} />
          {battlecomplete && <VictoryBox xp={enemyState.xp} gold={enemyState.gold} />}
        </div>
      </div>
    </div>
  )
}

export default BattlePage