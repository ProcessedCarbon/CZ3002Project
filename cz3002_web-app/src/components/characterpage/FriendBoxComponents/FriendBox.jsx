import React, { useState, useEffect } from 'react'
import './FriendBox.css'
import FriendList from './FriendList'
import FriendInterface from './FriendInterface'

const LOCAL_STORAGE_KEY = "FRIENDS"

const FriendBox = () => {
  const [friends, setList] = useState([]);
  /**
 * Store data on local storage
 */
  useEffect(() => {
    const storedFriends = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedFriends) {
      setList(storedFriends);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(friends))
  }, [friends]);


  function addFriend(friend) {
    setList([...friends, friend]);
  }

  function toggleClaimed(id) {
    setList(
      friends.map(friend => {
        if (friend.id === id) {
          return {
            ...friend,
            claimed: true
          };
        }
        return friend;
      })
    );
  }

  function clearGifts() {
    setList(friends.filter(friend => friend.claimed !== true))
  }

  return (
    <div className='giftbox-container'>
      <div className='box'>
        <h2>Friends</h2>
        {/* <button className='btn clearClaimedGifts' onClick={clearGifts}><h4>Clear Claimed</h4></button> */}
        <FriendInterface addFriend={addFriend} />
        <FriendList friends={friends} toggleClaimed={toggleClaimed} />
      </div>
    </div>
  )
}

export default React.memo(FriendBox)