import React from 'react'
import './Message.css'
import plusicon from '../../../../assets/icons/Plus.png'
const Message = ({ content }) => {
  return (
    <div className='messages-layout'>
      <div className="messages-container">
        <p>
          {content}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <button className='btn delete-message-btn'><img src={plusicon} /></button>
    </div>
  )
}

export default Message