import React from 'react'
import './InventoryBox.css'
import { useState } from 'react';
import Item from './inventory_components/Item'
const InventoryBox = () => {
    const [itemList, setList] = useState([]);
    const tmpItemName = "Tmp_Item"

    const i_AddItem = (giftName) => (event) => {
        setList([...itemList, giftName]);
    }
    const i_DeleteItem = (index) => (event) => {
        const list = [...itemList];
        list.splice(index, 1);
        setList(list);
    }
    return (
        <div className='inventorybox-container'>
            <div className='box'>
                <h2>Inventory</h2>
                <button className='btn' onClick={(e) => i_AddItem(tmpItemName)(e)}>
                    <h4>test</h4>
                </button>
                <div className='item-layout'>
                    {
                        itemList.map((singleGift, index) => <Item key={index} name={singleGift} removeFromList={i_DeleteItem(index)} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default InventoryBox