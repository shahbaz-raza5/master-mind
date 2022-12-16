import React, { useContext,useRef } from 'react'
import { useState } from 'react';
import { GlobalData } from '../App'
import myStyle1 from '../Style/SecretColor.module.css'
const SecretColor = () => {
    const { random } = useContext(GlobalData)
    const refInp1 = useRef()
    const refInp2 = useRef()
    const refInp3 = useRef()
    const refInp4 = useRef()
 const [secret,setSecret]=useState([]);

    const makeNumberAColor=(random)=> {
        if (random === 0) return '#0000ff';
        if (random === 1) return '#008000';
        if (random === 2) return '#ffa500';
        if (random === 3) return '#ffff00';
        if (random === 4) return '#232020';
        if (random === 5) return '#ffc0cb';
    }

    for (let j = 0; j < 4; j++) {
        secret.push(makeNumberAColor(random[j]));
   console.log(secret);
    }
  return (
    <>    
        <div className={myStyle1["color-paste-container"]}>      
          <div className={myStyle1["color-paste"]} >
          <div>
            <h1 className={myStyle1['text-h1']}>Secret Colors :</h1>
            </div>
            <button ref={refInp1} style={{backgroundColor:secret[0]}} className={myStyle1["white"]}></button>
            <button ref={refInp2} style={{backgroundColor:secret[1]}} className={myStyle1["white"]}></button>
            <button ref={refInp3} style={{backgroundColor:secret[2]}} className={myStyle1["white"]}></button>
            <button ref={refInp4} style={{backgroundColor:secret[3]}} className={myStyle1["white"]}></button>

          </div>
        </div>
     
    </>
  )
}





export default SecretColor;