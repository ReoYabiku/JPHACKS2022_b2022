import React from "react";
import StepTitle from "../atoms/StepTitle";
import FormUnit from "../molecules/FormUnit";
import ButtonLink from "../atoms/ButtonLink";
import "./CodeGenerateInterface.css";

export default function CodeGerenateInterface({imgPath="", num=0, value="", sentenses=[], inputTexts=[], nextPath="", endpointPath=""}) {
  return (
    <div className="each-step-container">
      <div className="each-step-title">
        <StepTitle imgPath={imgPath} num={num} value={value} />
      </div>
      <div className="each-step-wrapper">
        {sentenses.map((sentense, i) => <p className="each-step-sentense" key={i}>{sentense}</p>)}
        <FormUnit inputTexts={inputTexts} submitValue="コードを生成" endpointPath={endpointPath} />
      </div>
      <div className="next-button">
        <ButtonLink path={nextPath} value="次へ進む" />
      </div>
    </div>
  );
}