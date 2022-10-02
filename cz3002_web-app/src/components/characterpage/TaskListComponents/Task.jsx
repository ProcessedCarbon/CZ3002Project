import React from 'react'
import './Task.css'
import plusicon from '../../../assets/icons/Plus.png'
function Task ({todo, toggleComplete, removeTask}){
  function handleCheckBoxClick(){
    toggleComplete(todo.id);
  }

  function handleRemoveClick(){
    removeTask(todo.id);
  }

  return (
    <div className='task-container'>
        <input type="checkbox" onClick={handleCheckBoxClick} />
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

export default Task