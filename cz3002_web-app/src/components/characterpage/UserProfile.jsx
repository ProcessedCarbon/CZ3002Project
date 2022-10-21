import React, { useEffect, useState } from 'react'
import './UserProfile.css'
import Stats from './Stats'
import UserName from './UserName'

const PLAYER_LOCAL_KEY = "PLAYER_LOCAL_KEY";
const MAX_XP = 3000;

const UserProfile = () => {
    const [playerDetails, setPlayerState] = useState({
        name: "",
        xp: 0,
        // pwr: 0,
        gold: 0,
        // lvl: 0,
        // sp: 0
        char_bought: [],
        char_equipped: '',
    })
    useEffect(() => {
        const player_stats = JSON.parse(localStorage.getItem(PLAYER_LOCAL_KEY));
        if (player_stats && player_stats.name !== "") {
            setPlayerState(player_stats);
        }
        else{
            setPlayerState({...playerDetails,
                name: "Gregory123",
                xp: 0,
                // pwr: 0,
                gold: 0,
                // lvl: 0,
                // sp: 0
                char_bought: ["warrior 1"],
                char_equipped: 'warrior_1',
            })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(PLAYER_LOCAL_KEY, JSON.stringify(playerDetails))
    }, [playerDetails]);

    function computeLevel(xp){
        return (MAX_XP/xp)
    }

    return (
        <div className='userprofile-container'>
            <UserName username={playerDetails.name}></UserName>
            <div className='stats-grp'>
                <Stats statname='Xp:' value={playerDetails.xp}></Stats>
                {/* <Stats statname='Pwr:' value={playerDetails.pwr}></Stats> */}
                <Stats statname='Gold:' value={'$' + playerDetails.gold}></Stats>
                {/* <Stats statname='SP:' value={playerDetails.sp}></Stats> */}
            </div>
        </div>
    )
}

export default UserProfile