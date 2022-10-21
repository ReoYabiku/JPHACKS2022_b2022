import React, { useState } from "react";

export default function RadioButtonUnit({title="", radio=[]}) {
  const defaultCheckedRadioList = radio.map(() => false);
  const [checkedRadioList, setCheckedRadioList] = useState(defaultCheckedRadioList);

  // 選択を１つに制限して、その一つのnameをFormUnitに送る
  const checkOne = e => {
    const checkedRadios = radio.map(() => false);
    checkedRadios.splice(e.target.id, 1, e.target.checked);
    setCheckedRadioList(checkedRadios);
  };

  return (
    <>
      <p>{title}</p>
      {radio.map((radioUnit, i) => {
        return (
        <label key={i}>
          <input id={i} type={"radio"} checked={checkedRadioList[i]} onChange={checkOne}></input>
          {radioUnit.label}<br></br>
        </label>)
      })}
    </>
  );
}