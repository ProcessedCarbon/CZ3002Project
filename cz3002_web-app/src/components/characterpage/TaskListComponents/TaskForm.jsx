import React, { useState } from 'react';
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

    function handleTaskPriorityChange(selectedOption) {
        setTask({ ...todo, priority: selectedOption.value })
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

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            borderBottom: '1px solid var(--color-darkish-blue)',
            color: state.isSelected ? 'var(--color-reddish)' : 'var(--color-darkish-blue)',
            backgroundColor: state.isFocused  ? 'rgba(0,0,0,0.1)' : "",
            fontFamily: "var(--alt-font)",
        }),
        valueContainer: (provided, state) => ({
            ...provided,
            fontFamily: "var(--alt-font)"
        }),
        dropdownIndicator: (provided, state) => ({
            ...provided,
            color: "var(--color-btn-bg)",
            backgroundColor: state.isFocused  ? 'rgba(0,0,0,0.1)' : "",
        }),
        container: (provided, state) => ({
            ...provided,
            border: "1px solid var(--color-btn-bg)",
            borderRadius: "5px",
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';

            return { ...provided, opacity, transition };
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
                <Select className='taskprioritnpmy-select'
                    options={options}
                    onChange={handleTaskPriorityChange}
                    styles={customStyles}
                    placeholder={"Select your priority..."}
                />
                <button className='btn' type='submit'><h5>+</h5></button>
            </form>
        </div>
    )
}

export default TaskForm