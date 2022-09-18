import React from 'react'
// import { useState} from 'react';
import './Gift.css'

const Gift = ({name, removeFromList}) => {
// const [clickGift, setGiftStatus] = useState(false);

const handleOnClickGift = event =>{
    // setGiftStatus(current => !current);
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