import React,{useContext } from 'react'
import myStyle from '../Style/StartGame.module.css'
import { GlobalData } from '../App'
const StartGame = () => {
    const { showComp,random } = useContext(GlobalData)
    console.log(random);
    return (
        <div className={myStyle["start-game-container"]}>
            <div className={myStyle["game-start"]}>
                <h1 className={`${myStyle['text-h1']} ${myStyle.master}`} >MASTER</h1> <h1 className={`${myStyle['text-h1']} ${myStyle.mind}`}>MIND</h1 > <h1 className={`${myStyle['text-h1']} ${myStyle.game}`}>GAME</h1>
            </div>

            <div className={myStyle["button-start"]}>
                <button onClick={showComp} className={myStyle["btn-start"]}>START GAME</button>
            </div>
        </div>
    )
}

export default StartGame
