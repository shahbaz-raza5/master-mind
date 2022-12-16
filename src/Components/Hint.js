import React from 'react'
import myStyle1 from '../Style/Colorpaste.module.css'
const Hint = () => {
 
  return (
    <>
      <div >
        <div style={{ pointerEvents: "none", opacity: "0.9" }}  className={myStyle1["color-paste-container"]}>
          <div className={myStyle1["color-paste"]} >
            <button 
               className={myStyle1["white"]}></button>
            <button   className={myStyle1["white"]}></button>
            <button   className={myStyle1["white"]}></button>
            <button  className={myStyle1["white"]}></button>
          </div>

          <div className={myStyle1['main-hint']}>
            <button  className={myStyle1['hint']}></button>
            <button  className={myStyle1['hint']}></button>
            <br />
            <button  className={myStyle1['hint']}></button>
            <button  className={myStyle1['hint']}></button>
          </div>
        </div>
      </div>
    </>
  )
}





export default Hint;