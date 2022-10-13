import React, { useState, useEffect } from 'react'
import './FriendBox.css'
import FriendList from './FriendList'
import FriendInterface from './FriendInterface'

const LOCAL_STORAGE_KEY = "GIFTBOX"

const FriendBox = () => {
  const [gifts, setList] = useState([]);
  /**
 * Store data on local storage
 */
  useEffect(() => {
    const storageGifts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageGifts) {
      setList(storageGifts);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(gifts))
  }, [gifts]);

  /**
   * Method to adda gift 
   * @param {*} gift 
   */
  function addGift(gift) {
    setList([...gifts, gift]);
  }

  function toggleClaimed(id) {
    setList(
      gifts.map(gift => {
        if (gift.id === id) {
          return {
            ...gift,
            claimed: true
          };
        }
        return gift;
      })
    );
  }

  function clearGifts() {
    setList(gifts.filter(gifts => gifts.claimed !== true))
  }

  return (
    <div className='giftbox-container'>
      <div className='box'>
        <h2>Friends</h2>
        <div className='input-bar'>
          <input type="text" />
          <button className='btn'></button>
        </div>
        {/* <button className='btn clearClaimedGifts' onClick={clearGifts}><h4>Clear Claimed</h4></button> */}
        <FriendInterface addGift={addGift} />
        <FriendList gifts={gifts} toggleClaimed={toggleClaimed} />
      </div>
    </div>
  )
}

export default React.memo(FriendBox)