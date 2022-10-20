import React, {useState, useEffect} from 'react'
import './ShopItem.css'
import wizard from '../../../assets/PlayerAvatars/char_avatar_2.png'

const PLAYER_LOCAL_KEY = "PLAYER_LOCAL_KEY";

const ShopItem = ({title, cost, is_Buy, buy_f}) => {
    
    const [bought, setBought] = useState(false);

    // Player Details



    function imgBasedOnCharacter() {

        if (title === "ranger 1") {
            return wizard;
        }
        else if (title === "ranger 2") {
            return wizard;
        }
        else if (title === "warrior 2") {
            return wizard;
        }
        else if (title === "wizard 1") {
            return wizard;
        }
        else if (title === "wizard 2") {
            return wizard;
        }
        else if (title === "dino 1") {
            return wizard;
        }
        else if (title === "dino 2") {
            return wizard;
        }
    }

    function handleClick(){
        let res = buy_f(title, cost, is_Buy);
        setBought(res);
    }

    // ------- RENDER ------- //

    return (
        <div className='shop_item'>
            <button onClick={() => handleClick()} className= {(is_Buy) ? 'btn shopitem_container bought' : 'btn shopitem_container'}>
                <h2>{title}</h2>
                <img src={imgBasedOnCharacter()} alt="" />
                <div className='cost_bg'>
                    <div className='cost_text'>{cost}</div>
                </div>
            </button>
            
        </div>
    )
}

export default ShopItem
