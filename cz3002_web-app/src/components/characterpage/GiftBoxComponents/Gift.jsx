import React from 'react'
import './Gift.css'

const Gift = ({name, removeFromList}) => {

const handleOnClickGift = event =>{
    // Collect gift logic
    removeFromList();
}

  return (
    <div className='gift-container'>
        <button id = 'gift' onClick={handleOnClickGift} className='btn gift'>
          <h4>{name}</h4>
        </button>
    </div>
  )
}

export default React.memo(Gift)