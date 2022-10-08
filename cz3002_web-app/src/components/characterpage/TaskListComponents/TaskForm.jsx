import React, { useState } from 'react';
import './TaskForm.css';
import { v4 as uuidv4 } from 'uuid';

function TaskForm({ addTask }) {
    const [todo, setTask] = useState({
        id: "",
        task: "",
        completed: false,
        priority: "High"
    });

    function handleTaskInputChange(e) {
        // e.target.value contains new input from onChange
        // event for input elements
        setTask({ ...todo, task: e.target.value });
    }

    function handleTaskPriorityChange() {
        var select = document.getElementById('taskpriority-select')
        setTask({ ...todo, priority: select.value });
    }
    function handleSubmit(e) {
        e.preventDefault(); // prevents browser refresh
        // trim() gets rid of string whitespace
        if (todo.task.trim()) {
            addTask({ ...todo, id: uuidv4() });
            //reset task input
            setTask({ ...todo, task: "" });
        }
    }

    return (
        <div className='taskform-container'>
            <form action="" onSubmit={handleSubmit} className="taskform-format">
                <input
                    name="task"
                    type="text"
                    onChange={handleTaskInputChange}
                    value={todo.task}
                />
                <select id='taskpriority-select'
                    className="taskpriority-select-name"
                    onChange={handleTaskPriorityChange}
                >
                    <option value="High"><h5>High</h5></option>
                    <option value="Med"><h5>Med</h5></option>
                    <option value="Low"><h5>Low</h5></option>
                </select>
                <button className='btn' type='submit'><h5>+</h5></button>
            </form>
        </div>
    )
}

export default TaskForm