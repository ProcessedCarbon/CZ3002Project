import React, { useState, useEffect } from 'react';
import './FriendBox.css';
import FriendList from './FriendList';
import FriendInterface from './FriendInterface';
import AxiosInterface from '../../Misc/AxiosInterface';

const LOCAL_STORAGE_KEY = 'FRIENDS';
const AUTH_TOKEN = localStorage.getItem('auth_token');
const axiosInterface = new AxiosInterface();

const FriendBox = () => {
  const [friends, setList] = useState([]);
  /**
   * Store data on local storage
   */
  // useEffect(() => {
  //   const storedFriends = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (storedFriends) {
  //     setList(storedFriends);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(friends));
  // }, [friends]);

  //Runs on the first render
  //And any time any dependency value changes
  useEffect(() => {
    console.log('friend interface render');
    async function getFriendList() {
      if (AUTH_TOKEN) {
        let headers = {
          auth_token: AUTH_TOKEN,
        };
        let response = await axiosInterface.getData('/home/friends', headers);
        let friend_list = response.data;
        //console.log('get friend list', friend_list);
        setList(friend_list);
      }
    }
    getFriendList();
  }, [friends]);
  function addFriend(friend) {
    setList([...friends, friend]);
  }

  function toggleClaimed(id) {
    setList(
      friends.map((friend) => {
        if (friend.id === id) {
          return {
            ...friend,
            claimed: true,
          };
        }
        return friend;
      })
    );
  }

  function clearGifts() {
    setList(friends.filter((friend) => friend.claimed !== true));
  }

  return (
    <div className="friendbox-container">
      <div className="box">
        <h2>Friends</h2>
        {/* <button className='btn clearClaimedGifts' onClick={clearGifts}><h4>Clear Claimed</h4></button> */}
        <FriendInterface addFriend={addFriend} />
        <FriendList friends={friends} toggleClaimed={toggleClaimed} />
      </div>
    </div>
  );
};

export default React.memo(FriendBox);
