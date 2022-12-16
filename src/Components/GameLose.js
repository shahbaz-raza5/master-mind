import React from 'react'
import myStyle from '../Style/GameLose.module.css'
import SecretColor from './SecretColor'
const GameLose = () => {
  const reStart = () => {
    window.location.reload();
  }
  return (
    <>
      <SecretColor />
      <div className={myStyle["lose-container"]}>
        <div className={myStyle.lose}><h1 className={myStyle['text-h1']}>Try  AGAIN...!!!</h1> <h1 className={myStyle['text-h1']}>YOU LOSS THE GAME</h1>
          <button onClick={reStart} className={myStyle["btn-start"]} >Restart</button>
        </div>
      </div>
    </>
  )
}

export default GameLose
