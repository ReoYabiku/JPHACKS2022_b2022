import React from "react";
import "./User.css";

export default function User({name, age, sex}) {
  return (
    <div className="user">
      <p>name: {name}</p>
      <p>age: {age}</p>
      <p>sex: {sex}</p>
    </div>
  );
}