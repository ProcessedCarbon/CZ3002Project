import React, { useState, useEffect } from 'react'
import './TaskBox.css'
import TaskForm from './TaskForm'
import TaskList from './TaskList'
// import LocalStorageKeys from '../../Misc/LocalStorage/LocalStorageKeys'
// import LocalStorageInterface from '../../Misc/LocalStorage/LocalStorageInterface'

const LOCAL_STORAGE_KEY = "TASKBOX"

const TaskBox = () => {
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


    function addTask(task) {
        setTasks([...tasks, task]);
    }

    function toggleComplete(id) {
        setTasks(
            tasks.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                }
                return todo;
            })
        );
    }

    function clearAllTask(){
        setTasks([])
    }

    function clearCompletedTask(){
        setTasks(tasks.filter(task => task.completed === false))
    }

    function removeTask(id) {
        setTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <div className='taskbox-container'>
            <div className='box'>
                <h2>Task List</h2>
                <div className="taskbox-btns">
                    <button className='btn clearall' onClick={clearAllTask}><h4>Clear All</h4></button>
                    <button className='btn clearcompleted' onClick={clearCompletedTask}><h4>Clear Completed</h4></button>
                </div>
                <TaskForm addTask={addTask} />
                <TaskList todos={tasks} toggleComplete={toggleComplete} removeTask={removeTask} />
            </div>
        </div>
    )
}

export default TaskBox