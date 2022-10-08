import React, { useState, useEffect } from 'react'
import './BattleTaskBox.css'
import BattleTaskList from './BattleTaskList'

const LOCAL_STORAGE_KEY = "TASKBOX" // Needs to be the same as taskbox to retrive the same list of task
const h_DMG = 20;
const m_DMG = 15;
const l_DMG = 10;

const BattleTaskBox = ({ setTaskComplete, damageToDeal }) => {
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
                    
                    let dmg = computeDamageToDeal(todo.priority);
                    damageToDeal(dmg);

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

    function removeTask(id) {
        setTasks(tasks.filter(task => task.id !== id))
    }

    function computeDamageToDeal(priority){
        if(priority === "High"){
            return h_DMG;
        }
        else if(priority === "Med"){
            return m_DMG;
        }
        else{
            return l_DMG;
        }
    }

    return (
        <div className='taskbox-container battletaskbox-container'>
            <div className='box'>
                <BattleTaskList className="battle-tasklist" 
                                todos={tasks} 
                                toggleComplete={toggleComplete} 
                                removeTask={removeTask} />
            </div>
        </div>
    )
}

export default BattleTaskBox