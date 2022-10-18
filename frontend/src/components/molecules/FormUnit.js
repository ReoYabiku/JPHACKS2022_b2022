import React from "react";
import InputUnit from "../atoms/InputUnit";
import "./FormUnit.css";

export default function FormUnit({inputTexts=[], submitValue=""}) {
  return (
    <form className="form-unit">
      <div className="form-content">
        {
        inputTexts.map((inputText, i) => {
          return (
            <InputUnit
              key={i}
              label={inputText.label}
              value={inputText.value}
            />
          );
        })
        }
      </div>
      <div className="submit-button-wrapper">
        <input type={"submit"} value={submitValue} className="submit-button"></input>
      </div>
    </form>
  );
}