import React, { useState } from "react";
import { Radio } from "../../classdef";

type Props = {
  radio: Radio;
  num: number;
  checkedRadioNames: string[];
  setCheckedRadioNames: React.Dispatch<React.SetStateAction<string[]>>;
};

const RadioButtonUnit: React.FC<Props> = (props) => {
  const defaultCheckedRadioList = [true, ...Array(props.radio.selects.length - 1).fill(false)];
  const [checkedRadioList, setCheckedRadioList] = useState(defaultCheckedRadioList);

  // 選択を１つに制限して、その一つのnameをFormUnitに送る
  const checkOne = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checkedRadios = props.radio.selects.map(() => false);
    checkedRadios.splice(0, 1, e.target.checked); // DOTO: 第一引数どうしたらいいかわからない、inputのidはstringになっちゃう
    setCheckedRadioList(checkedRadios);
    props.checkedRadioNames.splice(props.num, 1); // DOTO: 第三引数をいれるprops.radio.selects[e.target.id].name
    props.setCheckedRadioNames(props.checkedRadioNames);
  };

  return (
    <>
      <p style={{margin: 0}}>{props.radio.title}</p>
      {props.radio.selects.map((radioUnit, i) => {
        return (
        <label key={i} >
          <input type={"radio"} checked={checkedRadioList[i]} onChange={checkOne}></input>
          {radioUnit.label}<br></br>
        </label>)
      })}
    </>
  );
}

export default RadioButtonUnit;