import React from 'react'
import './Friend.css'
import completeicon from '../../../assets/icons/Complete.png'
import minusicon from '../../../assets/icons/Minus.png'

function Friend({ gift, toggleClaimed }) {

  function handleOnClickGift() {
    // Collect gift logic
    toggleClaimed(gift.id);
  }

  return (
    <div className='gift-container'>
      <button 
        className={gift.claimed ? 'btn giftbtn no-hover' : 'btn giftbtn'}
        onClick={handleOnClickGift}
      >
        <img src={gift.claimed ? completeicon : minusicon} 
            alt="" 
            style={{backgroundColor: gift.claimed ? "gray" : "var(--color-dark-purple)"}}
          />
      </button>
      <h4>{gift.name}</h4>
    </div>
  )
}

export default React.memo(Friend)