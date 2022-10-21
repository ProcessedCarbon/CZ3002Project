import React from 'react'
import './InventoryList.css'
import Item from './Item'

function InventoryList({ items , toggleEquipped }) {

    return (
        <ul className='layout-scroll inventory-layout'>
            
                <Item   key={1}
                        item={1}
                        //toggleEquipped={1}
                ></Item>
                <Item   key={1}
                        item={1}
                        //toggleEquipped={1}
                ></Item>
                <Item   key={1}
                        item={1}
                        //toggleEquipped={1}
                ></Item>




            
        </ul>
    )
}

export default InventoryList