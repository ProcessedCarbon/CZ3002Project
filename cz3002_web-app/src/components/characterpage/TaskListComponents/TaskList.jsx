import React from 'react'
import Task from './Task'
import './TaskList.css'
function TaskList({todos, toggleComplete, removeTask}){
  return (
    <ul className='layout-scroll tasklist-container'>
        {
          todos.map(todo => (<Task 
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

export default TaskList