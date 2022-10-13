import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const TEST_GIFT_NAME = "Tmp_Gift_12345677890123456l1231231kln"

function FriendInterface({ addGift }) {
  const [gift, setGift] = useState({
    id: "",
    name: "",
    claimed: false
  });

  function addGiftToList(giftName){
    if(giftName !== ""){
      addGift({ ...gift, id: uuidv4(), name: giftName });
      setGift({ ...gift, name: "" });
    }
  }
  
  // For testing only
  function handleAddGift(e) {
    e.preventDefault(); // prevents browser refresh
    addGiftToList(TEST_GIFT_NAME);
  }

  return (
    <div>
      <button className='btn' onClick={handleAddGift}>test</button>
    </div>
  )
}

export default FriendInterface