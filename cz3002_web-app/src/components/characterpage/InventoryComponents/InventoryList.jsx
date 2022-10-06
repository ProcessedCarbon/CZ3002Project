import React from 'react'
import './InventoryList.css'
import Item from './Item'

function InventoryList({ items , toggleEquipped }) {

    return (
        <ul className='layout-scroll inventory-layout'>
            {
                items.map(item => <Item key={item.id} 
                                        item={item}
                                        toggleEquipped={toggleEquipped}
                                    />)
            }
        </ul>
    )
}

export default InventoryList