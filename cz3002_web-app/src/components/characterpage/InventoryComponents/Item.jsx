import React from 'react'
import './Item.css'
import personicon from '../../../assets/icons/Protection.png'

import ranger_1 from '../../../assets/PlayerAvatars/ranger_1.png'
import ranger_1_notBought from '../../../assets/PlayerAvatars/ranger_1_notBought.png'
import ranger_2 from '../../../assets/PlayerAvatars/ranger_2.png'
import warrior_2 from '../../../assets/PlayerAvatars/warrior_2.png'
import mage_1 from '../../../assets/PlayerAvatars/mage_1.png'
import mage_2 from '../../../assets/PlayerAvatars/mage_2.png'
import dino_1 from '../../../assets/PlayerAvatars/dino_1.png'
import dino_2 from '../../../assets/PlayerAvatars/dino_2.png'

const Item = ({title, item, is_equipped, is_Buy }) => {

    // console.log(title)
    // const handleOnClickItem = event => {
    //     // Collect gift logic
    //     toggleEquipped(item.id);
    // }

    function imgBasedOnCharacter() {

        if (title === "ranger 1") {
            return ranger_1;
        }
        else if (title === "ranger 2") {
            return ranger_2;
        }
        else if (title === "warrior 2") {
            return warrior_2;
        }
        else if (title === "wizard 1") {
            return mage_1;
        }
        else if (title === "wizard 2") {
            return mage_2;
        }
        else if (title === "dino 1") {
            return dino_1;
        }
        else if (title === "dino 2") {
            return dino_2;
        }
        return ranger_1;
    }

    function handleClick(){
        
    }


    return (
        <div className="item-container">
            <h4></h4>
            <button onClick={() => handleClick()} className= {(is_equipped) ? 'btn item-body equip' : 'btn item-body'}>
                <div >
                    <img src={(is_Buy) ? imgBasedOnCharacter() : imgBasedOnCharacter()} alt="" style={{filter: (is_Buy) ? "" : "grayscale(100%)"}}/>
                </div>
            </button>
        </div>
    )
}

export default Item