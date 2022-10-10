import React, { useEffect, useState, useRef } from 'react'
import './VictoryBox.css'
import useIntersecion from '../Misc/useIntersecion'

const PLAYER_LOCAL_KEY = "PLAYER_LOCAL_KEY"
function VictoryBox({ xp, gold }) {
    const ref = useRef();
    const inViewport = useIntersecion(ref, "0px");

    const [playerStored, updatePlayerStored] = useState({
        name: "",
        xp: 0,
        // pwr: 0,
        gold: 0,
        // lvl: 0,
        // sp: 0
    })
    useEffect(() => {
        const player_storage = JSON.parse(localStorage.getItem(PLAYER_LOCAL_KEY));
        if (player_storage) {
            updatePlayerStored(player_storage);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(PLAYER_LOCAL_KEY, JSON.stringify(playerStored))
    }, [playerStored]);

    function updatePlayer() {
        let n_xp = updateValue(playerStored.xp, xp);
        let n_gold = updateValue(playerStored.gold, gold);
        updatePlayerStored({
            ...playerStored,
            xp: n_xp,
            gold: n_gold,
        })
    }

    function updateValue(value1, value2) {
        return value1 + value2;
    }

    useEffect(() => {
        if (inViewport) {
            updatePlayer();
        }
    }, [inViewport])

    return (
        <div className='victorybox-container' ref={ref}>
            <div className='box'>
                <h2>CONGRATULATIONS!!</h2>

                <div className='fields'>
                    <div>
                        <span className='outer-field'>EXP: </span> <span className='inner-field'>{xp}xp</span>
                    </div>
                    <div>
                        <span className='outer-field'> GOLD:</span><span className='inner-field'>${gold} </span>
                    </div>
                </div>

                {/* <h3>items</h3> */}
                <a className='btn' href="profile" >BACK</a>
            </div>
        </div>
    )
}

export default VictoryBox