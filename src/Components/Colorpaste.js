import React, { forwardRef } from 'react'
import { FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';
import myStyle1 from '../Style/Colorpaste.module.css'
const Colorpaste = (props, ref) => {
  const [disable, setDisable] = useState(false)
  const { ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8 } = ref;
  return (
    <>
      <div >
        <div className={myStyle1["color-paste-container"]}>
          <div style={disable ? { pointerEvents: "none", opacity: "0.8" } : {}} className={myStyle1["color-paste"]} >{props.btnValue}
            <button ref={ref1} onClick={props.copyColor}
              style={props.styles} className={myStyle1["white"]}></button>
            <button ref={ref2} onClick={props.copyColor} style={props.styles} className={myStyle1["white"]}></button>
            <button ref={ref3} onClick={props.copyColor} style={props.styles} className={myStyle1["white"]}></button>
            <button ref={ref4} onClick={props.copyColor} style={props.styles} className={myStyle1["white"]}></button>
          </div>

          <div style={disable ? { pointerEvents: "none", opacity: "0.4" } : {}} className={myStyle1["sub-icon"]}>
            {props.click === 4 ? <FaCheckCircle className={myStyle1["sub-icon"]} size="2rem" color='white' onClick={() => props.submit(setDisable(true))}></FaCheckCircle> : <FaCheckCircle className={myStyle1["sub-icon"]} size="2rem" color='white' />}
          </div>

          <div style={disable ? { pointerEvents: "none", opacity: "0.4" } : {}} className={myStyle1['main-hint']}>
            <button ref={ref5} className={myStyle1['hint']}></button>
            <button ref={ref6} className={myStyle1["hint"]}></button>
            <br />
            <button ref={ref7} className={myStyle1["hint"]}></button>
            <button ref={ref8} className={myStyle1["hint"]}></button>
          </div>
        </div>
      </div>
    </>
  )
}
export default forwardRef(Colorpaste);