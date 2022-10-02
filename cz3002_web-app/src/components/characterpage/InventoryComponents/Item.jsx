import React from 'react'

const Item = ({name, removeFromList}) => {
    const handleOnClickItem = event => {
        // Collect gift logic
        removeFromList();
    }

    return (
        <div className='item-container'>
            <button id='item' onClick={handleOnClickItem} className='btn item'>
                <h4>{name}</h4>
            </button>
        </div>
    )
}

export default Item