import React, { useState, useEffect } from 'react'
import './GiftBox.css'
import GiftList from './GiftList'
import GiftInterface from './GiftInterface'

const LOCAL_STORAGE_KEY = "GIFTBOX"

const GiftBox = () => {
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
        <h2>Gift Box</h2>
        <button className='btn clearClaimedGifts' onClick={clearGifts}><h4>Clear Claimed</h4></button>
        <GiftInterface addGift={addGift} />
        <GiftList gifts={gifts} toggleClaimed={toggleClaimed} />
      </div>
    </div>
  )
}

export default React.memo(GiftBox)