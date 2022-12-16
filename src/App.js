import React, { createContext, useState } from "react";
import "./App.css";
import Colorpicker from "./Components/Colorpicker";
import StartGame from "./Components/StartGame";
export const GlobalData = createContext();
const App=()=> {
  const [random, setRandom] = useState([]);
  const [show, setShow] = useState(false);
  let myNum = [];
  const showComp = () => {
    setShow(true);
    for (let i = 0; i < 4; i++) {
      myNum.push(Math.floor(Math.random() * 6));
    }
    setRandom(myNum);
  };

  return (
    <GlobalData.Provider
      value={{ show: show, showComp: showComp, random: random }}
    >
      <div>
        {show === false ? (
          <StartGame />
        ) : (
          <div>
            <Colorpicker />
          </div>
        )}
      </div>
    </GlobalData.Provider>
  );
}

export default App;
