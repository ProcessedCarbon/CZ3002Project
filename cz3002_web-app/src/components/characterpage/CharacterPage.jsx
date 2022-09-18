import React from 'react'
import { useState } from 'react'
import './CharacterPage.css'
import char_profile_img from '../../assets/char_profile_image_1.png'
import Stats from './Stats'
import UserName from './UserName'

import MessageBox from './characterpage_components/MessageBox'
import GiftBox from './characterpage_components/GiftBox'
import FavoriteBox from './characterpage_components/FavoriteBox'

import messageicon from '../../assets/icons/Messages.png'
import giftsicon from '../../assets/icons/Gift.png'
import favouritesicon from '../../assets/icons/Favorites.png'
import char_avatar from '../../assets/char_avatar.png'
import protectionicon from '../../assets/icons/Protection.png'
import chestbtn from '../../assets/Chest.png'
import tridot from '../../assets/icons/Kebab_Menu_Horizontal.png'

const CharacterPage = () => {
  const [isShown_msg, setIsShown_msg] = useState(false);
  const [isShown_gift, setIsShown_gift] = useState(false);
  const [isShown_fav, setIsShown_fav] = useState(false);

  const handleMessageBox = event => {
    setIsShown_msg(current => !current);
    setIsShown_gift(false);
    setIsShown_fav(false);
  };
  const handleGiftBox = event => {
    setIsShown_gift(current => !current);
    setIsShown_msg(false);
    setIsShown_fav(false);
  };
  const handleFavoriteBox = event => {
    setIsShown_fav(current => !current);
    setIsShown_gift(false);
    setIsShown_msg(false);
  };

  let screenToShow;
  if(isShown_msg){
    screenToShow = <MessageBox/>;
  }
  else if(isShown_gift){
    screenToShow = <GiftBox/>;
  }
  else if(isShown_fav){
    screenToShow = <FavoriteBox/>;
  }

  return (
    <characterpage>
      <div className='characterpage_container'>
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
              <button onClick={handleMessageBox} className="btn message-btn"><img src={messageicon} /></button>
            </div>
            <div className='gift'>
            <button onClick={handleGiftBox} className="btn gifts-btn"><img src={giftsicon} /></button>
            </div>
            <div className='favorites'>
              <button onClick={handleFavoriteBox} className="btn gifts-btn"><img src={favouritesicon} /></button>
            </div>
          </div>

          <div className='avatar-scene'>
            <div className='character-avatar'>
              <img src={char_avatar} />
            </div>
          </div>

          <div className='bottom_btn' style={{scale: isShown_msg || isShown_gift || isShown_fav ? '0' : '1'}}>
            <a href="" className='btn inventory-btn'><img src={chestbtn} /></a>
            <a href="" className='btn battle-btn'><img src={protectionicon} /></a>
            <div className='sidebar-container'>
              <button onClick={handleFavoriteBox} className='btn sidebar-btn'><img src={tridot} /></button>
            </div>
          </div>

          {/* These should always be rendered at the top most layer above all else in this page*/}
          <div>
            {screenToShow}
          </div>

        </div>
      </div>
    </characterpage>

  )
}

export default React.memo(CharacterPage)