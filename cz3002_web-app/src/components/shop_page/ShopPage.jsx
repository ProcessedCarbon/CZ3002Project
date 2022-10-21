import React, {useState, useEffect} from 'react'
import './ShopPage.css'


// React Components
import ShopItem from '../shop_page/ShopPageComponents/ShopItem';

    const PLAYER_LOCAL_KEY = "PLAYER_LOCAL_KEY";

    // ------- Test Data ------- //
    
    const ShopItemList = [
        { title: 'ranger 1', cost: 2 , is_buy: false},
        { title: 'ranger 2', cost: 2 , is_buy: false},
        { title: 'warrior 2', cost: 1 , is_buy: false},
        { title: 'wizard 1', cost: 3 , is_buy: false},
        { title: 'wizard 2', cost: 3 , is_buy: false},
        { title: 'dino 1', cost: 4 , is_buy: false},
        { title: 'dino 2', cost: 4 , is_buy: false}
    ];

const ShopPage = () => {

    function buy (title, cost, is_Buy) {
        if(playerDetails.gold >= cost && playerDetails.char_bought.includes(title) === false) {
            console.log(playerDetails.gold,cost)
            updatePlayer(cost, title);
            is_Buy = true  
        }
        return is_Buy
    }

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

    function updatePlayer(cost, title) {
        let n_gold = updateValue(playerDetails.gold, cost);
        let n_char_bought = updateCharBought(playerDetails.char_bought, title);
        setPlayerState({
            ...playerDetails,
            gold: n_gold,
            char_bought: n_char_bought,
        })
    }

    function updateValue(value1, value2) {
        return value1 - value2;
    }

    function updateCharBought(char_bought, title) {
        char_bought.push(title) ;
        console.log(char_bought)
        // console.log(char_bought, title)
        return char_bought;
    }

    function charHasBeenBought(char_bought, title){
        if(char_bought.includes(title) === true){
            return true
        }
        return false
    }
    


    // ---------- RENDER ---------- //    

    return (
            <div className='shoppage_container'>
                <div className='background'>

                    <a href="profile" className='btn return-home-btn'>
                        <h5>Return Home</h5>
                    </a>

                    {/* Character Profile in top left corner */}
                    <div className='character_gold_profile'>
                        <h1> Gold: {'$' + playerDetails.gold} </h1>
                    </div>

                    <div className='items'>
                        <ShopItem
                            title={ShopItemList[0].title}
                            cost={ShopItemList[0].cost}
                            //is_Buy={ShopItemList[0].is_buy}
                            is_Buy={charHasBeenBought(playerDetails.char_bought, ShopItemList[0].title)}
                            buy_f={buy}

                        ></ShopItem>

                        <ShopItem
                            title={ShopItemList[1].title}
                            cost={ShopItemList[1].cost}
                            is_Buy={charHasBeenBought(playerDetails.char_bought, ShopItemList[1].title)}
                            buy_f={buy}
                        ></ShopItem>

                        <ShopItem
                            title={ShopItemList[2].title}
                            cost={ShopItemList[2].cost}
                            is_Buy={charHasBeenBought(playerDetails.char_bought, ShopItemList[2].title)}
                            buy_f={buy}
                        ></ShopItem>

                        <ShopItem
                            title={ShopItemList[3].title}
                            cost={ShopItemList[3].cost}
                            is_Buy={charHasBeenBought(playerDetails.char_bought, ShopItemList[3].title)}
                            buy_f={buy}
                        ></ShopItem>

                        <ShopItem
                            title={ShopItemList[4].title}
                            cost={ShopItemList[4].cost}
                            is_Buy={charHasBeenBought(playerDetails.char_bought, ShopItemList[4].title)}
                            buy_f={buy}
                        ></ShopItem>

                        <ShopItem
                            title={ShopItemList[5].title}
                            cost={ShopItemList[5].cost}
                            is_Buy={charHasBeenBought(playerDetails.char_bought, ShopItemList[5].title)}
                            buy_f={buy}
                        ></ShopItem>

                        <ShopItem
                            title={ShopItemList[6].title}
                            cost={ShopItemList[6].cost}
                            is_Buy={charHasBeenBought(playerDetails.char_bought, ShopItemList[6].title)}
                            buy_f={buy}
                        ></ShopItem>

                    </div>
                </div>
            </div>
    )
}

export default ShopPage