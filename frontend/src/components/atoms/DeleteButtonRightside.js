import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import "./DeleteButtonRightside.css";

export default function DeleteButtonRightside({onClick = f => f}) {
  return (
    <div className="btnWrapper">
      <div className="removeBtn" onClick={onClick}>
        <TiDeleteOutline size={"2rem"} />
      </div>
    </div>
  );
}