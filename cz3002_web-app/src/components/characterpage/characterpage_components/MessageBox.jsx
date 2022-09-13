import React from 'react'
import './MessageBox.css'
import Messages from './messagebox_components/Message'

const MessageBox = () => {
  return (
    <div className='section messagebox-section'>
        <div className='box'>
          <h2>Your Messages</h2>
          <Messages/>
        </div>
    </div>
  )
}

export default MessageBox