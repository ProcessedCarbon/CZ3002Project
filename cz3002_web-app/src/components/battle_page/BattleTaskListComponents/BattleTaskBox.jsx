import React, { useState, useEffect } from 'react'
import './BattleTaskBox.css'
import TaskList from '../../characterpage/TaskListComponents/TaskList'

const LOCAL_STORAGE_KEY = "TASKBOX" // Needs to be the same as taskbox to retrive the same task

const BattleTaskBox = ({ setTaskComplete }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const storageTask = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storageTask) {
            setTasks(storageTask);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
    }, [tasks]);

    function toggleComplete(id) {
        setTasks(
            tasks.map(todo => {
                if (todo.id === id) {
                    setTaskComplete(true);
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }
                return todo;
            })
        );
    }

    // function clearAllTask(){
    //     setTasks([])
    // }

    function removeTask(id) {
        setTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <div className='taskbox-container'>
            <div className='box'>
                <h2>Task List</h2>
                {/* <button className='btn clearall' onClick={clearAllTask}><h4>Clear All</h4></button> */}
                <TaskList todos={tasks} toggleComplete={toggleComplete} removeTask={removeTask} />
            </div>
        </div>
    )
}

export default BattleTaskBox