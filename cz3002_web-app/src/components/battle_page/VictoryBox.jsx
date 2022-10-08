import React from 'react'
import './VictoryBox.css'
function VictoryBox({ xp, money }) {
    return (
        <div className='victorybox-container'>
            <div className='box'>
                <h2>CONGRATULATIONS!!</h2>

                <div className='fields'>
                    <div>
                        <span className='outer-field'>EXP: </span> <span className='inner-field'>{xp}xp</span>
                    </div>
                    <div>
                        <span className='outer-field'> MONEY:</span><span className='inner-field'>${money} </span>
                    </div>
                </div>

                <h3>items</h3>
                <a className='btn' href="profile" >BACK</a>
            </div>
        </div>
    )
}

export default VictoryBox