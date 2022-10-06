import React, { useEffect, useState } from 'react'
import './Healthbar.css'

function Healthbar({ currHealth, hpSetter }) {
    const [style, setStyle] = useState({});
    
    function getHealthStatus(){
        if (currHealth <= 30) {
            // danger color
             return 'var(--red-statbar-bg)';
        }
        else if (currHealth > 30 && currHealth <= 50) {
            // warning color    
            return 'var(--yellow-statbar-bg)';
        }
        else if (currHealth > 50) {
            // Safe color
            return 'var(--green-statbar-bg)';
        }
    }

    function handleIncreaseHP(value){
        currHealth += value;
        hpSetter(currHealth);
    }

    function handleDownHP(value){
        currHealth -= value;
        hpSetter(currHealth);
    }

    // ========== Styles ============= //
    const newStyle = {
        opacity: 1,
        width: `${currHealth}%`,
        background: getHealthStatus()
    };

    useEffect(() => {
        setStyle(newStyle);
    }, [currHealth]);

    return (
        <div className="healthbar-container">
            {/* <button className='btn' onClick={() => handleIncreaseHP(10)}>+</button>
            <button className='btn' onClick={() => handleDownHP(10)}>-</button> */}
            <div className="healthbar-parent">
                <div className="health-bar" style={style}></div>
            </div>
        </div>
    )
}

export default Healthbar