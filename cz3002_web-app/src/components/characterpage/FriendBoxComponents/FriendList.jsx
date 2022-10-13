import React from 'react'
import Friend from './Friend'
import './FriendList.css'
function FriendList({ friends, toggleClaimed }) {
  return (
    <ul className='layout-scroll gift-layout'>
      {
        friends.map(friend => (<Friend
          key={friend.id}
          friend={friend}
          toggleClaimed={toggleClaimed}
        />
        )
        )
      }
    </ul>
  )
}

export default FriendList