import React from 'react'
import './MessageBox.css'
import './characterpage_components.css'
import { useState } from 'react'
import Message from './messagebox_components/Message'

export class GiftBoxFunction {
  AddMessage = ({ message }) => {
    MessageBox.i_AddMessage(message);
  }
}

const MessageBox = () => {
  const [messageList, setList] = useState([]);

  const ReadMessageDataBase=()=>{

  }

  const i_AddMessage = (message) => (event) => {
    setList([...messageList, message]);
  }
  const i_DeleteMessage = (index) => (event) => {
    const list = [...messageList];
    list.splice(index, 1);
    setList(list);
  }

  return (
    <div className='section messagebox-section'>
      <div className='box'>
        <h2>Your Messages</h2>
        <button onClick={i_AddMessage("test message")} className='btn'>test</button>
        <div className='messages-section'>
          {
            messageList.map((singleMessage, index) => <Message content={singleMessage} removeFromList={i_DeleteMessage(index)} />)
          }
        </div>
      </div>
    </div>
  )
}

export default React.memo(MessageBox)