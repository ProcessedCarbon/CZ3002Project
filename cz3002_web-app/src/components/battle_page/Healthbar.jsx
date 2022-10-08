import React, { useEffect, useState } from 'react'
import './Healthbar.css'

function Healthbar({ currHealth, hpSetter, health }) {
    const [style, setStyle] = useState({});
    function getHealthStatus(){
        if (getPercent() <= 30) {
            // danger color
             return 'var(--red-statbar-bg)';
        }
        else if (getPercent() > 30 && getPercent() <= 50) {
            // warning color    
            return 'var(--yellow-statbar-bg)';
        }
        else if (getPercent() > 50) {
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
    function getPercent(){
        return (currHealth/health) * 100;
    }
    // ========== Styles ============= //
    const newStyle = {
        opacity: 1,
        width: `${getPercent()}%`,
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