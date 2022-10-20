import React from "react";

export default function CheckBoxUnit({id=0, checkedList=[], labelText="", setCheckedList=f=>f}) {
  const onChange = e => {
    checkedList.splice(id, 1, e.target.checked);
    setCheckedList([...checkedList]);
  };

  return (
    <label style={{display: "flex", alignItems: "center"}}>
      <input type="checkbox" onChange={onChange}></input>
      {labelText}
    </label>
  );
}