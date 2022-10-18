import React from 'react'
import './ShopItem.css'
import wizard from '../../../assets/PlayerAvatars/char_avatar_2.png'
const ShopItem = (data) => {

    // ------- RENDER ------- //

    return (
        <div className='shop_item'>
            <div className='btn shopitem_container'>
                <h2>{data.title}</h2>
                {/* <div className='img'></div> */}
                <img src={wizard} alt="" />
                <div className='cost_bg'>
                    <div className='cost_text'>{data.cost}</div>
                </div>
            </div>
            
        </div>
    )
}

export default ShopItem
