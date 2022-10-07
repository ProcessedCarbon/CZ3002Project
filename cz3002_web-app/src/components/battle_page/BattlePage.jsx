
import React, { useState, useEffect } from 'react'
import './BattlePage.css'

// REACT COMPONENTS //
import BattleTaskBox from './BattleTaskListComponents/BattleTaskBox'

// ENTITIES //
import Player from './Player'
import Enemy from './Enemy'

let enemyHP = 100;
const LOCAL_STORAGE_KEY = "BATTLEPAGE"

const BattlePage = () => {
  /* HOOKS */
  const [taskComplete, setTaskStatus] = useState(false);
  const [enemyState, setEnemyState] = useState({
    name:"",
    hp:0,
    img:""
  });
  // useEffect(() => {
  //   const storageTask = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (storageTask) {
  //     setTasks(storageTask);
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
  // }, [tasks]);

  function selectEnemyToBattle() {
    // Do not spawn enemy if current enemy has not been defeated
    // picks enemy to spawn for player
    // Enemy is picked based on a random 
    // returns reward based on enemy spawned
  }


  function setTaskComplete(completed) {
    setTaskStatus(completed)
  }

  useEffect(() => {
    if (taskComplete) {
      // damage enemy
      //alert("damage enemy");
      if (enemyHP > 0) {
        enemyHP -= 10;
      }
      // reset taskcomplete
      setTaskStatus(false);


      if (enemyHP < 0) {
        // player win
        // Show victory box
        // Show reward
      }
    }
  }, [taskComplete])


  return (
    <div className='battlepage-container'>
      <div className='battlepage-screen'>
        {/* ENTITY COMPONENTS */}
        <div className='entity-space'>
          <Player health={100} name="Gregory123" />
          <Enemy health={enemyHP} name="Sentinel" />
        </div>
        {/* VARIOUS BUTTON SCREENS */}
        <div>
          <BattleTaskBox setTaskComplete={setTaskComplete} />
        </div>
      </div>
    </div>
  )
}

export default BattlePage