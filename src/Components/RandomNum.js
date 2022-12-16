import React, { useContext } from 'react'
import {GlobalData} from '../App'

const RandomNum = () => {
  const {getRandomNum}=useContext(GlobalData)
 
  let myNum = []
  const myrandomNum = () => {
      
      for (let i = 0; i < 4; i++) {
          myNum.push(Math.floor(Math.random() * 6));
      }
      console.log(myNum);
      
  }
  myrandomNum();

  return (
    <div>
      <button onClick={()=>getRandomNum(myNum)}>click</button>
    </div>
  )
}

export default RandomNum
