import React, { useState } from "react";

export default function RadioButtonUnit({radio={}, num=0, checkedRadioNames=[], setCheckedRadioNames=f=>f}) {
  const defaultCheckedRadioList = [true, ...Array(radio.selects.length - 1).fill(false)];
  const [checkedRadioList, setCheckedRadioList] = useState(defaultCheckedRadioList);

  // 選択を１つに制限して、その一つのnameをFormUnitに送る
  const checkOne = e => {
    const checkedRadios = radio.selects.map(() => false);
    checkedRadios.splice(e.target.id, 1, e.target.checked);
    setCheckedRadioList(checkedRadios);
    checkedRadioNames.splice(num, 1, radio.selects[e.target.id].name);
    setCheckedRadioNames(checkedRadioNames);
  };

  return (
    <>
      <p style={{margin: 0}}>{radio.title}</p>
      {radio.selects.map((radioUnit, i) => {
        return (
        <label key={i} >
          <input id={i} type={"radio"} checked={checkedRadioList[i]} onChange={checkOne}></input>
          {radioUnit.label}<br></br>
        </label>)
      })}
    </>
  );
}