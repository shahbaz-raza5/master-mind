import React, { useState, useRef, useContext } from "react";
import Colorpaste from "./Colorpaste";
import { GlobalData } from "../App";
import myStyle from "../Style/Colorpicker.module.css";
import Win from "./Win";
import GameLose from "./GameLose";
import Hint from "./Hint";

const Colorpicker = () => {
  const { random } = useContext(GlobalData);
  const refInp1 = useRef();
  const refInp2 = useRef();
  const refInp3 = useRef();
  const refInp4 = useRef();
  const refInp5 = useRef();
  const refInp6 = useRef();
  const refInp7 = useRef();
  const refInp8 = useRef();

  const [checkWin, setCheckWin] = useState(false);
  const [checkLose, setcheckLose] = useState(false);
  let [refElemement, setrefElemement] = useState([
    refInp5,
    refInp6,
    refInp7,
    refInp8,
  ]);
  let [refCol, setRefCol] = useState("black");
  let [myVal, setMyVal] = useState([]);
  let [isActive, setisActive] = useState(false);
  const [btnVal, setmybtnVal] = useState([""]);
  const [myColor, setmyColor] = useState("");
  const [myColor2, setmyColor2] = useState([]);
  const [myCol, setmyCol] = useState([
    "blue","green","orange","yellow","black", "pink"]);
  const [click, setClick] = useState(0);
  const [componentNames, setComponentNames] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  let style = { border: "1px solid black" };
  let col = [];
  let colorArr = [];
  const colorSelect = (color, index) => {
    setisActive(true);
    setmyColor(color);
    console.log(myColor);
  };

  const copyColor = (e) => {
    if (isActive === true) {
      let number = parseInt(e.currentTarget.style.border);
      if (number === 1) {
        setClick(click + 1);
        e.currentTarget.style.backgroundColor = myColor;
        e.currentTarget.style.border = "0px solid orange";
        setmyColor2([...myColor2, myColor]);
      } else {
        e.currentTarget.style.border = "1px solid orange";
        e.currentTarget.style.background = "none";
        setClick(click - 1);
      }
    }
  };

  const makeColorANumber = (myVal) => {
    for (let j = 0; j < 4; j++) {
      if (myVal === "blue") return 0;
      if (myVal === "green") return 1;
      if (myVal === "orange") return 2;
      if (myVal === "yellow") return 3;
      if (myVal === "black") return 4;
      if (myVal === "pink") return 5;
    }
  };

  const makeNumberAColor = (random) => {
    if (random === 0) return "#0000ff";
    if (random === 1) return "#008000";
    if (random === 2) return "#ffa500";
    if (random === 3) return "#ffff00";
    if (random === 4) return "#232020";
    if (random === 5) return "#ffc0cb";
  };

  const submitBtn = (i) => {
    if (componentNames.length > 0) {
      setmybtnVal([...btnVal, componentNames[0]]);
      componentNames.splice(0, 1);
    }
    setClick(0);
    valuePush();
    for (let j = 0; j < 4; j++) {
      col.push(makeColorANumber(myVal[j]));
    }
    console.log("color num", col);
    setMyVal([]);
    getHint();
    showHint();
    gameWin();
    gameLose(i);
    for (let j = 0; j < 4; j++) {
      colorArr.push(makeNumberAColor(random[j]));
      console.log(colorArr);
    }
  };

  const valuePush = () => {
    setMyVal(myVal.push(refInp1.current.style.backgroundColor));
    setMyVal(myVal.push(refInp2.current.style.backgroundColor));
    setMyVal(myVal.push(refInp3.current.style.backgroundColor));
    setMyVal(myVal.push(refInp4.current.style.backgroundColor));
    console.log(myVal);
  };

  let RandomNumArray = [];
  let HintArray = [];

  const getHint = () => {
    for (let i = 0; i < 4; i++) {
      RandomNumArray.push(random[i]);
    }

    console.log(RandomNumArray);

    // Black Hint//
    for (let i = 0; i < 4; i++) {
      if (col[i] === RandomNumArray[i]) {
        HintArray.push("match");
        RandomNumArray[i] = -1;
      }
      console.log(HintArray);
    }

    // Pink Hint//
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (col[i] === RandomNumArray[j]) {
          HintArray.push("white");
          RandomNumArray[j] = -1;
        }
      }
    }
    console.log(HintArray);
    return HintArray;
  };

  const showHint = () => {
    for (let i = 0; i < HintArray.length; i++) {
      if (HintArray[i] === "match") {
        refElemement[i].current.style.backgroundColor = refCol;
      } else if (HintArray[i] === "white") {
        refElemement[i].current.style.backgroundColor = "pink";
      }
    }
  };

  const gameWin = () => {
    let gameArray = HintArray.join();
    console.log(gameArray);
    if (gameArray === "match,match,match,match") {
      console.log("YOU WON");
      setCheckWin(true);
    }
  };

  const gameLose = (i) => {
    let gameArray = HintArray.join();
    console.log(gameArray);
    console.log("gameArray", i);
    if (gameArray !== "match,match,match,match" && i === 9) {
      setcheckLose(true);
      console.log("YOU Loss the Game");
    }
  };

  return (
    <>
      {checkWin ? <Win /> : ""}
      <div>
        {checkLose ? <GameLose /> : ""}
        <div className={myStyle["container"]}>
          <div className={myStyle["start-game-container"]}>
            <div className={myStyle["game-start"]}>
              <h1 className={`${myStyle["text-h1"]} ${myStyle.master}`}>
                MASTER
              </h1>{" "}
              <h1 className={`${myStyle["text-h1"]} ${myStyle.mind}`}>MIND</h1>{" "}
              <h1 className={`${myStyle["text-h1"]} ${myStyle.game}`}>GAME</h1>
            </div>
          </div>

          <div className={myStyle["main-color-paste"]}>
            {btnVal.map((e, i) => {
              return (
                <Colorpaste
                  ref={{
                    ref1: refInp1,
                    ref2: refInp2,
                    ref3: refInp3,
                    ref4: refInp4,
                    ref5: refInp5,
                    ref6: refInp6,
                    ref7: refInp7,
                    ref8: refInp8,
                  }}
                  copyColor={copyColor}
                  click={click}
                  submit={() => submitBtn(i)}
                  key={i}
                  e={e}
                  styles={style}
                />
              );
            })}

            {componentNames.map((e, i) => {
              return <Hint key={i} />;
            })}
         

          <div className={myStyle["colors"]}>
            {myCol.map((item, index) => (
              <div key={index}>
                <button
                  className={
                    myStyle[`${myColor === item ? "active" : "color-circle"}`]
                  }
                  onClick={() => colorSelect(item, index)}
                  style={{ backgroundColor: `${item}` }}
                ></button>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </>
  );
};
export default Colorpicker;
