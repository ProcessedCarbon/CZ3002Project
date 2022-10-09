import React, { useState} from 'react';
import Select from 'react-select'

// import Select from 'react-select' // might want to look into this for future ref
import './TaskForm.css';
import { v4 as uuidv4 } from 'uuid';
const options = [
    { value: 'High', label: 'High' },
    { value: 'Med', label: 'Med' },
    { value: 'Low', label: 'Low' }
  ]
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
                <Select options={options}/>
                {/* <select id='taskprioritnpmy-select'
                    onChange={handleTaskPriorityChange}>

                    <option value="High">High</option>

                    <option value="Med">Med</option>

                    <option value="Low">Low</option>

                </select> */}

                <button className='btn' type='submit'><h5>+</h5></button>
            </form>
        </div>
    )
}

export default TaskForm