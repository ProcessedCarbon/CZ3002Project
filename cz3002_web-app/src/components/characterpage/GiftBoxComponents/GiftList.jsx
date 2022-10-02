import React from 'react'
import Gift from './Gift'
import './GiftList.css'
function GiftList({ gifts, toggleClaimed }) {
  return (
    <ul className='layout-scroll gift-layout'>
      {
        gifts.map(gift => (<Gift
          key={gift.id}
          gift={gift}
          toggleClaimed={toggleClaimed}
        />
        )
        )
      }
    </ul>
  )
}

export default GiftList