import React, { useState, useEffect } from 'react';
import './BattlePage.css';

// REACT COMPONENTS //
import BattleTaskBox from './BattleTaskListComponents/BattleTaskBox';
import VictoryBox from './VictoryBox';

// ENTITIES //
import Player from './Player';
import Enemy from './Enemy';

import AxiosInterface from '../Misc/AxiosInterface';
const AUTH_TOKEN = localStorage.getItem('auth_token');
const axiosInterface = new AxiosInterface();
const LOCAL_STORAGE_KEY = 'BATTLEPAGE';

const enemies = [
  {
    type: 'tree_man',
    name: 'Tree Man',
    health: 120,
    xp: 150,
    gold: 200,
  },
  {
    type: 'lesser_devil',
    name: 'Lesser Devil',
    health: 50,
    xp: 30,
    gold: 50,
  },
  {
    type: 'dark_mage',
    name: 'Dark Mage',
    health: 100,
    xp: 80,
    gold: 100,
  },
  {
    type: 'green_slime',
    name: 'Green Slime',
    health: 80,
    xp: 50,
    gold: 80,
  },
  {
    type: 'terror_monster',
    name: 'Terror',
    health: 150,
    xp: 250,
    gold: 250,
  },
];
let damageToDeal = 0;

const BattlePage = () => {
  /* HOOKS */
  const [battlecomplete, setBattleComplete] = useState(false);
  const [taskComplete, setTaskStatus] = useState(false);
  const [enemyState, setEnemyState] = useState({
    name: '',
    currhp: 120,
    hp: 120,
    type: 'dark_mage',
    xp: 0,
    gold: 0,
  });

  // useEffect(() => {
  //   console.log('First Redering Enemy');
  //   const storeEnemy = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (storeEnemy && storeEnemy.currhp > 0) {
  //     setEnemyState(storeEnemy);
  //   } else {
  //     createEnemy();
  //   }
  // }, []);

  // useEffect(() => {
  //   //console.log('Re redering enemy');
  //   //console.log(enemyState);
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(enemyState));
  // }, [enemyState]);

  //first render
  useEffect(() => {
    console.log('First Redering Enemy');
    getEnemy();
    // const storeEnemy = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (storeEnemy && storeEnemy.currhp > 0) {
    //   setEnemyState(storeEnemy);
    // } else {
    //   createEnemy();
    // }
  }, []);

  //re render
  useEffect(() => {
    console.log('Re redering enemy', enemyState);
    if (enemyState.name === '') {
      console.log('create enemy');
      createEnemy();
    }
    //console.log(enemyState);
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(enemyState));
  }, [enemyState]);

  //=============================
  function createEnemy() {
    let enemyIndex = getRandomValue(0, enemies.length - 1);
    const new_enemy = {
      name: enemies[enemyIndex].name,
      currhp: enemies[enemyIndex].health,
      hp: enemies[enemyIndex].health,
      type: enemies[enemyIndex].type,
      xp: enemies[enemyIndex].xp,
      gold: enemies[enemyIndex].gold,
    };
    //save to db
    updateEnemy({ new_enemy });

    setEnemyState(new_enemy);
  }

  function getRandomValue(from, to) {
    return Math.floor(Math.random() * to) + from;
  }

  function setTaskComplete(completed) {
    setTaskStatus(completed);
  }

  useEffect(() => {
    if (taskComplete) {
      // damage enemy
      if (enemyState.currhp > 0) {
        let hp = enemyState.currhp;
        hp = hp - damageToDeal;
        setEnemyState({ ...enemyState, currhp: hp });
      }
    }

    if (enemyState.currhp <= 0) {
      setBattleComplete(true);
      //createEnemy();
    }
    // reset taskcomplete
    setTaskStatus(false);
  }, [taskComplete]);

  function getDamageToDeal(value) {
    damageToDeal = value;
  }
  function ClearLocalStorage() {
    localStorage.clear();
  }

  //bryan code

  //update in DB
  const updateEnemy = async (update) => {
    let headers = {
      auth_token: AUTH_TOKEN,
    };
    try {
      await axiosInterface.patchData('/home/enemy/update', '', update, headers);
    } catch (error) {
      console.log(error);
    }
  };

  //get profile related specific user
  const getEnemy = async () => {
    //not null key exist in local storage
    if (AUTH_TOKEN) {
      let headers = {
        auth_token: AUTH_TOKEN,
      };
      try {
        let response = await axiosInterface.getData('/home/enemy', headers);
        // enemy associated to specific user
        const enemyArray = response.data;
        // console.log(tasksArray);
        if (enemyArray.length === 0) {
          //nothing to render
          console.log('No enemy');
          return;
        }
        //mongo always return an array
        const enemy = enemyArray[0];
        console.log('get enemy', enemy);
        //setEnemyState(enemy);
      } catch (error) {
        console.log(error);
        return;
      }
    }
  };

  return (
    <div className="battlepage-container">
      <div className="battlepage-screen">
        <a href="profile" className="btn return-home-btn">
          <h5>Return Home</h5>
        </a>
        <button className="btn" onClick={ClearLocalStorage}>
          Clear Storage
        </button>
        {/* ENTITY COMPONENTS */}
        <div className="entity-space">
          <Player health={100} maxhealth={100} name="" taskcomplete={taskComplete} />
          <Enemy
            currHealth={enemyState.currhp}
            health={enemyState.hp}
            name={enemyState.name}
            type={enemyState.type}
            dead={battlecomplete}
            damageTaken={damageToDeal}
          />
        </div>
        {/* VARIOUS BUTTON SCREENS */}
        <div>{battlecomplete && <VictoryBox xp={enemyState.xp} gold={enemyState.gold} />}</div>
        <div
          style={{
            pointerEvents: battlecomplete ? 'none' : '',
            filter: battlecomplete ? 'blur(10px)' : '',
          }}
        >
          <BattleTaskBox setTaskComplete={setTaskComplete} damageToDeal={getDamageToDeal} />
        </div>
      </div>
    </div>
  );
};

export default BattlePage;
