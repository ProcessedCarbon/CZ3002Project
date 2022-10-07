import React from 'react'
import './BattleTask.css'
import plusicon from '../../../assets/icons/Plus.png'
function BattleTask ({todo, toggleComplete, removeTask}){
  function handleCheckBoxClick(){
    toggleComplete(todo.id);
  }

  function handleRemoveClick(){
    removeTask(todo.id);
  }

  return (
    <div className='task-container battletask-container'>
        <input type="checkbox" 
              onClick={handleCheckBoxClick} 
              defaultChecked={todo.completed ? true : false} 
              disabled={todo.completed ? true : false}
        />
        <h5
            style={{
                    textDecoration: todo.completed ? "line-through" : null
                  }} 
        >
        {todo.task}
        </h5>
        <button className='btn' onClick={handleRemoveClick}><img src={plusicon} alt="" /></button>
    </div>
  )
}

export default BattleTask