import React from 'react'
import './Task.css'
import plusicon from '../../../assets/icons/Plus.png'
function Task ({todo, toggleComplete, removeTask}){
  // function handleCheckBoxClick(){
  //   toggleComplete(todo.id);
  // }

  function handleRemoveClick(){
    removeTask(todo.id);
  }

  function chooseColorBasedOnPriority(){
    if(todo.priority === "High"){
      // high color
      return "var(--color-reddish)"
    }
    else if(todo.priority === "Med"){
      // medium color
      return "var(--color-darkish-yellow)"
    }
    else {
      // low color
      return "var(--color-light-blue)"
    }
  }

  return (
    <div className='task-container'
         style={{backgroundColor:chooseColorBasedOnPriority()}}
    >
        <h5>
        {todo.task}
        </h5>
        <button className='btn' onClick={handleRemoveClick}><img src={plusicon} alt="" /></button>
    </div>
  )
}

export default Task