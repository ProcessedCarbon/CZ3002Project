import React from 'react'
import { useState } from 'react'
import './CharacterPage.css'

// REACT COMPONENTS //
import Stats from './Stats'
import UserName from './UserName'
import GiftBox from './GiftBoxComponents/GiftBox'
import Shop from './ShopComponents/Shop'
import InventoryBox from './InventoryComponents/InventoryBox'
import TaskBox from './TaskListComponents/TaskBox'

// ICONS OR IMAGES//
import char_profile_img from '../../assets/char_profile_image_1.png'
import messageicon from '../../assets/icons/Messages.png'
import giftsicon from '../../assets/icons/Gift.png'
import favouritesicon from '../../assets/icons/Favorites.png'
import char_avatar from '../../assets/char_avatar.png'
import protectionicon from '../../assets/icons/Protection.png'
import chestbtn from '../../assets/Chest.png'
import tridot from '../../assets/icons/Kebab_Menu_Horizontal.png'
import soundonicon from '../../assets/icons/Sound_On.png'
import pointerdownicon from '../../assets/icons/Pointer_Down.png'
import personicon from '../../assets/icons/Person.png'
import minusicon from '../../assets/icons/Minus.png'
import homeicon from '../../assets/icons/Home.png'

const CharacterPage = () => {

  /* HOOKS */
  const [isShown_gift, setIsShown_gift] = useState(false);
  const [isShown_fav, setIsShown_fav] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const [showInventory, setShowInventory] = useState(false);
  const [hideLowerBtn, setHideLowerBtn] = useState(false);
  const [isShown_tasklist, setIsShown_tasklist] = useState(false);

  /* ON CLICK METHODS */
  const handleTaskList = event => {
    setIsShown_tasklist(current => !current);
    setIsShown_fav(false);
    setIsShown_gift(false);
    collapseLowerBtn(!isShown_tasklist);
  };
  const handleGiftBox = event => {
    setIsShown_gift(current => !current);
    setIsShown_fav(false);
    setIsShown_tasklist(false);
    collapseLowerBtn(!isShown_gift);
  };
  const handleFavoriteBox = event => {
    setIsShown_fav(current => !current);
    setIsShown_gift(false);
    setIsShown_tasklist(false);
    collapseLowerBtn(!isShown_fav);
  };
  const handleSideBar = event => {
    setShowSideBar(current => !current);
  }
  const handleInventory = event =>{
    setShowInventory(current=>!current);
  }

  const collapseLowerBtn = (status) =>{
    setHideLowerBtn(status);
    setShowSideBar(false);
    setShowInventory(false);
  }

  /* SELECT BUTTON SCREENS TO SHOW */
  let screenToShow;
  if (isShown_gift) {
    screenToShow = <GiftBox />;
  }
  else if (isShown_fav) {
    screenToShow = <Shop />;
  }
  else if(showInventory){
    screenToShow = <InventoryBox/>;
  }
  else if(isShown_tasklist){
    screenToShow = <TaskBox/>
  }

  /* ================ RENDER ==================== */
  return (
    <characterpage>
      <div className='characterpage_container'>
        <div className='background'>

          {/* CHARACTER PROFILE IN THE TOP LEFT*/}
          <div className='character_profile'>

            {/* Profile picture*/}
            <div className='profile-picture'>
              <img src={char_profile_img} alt="" />
              <div className='line'></div>
            </div>

            {/* Profile details*/}
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

          {/* TOP RIGHT BUTTONS:
              1. message box
              2. gift box
              3. favourites
          */}
          <div className='btn_group'>
            <div className='message'>
              <button onClick={handleTaskList} className="btn message-btn"><img src={messageicon} alt=""/></button>
            </div>
            <div className='gift'>
              <button onClick={handleGiftBox} className="btn gifts-btn"><img src={giftsicon} alt=""/></button>
            </div>
            <div className='favorites'>
              <button onClick={handleFavoriteBox} className="btn gifts-btn"><img src={favouritesicon} alt=""/></button>
            </div>
          </div>

         {/* PLAYER AVATAR */}
          <div className='avatar-scene'>
            <div className='character-avatar'>
              <img src={char_avatar} alt=""/>
            </div>
          </div>

          {/* BOTTOM BUTTON:
              1. inventory
              2. battle
              3. sidebar
          */}
          <div className='bottom_btn' style={{ scale: hideLowerBtn ? '0' : '1' }}>
            <button onClick ={handleInventory} className='btn inventory-btn'><img src={chestbtn} alt=""/></button>
            <a href ="battle" className='btn battle-btn'><img src={protectionicon} alt=""/></a>
            <div className='sidebar-container'>
              <button onClick={handleSideBar}
                className={showSideBar ? 'btn sidebar-btn no-hover' : 'btn sidebar-btn'}
                disabled ={showSideBar}
                style={{bottom: showSideBar ?  '0rem' : ' -19rem'}}
              >
                <img src={tridot} style={{display: showSideBar ? 'none' : 'block' }} alt=""/>
                {/* Inner buttons inside the side bar */}
                <div className='inner-btns'>
                  <a href="login" className='btn'><img src={homeicon} alt=""/></a>
                  <button className='btn'><img src={personicon} alt=""/></button>
                  <button className='btn'><img src={soundonicon} alt=""/></button>
                  <img src={minusicon} style={{marginTop:'3rem'}} alt=""/>
                  <button className='btn' onClick={handleSideBar}><img src={pointerdownicon} alt=""/></button>
                </div>
              </button>
            </div>
          </div>
          
          {/* VARIOUS BUTTON SCREENS */}
          <div>
            {screenToShow}
          </div>

        </div>

      </div>
    </characterpage>

  )
}

export default CharacterPage