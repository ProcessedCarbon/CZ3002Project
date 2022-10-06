import React from 'react'
import './Item.css'
import personicon from '../../../assets/icons/Protection.png'
const Item = ({ item, toggleEquipped }) => {
    const handleOnClickItem = event => {
        // Collect gift logic
        toggleEquipped(item.id);
    }

    return (
        <div className="item-container">
            <h4>{item.name}</h4>
            <div className={item.equipped ? 'item-body equipped' : 'item-body'}>
                <img src={personicon} alt="" />
            </div>
            <button
                onClick={handleOnClickItem}
                className={item.equipped ? 'btn equipbtn no-hover' : 'btn equipbtn'}
            >
                <h4
                    style={{ color: item.equipped ? "gray" : "var(--color-white)" }}
                >
                    {item.equipped ? "Equipped" : "Equip"}
                </h4>
            </button>
        </div>
    )
}

export default Item