import React from 'react'
import BattleTask from './BattleTask'
import './BattleTaskList.css'
function BattleTaskList({todos, toggleComplete, removeTask}){
  return (
    <ul className='tasklist-container battletasklist-container'>
        {
          todos.map(todo => (<BattleTask 
                              key={todo.id} 
                              todo={todo} 
                              toggleComplete={toggleComplete} 
                              removeTask={removeTask}
                              />
                            )
                    )
        }
    </ul>
  )
}

export default BattleTaskList