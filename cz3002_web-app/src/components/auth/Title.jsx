import React from 'react'
import './Title.css'
import PlayerAvatar from '../PlayerAvatar'
import title from '../../assets/Title.png'
const Title = () => {
    return (
        <div className='titlescreen-container'>
            <div className='background'>
                <div className='main-title'>
                    <img src={title} alt="" />
                </div>
                <div className='titlescreen-body'>
                    <div className='char-text-box'>
                        <a href="login" className='box btn title-screen-btn'>
                            <div className='box-content'>
                                <h5>Begin Your</h5>
                                <h4>Adventure</h4>
                            </div>
                        </a>
                    </div>
                    <div className='auth-char-avatar'>
                        <PlayerAvatar />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Title