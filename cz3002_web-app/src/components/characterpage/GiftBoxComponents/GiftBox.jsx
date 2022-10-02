import React from 'react'
import './GiftBox.css'
import Gift from './Gift'
import { useState } from 'react'
import AxiosInterface from '../../Misc/AxiosInterface'
export class GiftBoxFunction {
  AddGift = ({ giftname }) => {
    GiftBox.i_AddGift(giftname);
  }
}

// Reference to Axios Interface
const a_interface = new AxiosInterface(true);

const GiftBox = () => {
  const [giftList, setList] = useState([]);
  const tmpGiftName = "Tmp_Gift"

  const i_AddGift = (giftName) => (event) => {
    setList([...giftList, giftName]);
    //a_interface.getData("/todos");
    //a_interface.postData("/todos", {title: "WOOP", completed: false});
    //a_interface.updateTodo()
    //a_interface.getSimData();
  }
  const i_DeleteGift = (index) => (event) => {
    const list = [...giftList];
    list.splice(index, 1);
    setList(list);
  }

  // Used to read from data base for list of gifts later
  const ReadGiftsDataBase = () => {

  }

  return (
    <div className='giftbox-container'>
      <div className='box'>
        <h2>GiftBox</h2>
        <button className='btn' onClick={(e) => i_AddGift(tmpGiftName)(e)}>
          <h4>test</h4>
        </button>
        <div className='layout-scroll gift-layout'>
          {
            giftList.map((singleGift, index) => <Gift key={index} name={singleGift} removeFromList={i_DeleteGift(index)} />)
          }
        </div>
      </div>
    </div>
  )
}

export default React.memo(GiftBox)