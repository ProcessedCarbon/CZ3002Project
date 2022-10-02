import React, { useState, useEffect } from 'react'
import './TaskBox.css'
import TaskForm from './TaskForm'
import TaskList from './TaskList'

const LOCAL_STORAGE_KEY = "tasklist_taskbox"

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

    function removeTask(id) {
        setTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <div className='taskbox-container'>
            <div className='box'>
                <h2>Task List</h2>
                <button className='btn clearall' onClick={clearAllTask}><h4>Clear All</h4></button>
                <TaskForm addTask={addTask} />
                <TaskList todos={tasks} toggleComplete={toggleComplete} removeTask={removeTask} />
            </div>
        </div>
    )
}

export default TaskBox