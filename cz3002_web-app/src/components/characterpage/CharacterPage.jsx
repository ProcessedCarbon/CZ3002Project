import React, { useState } from 'react'
import './CharacterPage.css'

// REACT COMPONENTS //
import UserProfile from './UserProfile'
import FriendBox from './FriendBoxComponents/FriendBox'
import Shop from './ShopComponents/Shop'
import InventoryBox from './InventoryComponents/InventoryBox'
import TaskBox from './TaskListComponents/TaskBox'
import PlayerAvatar from '../PlayerAvatar'
import RecommendedTaskBox from './RecommendedTaskComponents/RecommendedTaskBox'

// ICONS OR IMAGES//
import player_profile_pic from '../../assets/player_profile_pic.png'
import messageicon from '../../assets/icons/Messages.png'
import favouritesicon from '../../assets/icons/Favorites.png'
import protectionicon from '../../assets/icons/Protection.png'
import chestbtn from '../../assets/Chest.png'
import tridot from '../../assets/icons/Kebab_Menu_Horizontal.png'
import soundonicon from '../../assets/icons/Sound_On.png'
import pointerdownicon from '../../assets/icons/Pointer_Down.png'
import personicon from '../../assets/icons/Person.png'
import minusicon from '../../assets/icons/Minus.png'
import homeicon from '../../assets/icons/Home.png'
import recommendedtaskicon from '../../assets/icons/Copy_Document.png'

const CharacterPage = () => {
  /* HOOKS */
  const [showFriends, setShowFriends] = useState(false);
  const [isShown_fav, setIsShown_fav] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const [showInventory, setShowInventory] = useState(false);
  const [hideLowerBtn, setHideLowerBtn] = useState(false);
  const [isShown_tasklist, setIsShown_tasklist] = useState(false);
  const [showRecommendedTask, setShowRecommendedTask] = useState(false);

  /* ON CLICK METHODS */
  const handleTaskList = event => {
    setIsShown_tasklist(current => !current);
    setIsShown_fav(false);
    setShowFriends(false);
    setShowRecommendedTask(false);
    collapseLowerBtn(!isShown_tasklist);
  };
  const handleFriendBox = event => {
    setShowFriends(current => !current);
    setIsShown_fav(false);
    setIsShown_tasklist(false);
    setShowRecommendedTask(false);
    collapseLowerBtn(!showFriends);
  };
  const handleFavoriteBox = event => {
    setIsShown_fav(current => !current);
    setShowFriends(false);
    setIsShown_tasklist(false);
    setShowRecommendedTask(false);
    collapseLowerBtn(!isShown_fav);
  };
  const handleShowRecommended = event => {
    setShowRecommendedTask(current => !current);
    setShowFriends(false);
    setIsShown_tasklist(false);
    setIsShown_fav(false);
  }
  const handleSideBar = event => {
    setShowSideBar(current => !current);
  }
  const handleInventory = event => {
    setShowInventory(current => !current);
  }

  const collapseLowerBtn = (status) => {
    setHideLowerBtn(status);
    setShowSideBar(false);
    setShowInventory(false);
    setShowRecommendedTask(false);
  }

  /* SELECT BUTTON SCREENS TO SHOW */
  let screenToShow;
  if (showFriends) {
    screenToShow = <FriendBox />;
  }
  else if (isShown_fav) {
    screenToShow = <Shop />;
  }
  else if (showInventory) {
    screenToShow = <InventoryBox />;
  }
  else if (isShown_tasklist) {
    screenToShow = <TaskBox />
  }
  else if (showRecommendedTask) {
    screenToShow = <RecommendedTaskBox />
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
              <div className='profile-pic-border'>
                <img src={player_profile_pic} alt="" />
              </div>
              <div className='line'></div>
            </div>

            {/* Profile details*/}
            <div className='char-details'>
              <UserProfile />
            </div>
          </div>

          {/* TOP RIGHT BUTTONS:
              1. message box
              2. gift box
              3. favourites
          */}
          <div className='btn_group'>
            <button onClick={handleTaskList} className="btn message-btn"><img src={messageicon} alt="" /></button>
            <button onClick={handleFriendBox} className="btn friends-btn"><img src={personicon} alt="" /></button>
            <button onClick={handleFavoriteBox} className="btn fav-btn"><img src={favouritesicon} alt="" /></button>
          </div>

          {/* PLAYER AVATAR */}
          <div className='avatar-scene'>
            <div className='character-avatar'>
              <PlayerAvatar />
            </div>
          </div>

          {/* BOTTOM BUTTON:
              1. inventory
              2. battle
              3. sidebar
          */}
          <div className='bottom_btn' style={{ transform: hideLowerBtn ? 'translateY(100%)' : 'translateY(0)' }}>
            <button onClick={handleInventory} className='btn inventory-btn'><img src={chestbtn} alt="" /></button>
            <a href="battle" className='btn battle-btn'><img src={protectionicon} alt="" /></a>
            <div className='sidebar-container'>
              <button onClick={handleSideBar}
                className={showSideBar ? 'btn sidebar-btn no-hover' : 'btn sidebar-btn'}
                disabled={showSideBar}
                style={{
                  bottom: showSideBar ? '0rem' : ' -19rem',
                  backgroundColor: showSideBar ? "var(--color-darkish-blue)" : "",
                  border: showSideBar ? "0 transparent" : ""
                }}
              >
                <img src={tridot} style={{ display: showSideBar ? 'none' : 'block' }} alt="" />
                {/* Inner buttons inside the side bar */}
                <div className='inner-btns'>
                  <a href="login" className='btn'><img src={homeicon} alt="" /></a>
                  <button className='btn' onClick={handleShowRecommended}><img src={recommendedtaskicon} alt="" /></button>
                  <button className='btn'><img src={soundonicon} alt="" /></button>
                  <img src={minusicon} style={{ marginTop: '3rem' }} alt="" />
                  <button className='btn' onClick={handleSideBar}><img src={pointerdownicon} alt="" /></button>
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