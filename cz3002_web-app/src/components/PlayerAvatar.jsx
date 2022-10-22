import React ,{useState, useEffect} from 'react'
import './PlayerAvatar.css'

// idle assets
import ranger_1_idle from '../assets/PlayerAvatarIdle/ranger_1_idle_sprite_sheet.png'
import ranger_2_idle from '../assets/PlayerAvatarIdle/ranger_2_idle_sprite_sheet.png'
import warrior_1_idle from '../assets/player_idle_sprite_sheet.png'
import warrior_2_idle from '../assets/PlayerAvatarIdle/warrior_2_idle_sprite_sheet.png'
import mage_1_idle from '../assets/PlayerAvatarIdle/mage_1_idle_sprite_sheet.png'
import mage_2_idle from '../assets/PlayerAvatarIdle/mage_2_idle_sprite_sheet.png'
import dino_1_idle from '../assets/PlayerAvatarIdle/dino_1_idle_sprite_sheet.png'
import dino_2_idle from '../assets/PlayerAvatarIdle/dino_2_idle_sprite_sheet.png'

//weapon assets
import ranger_weapon from '../assets/PlayerWeapons/ranger_bow.png'
import warrior_1_weapon from '../assets/player_sword.png'
import warrior_2_weapon from '../assets/PlayerWeapons/warrior_2_sword.png'
import mage_1_weapon from '../assets/PlayerWeapons/mage_1_staff.png'
import mage_2_weapon from '../assets/PlayerWeapons/mage_2_staff.png'
import dino_1_weapon from '../assets/PlayerWeapons/dino_1_club.png'
import dino_2_weapon from '../assets/PlayerWeapons/dino_2_club.png'


const PLAYER_LOCAL_KEY = "PLAYER_LOCAL_KEY";

const PlayerAvatar = ({ taskcomplete }) => {
    const [playerAttack, setPlayerAttackAnim] = useState(false);

    function charImgBasedOnCharacter() {
        let title = JSON.parse(localStorage.getItem(PLAYER_LOCAL_KEY)).char_equipped;

        if (title === "ranger 1") {
            return ranger_1_idle;
        }
        else if (title === "ranger 2") {
            return ranger_2_idle;
        }
        else if(title === "warrior 1") {
            return warrior_1_idle;
        }
        else if (title === "warrior 2") {
            return warrior_2_idle;
        }
        else if (title === "wizard 1") {
            return mage_1_idle;
        }
        else if (title === "wizard 2") {
            return mage_2_idle;
        }
        else if (title === "dino 1") {
            return dino_1_idle;
        }
        else if (title === "dino 2") {
            return dino_2_idle;
        }
    }

    function weaponImgBasedOnCharacter() {
        let title = JSON.parse(localStorage.getItem(PLAYER_LOCAL_KEY)).char_equipped;

        if (title === "ranger 1" || title === "ranger 2") {
            return ranger_weapon;
        }
        else if(title === "warrior 1") {
            return warrior_1_weapon;
        }
        else if (title === "warrior 2") {
            return warrior_2_weapon;
        }
        else if (title === "wizard 1") {
            return mage_1_weapon;
        }
        else if (title === "wizard 2") {
            return mage_2_weapon;
        }
        else if (title === "dino 1") {
            return dino_1_weapon;
        }
        else if (title === "dino 2") {
            return dino_2_weapon;
        }
    }

    useEffect(()=>{
        if(taskcomplete){
            setPlayerAttackAnim(true);
            setTimeout(() => {
                setPlayerAttackAnim(false);
            }, 300)
        }
    },[taskcomplete])

    return (
        <div className='player'
        style={{
            animationPlayState: playerAttack ? "running" : "paused"
        }}
        >
            <img className="player_sword" src={weaponImgBasedOnCharacter()} alt="" />
            <div className='player-avatar'>
                <img className="player_spritesheet" src={charImgBasedOnCharacter()} alt="" />
            </div>
        </div>
    )
}

export default PlayerAvatar