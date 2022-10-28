import React from "react";
import "./InputUnit.css";

type Props =  {
  label: string;
  value: string;
  name: string;
};

const InputUnit: React.FC<Props> = (props) =>  {
  return (
    <div className="input-unit">
      <p className="text-label">{props.label}</p>
      <input type={"text"} className="text-box" defaultValue={props.value} name={props.name}></input>
    </div>
  );
};

export default InputUnit;