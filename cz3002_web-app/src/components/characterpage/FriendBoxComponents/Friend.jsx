import React from 'react'
import './Friend.css'
import profilepic from '../../../assets/player_profile_pic.png'
function Friend({ friend, toggleClaimed }) {

  function handleOnClickGift() {
    // Collect gift logic
    toggleClaimed(friend.id);
  }

  return (
    <div className='friend-container'>
      <div className='profile-pic-border'>
        <img src={profilepic} alt="" />
      </div>
      <h4>{friend.name}</h4>
    </div>
  )
}

export default React.memo(Friend)