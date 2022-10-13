import React from 'react'
import Friend from './Friend'
import './FriendList.css'
function FriendList({ gifts, toggleClaimed }) {
  return (
    <ul className='layout-scroll gift-layout'>
      {
        gifts.map(gift => (<Friend
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

export default FriendList