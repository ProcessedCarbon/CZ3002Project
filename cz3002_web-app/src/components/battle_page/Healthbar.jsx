import React, { useEffect, useState } from 'react'
import './Healthbar.css'

function Healthbar({ currHealth, hpSetter, health }) {
    const [style, setStyle] = useState({});
    const [danger, setDanger] = useState(false);
    const [damaged, setDamaged] = useState(false);

    function getHealthStatus() {
        if (getPercent() <= 30) {
            // danger color
            setDanger(true);
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

    function handleIncreaseHP(value) {
        currHealth += value;
        hpSetter(currHealth);
    }

    function handleDownHP(value) {
        currHealth -= value;
        hpSetter(currHealth);
    }
    function getPercent() {
        return (currHealth / health) * 100;
    }

    function damageEffect() {
        // damage taken
        setDamaged(true);
        setTimeout(() => {
          setDamaged(false);
        }, 200);
    }

    useEffect(() => {
        // ========== Styles ============= //
        const newStyle = {
            opacity: 1,
            width: `${getPercent()}%`,
            background: getHealthStatus()
        };
        setStyle(newStyle);
        damageEffect();
    }, [currHealth]);

    return (
        <div className= {(damaged) ? "healthbar-container damaged" : "healthbar-container"}>
            {/* <button className='btn' onClick={() => handleIncreaseHP(10)}>+</button>
            <button className='btn' onClick={() => handleDownHP(10)}>-</button> */}
            <div className={danger ? "healthbar-parent danger" : "healthbar-parent"}>
                <div className= "health-bar" style={style}></div>
            </div>
        </div>
    )
}

export default Healthbar