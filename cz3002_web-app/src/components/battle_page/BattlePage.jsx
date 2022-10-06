
import React, { useState, useEffect } from 'react'
import './BattlePage.css'

// REACT COMPONENTS //
import BattleTaskBox from './BattleTaskListComponents/BattleTaskBox'

// ENTITIES //
import Player from './Player'
import Enemy from './Enemy'

// ICONS OR IMAGES//
import messageicon from '../../assets/icons/Messages.png'

let enemyHP = 100;

const BattlePage = () => {
  /* HOOKS */
  const [isShown_tasklist, setIsShown_tasklist] = useState(false);
  const [taskComplete, setTaskStatus] = useState(false);

  const handleTaskList = event => {
    setIsShown_tasklist(current => !current);
  };

  /* SELECT BUTTON SCREENS TO SHOW */
  let screenToShow;
  if (isShown_tasklist) {
    screenToShow = <BattleTaskBox setTaskComplete={setTaskComplete}/>
  }

  function setTaskComplete(completed){
    setTaskStatus(completed)
  }

  useEffect(() => {
    if(taskComplete){
      // damage enemy
      //alert("damage enemy");
      enemyHP -= 10;
      // reset taskcomplete
      setTaskStatus(false);
    }
  }, [taskComplete])


  return (
    <div className='battlepage-container'>
      <div className='battlepage-screen'>
        <div className='btn_group'>
          <div className='tasks'>
            <button onClick={handleTaskList} className="btn tasks-btn"><img src={messageicon} alt="" /></button>
          </div>
        </div>
        {/* ENTITY COMPONENTS */}
        <div className='entity-space'>
          <Player health={100} name="Gregory123" />
          <Enemy health={enemyHP} name="Sentinel" />
        </div>
        {/* VARIOUS BUTTON SCREENS */}
        <div>
          {screenToShow}
        </div>
      </div>
    </div>
  )
}

export default BattlePage