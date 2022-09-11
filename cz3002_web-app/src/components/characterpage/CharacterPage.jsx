import React from 'react'
import './CharacterPage.css'
import char_profile_img from '../../assets/char_profile_image_1.png'
import Stats from './Stats'
import UserName from './UserName'

import messageicon from '../../assets/icons/Messages.png'
import giftsicon from '../../assets/icons/Gift.png'
import favouritesicon from '../../assets/icons/Favorites.png'
import char_avatar from '../../assets/char_avatar.png'
import protectionicon from '../../assets/icons/Protection.png'
import chestbtn from '../../assets/Chest.png'
import tridot from '../../assets/icons/Kebab_Menu_Horizontal.png'

const CharacterPage = () => {
  return (
    <characterpage>
      <div className='container characterpage_container'>
        <div className='background'>

          <div className='character_profile'>
            <div className='profile-picture'>
              <img src={char_profile_img} alt="" />
              <div className='line'></div>
            </div>

            <div className='char-details'>
              <UserName username='Gregory123'></UserName>
              <div className='stats-grp'>
                <Stats statname='Lvl:' value='100'></Stats>
                <Stats statname='Pwr:' value={'250'}></Stats>
                <Stats statname='Gold:' value={'$' + '100'}></Stats>
                <Stats statname='SP:' value='30'></Stats>
              </div>
            </div>
          </div>

          <div className='btn_group'>
            <div className='message'>
              <a href="" className='btn message-btn'><img src={messageicon} /></a>
            </div>
            <div className='gift'>
              <a href="" className='btn gifts-btn'><img src={giftsicon} /></a>
            </div>
            <div className='favorites'>
              <a href="" className='btn favourites-btn'><img src={favouritesicon} /></a>
            </div>
          </div>

          <div className='avatar-scene'>
            <div className='character-avatar'>
              <img src={char_avatar} alt="" />
            </div>
          </div>

          <div className='bottom_btn'>
            <a href="" className='btn inventory-btn'><img src={chestbtn} /></a>
            <a href="" className='btn battle-btn'><img src={protectionicon} /></a>
            <div className='sidebar-container'>
              <a href="" className='btn sidebar-btn'><img src={tridot} alt="" /></a>
            </div>
          </div>

        </div>
      </div>
    </characterpage>

  )
}

export default CharacterPage