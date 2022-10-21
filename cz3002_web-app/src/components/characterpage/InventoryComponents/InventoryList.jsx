import React, { useState, useEffect } from 'react'
import './InventoryList.css'
import Item from './Item'

const PLAYER_LOCAL_KEY = "PLAYER_LOCAL_KEY";



function InventoryList({ items , toggleEquipped }) {

    const charTitleList = [
        { title: 'ranger 1'},
        { title: 'ranger 2'},
        { title: 'warrior 2'},
        { title: 'wizard 1'},
        { title: 'wizard 2'},
        { title: 'dino 1'},
        { title: 'dino 2'}
    ];

    // Player Details
    const [playerDetails, setPlayerState] = useState({
        name: "",
        xp: 0,
        gold: 0,
        char_bought: [],
    })
    
    useEffect(() => {
        const player_stats = JSON.parse(localStorage.getItem(PLAYER_LOCAL_KEY));
        if (player_stats && player_stats.name !== "") {
            setPlayerState(player_stats);
        }
    }, [])
    
    useEffect(() => {
        localStorage.setItem(PLAYER_LOCAL_KEY, JSON.stringify(playerDetails))
    }, [playerDetails]);

    function charHasBeenBought(char_bought, title){
        if(char_bought.includes(title) === true){
            return true
        }
        return false
    }

    return (
        <ul className='layout-scroll inventory-layout'>
            
                <Item   
                title={charTitleList[0].title}
                is_Buy={charHasBeenBought(playerDetails.char_bought, charTitleList[0].title)}
                ></Item>

                <Item 
                title={charTitleList[1].title}
                is_Buy={charHasBeenBought(playerDetails.char_bought, charTitleList[1].title)}
                ></Item>

                <Item   
                title={charTitleList[2].title}
                is_Buy={charHasBeenBought(playerDetails.char_bought, charTitleList[2].title)}
                ></Item>

                 <Item   
                title={charTitleList[3].title}
                is_Buy={charHasBeenBought(playerDetails.char_bought, charTitleList[3].title)}
                ></Item>

                <Item   
                title={charTitleList[4].title}
                is_Buy={charHasBeenBought(playerDetails.char_bought, charTitleList[4].title)}
                ></Item>

                <Item   
                title={charTitleList[5].title}
                is_Buy={charHasBeenBought(playerDetails.char_bought, charTitleList[5].title)}
                ></Item>

                <Item   
                title={charTitleList[6].title}
                is_Buy={charHasBeenBought(playerDetails.char_bought, charTitleList[6].title)}
                ></Item>
            
        </ul>
    )
}

export default InventoryList