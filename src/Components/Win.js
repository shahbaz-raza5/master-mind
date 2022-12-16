import React from 'react'
// import myStyle from './Style/Win.module.css'
import myStyle from '../Style/Win.module.css'

import SecretColor from './SecretColor'
const Win = () => {
  const reStart = () => {
    window.location.reload();
  }

  return (
    <>
      <SecretColor />
      <div className={myStyle["win-container"]}>
        <div className={myStyle.win}><h1 className={myStyle['text-h1']}>CONGRATULATIONS...!!!</h1> <h1 className={myStyle['text-h1']}>YOU WON THE GAME</h1>
          <button onClick={reStart} className={myStyle["btn-start"]} >Restart</button>
        </div>
      </div>
    </>
  )
}

export default Win
