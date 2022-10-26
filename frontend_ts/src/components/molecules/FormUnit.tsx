import React, { useState } from "react";
import InputUnit from "../atoms/InputUnit";
import "./FormUnit.css";
import Modal from "../organisms/Modal";
import CheckboxUnit from "../atoms/CheckboxUnit";
import RadioButtonUnit from "../atoms/RadioButtonUnit";
import { urlJoin } from "url-join-ts";
import CodeInfo from "../../classdef";

type Props = {
  codeInfos: CodeInfo[];
  submitValue: string;
  endpointPath: string;
};

const FormUnit: React.FC<Props> =  (props) => {
  const [codes, setCodes] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // codeInfos.length個の要素を持つ配列 => trueならテキスト入力欄を表示する
  const defaultInputUnitFlags = Array<boolean>(props.codeInfos.length).fill(false);
  const [showInputUnits, setShowInputUnits] = useState(defaultInputUnitFlags);

  // ラジオボタンからは一つしか選択できない
  // 選択された項目のnameを保持する配列（ラジオボタンでなければ、""を格納する）
  const defaultCheckedRadioNames: (string)[] = props.codeInfos.map(codeInfo => codeInfo?.radio ? codeInfo.radio.selects[0].name : "");
  const [checkedRadioNames, setCheckedRadioNames] = useState(defaultCheckedRadioNames);

  const generate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Elementはnumberのみを添え字に持つのに対して
    // HTMLFormElementはnumberとstringを添え字に持つことができる
    const formElements: HTMLFormElement = document.forms[0];
    const endpoint: string = urlJoin(process.env.REACT_APP_BACKEND_URL, props.endpointPath);
    const json: {[key: string]: string} = {};
    props.codeInfos.forEach((codeInfo, i) => {
      if (checkedRadioNames[i]) {
        // 右辺の値をformelementsから取得できる？
        // checkedRadioNamesをbooleanで管理できるかもしれない
        json[codeInfo.radio!.name] = checkedRadioNames[i];
      }

      if (showInputUnits[i]) {
        // FIX: 右辺の最後、nodeValueかも
        // FIX: formElementsはeでいいかもしれない（名前は変えるけど）
        json[codeInfo.inputText!.name] = formElements[codeInfo.inputText!.name].value;
      }

      if (codeInfo?.checkbox){
        if(showInputUnits[i]){
          json[codeInfo?.checkbox.name] = "true";
        } else {
          json[codeInfo?.checkbox.name] = "false";
        }
      }
      
    });
    const requestOptions: RequestInit = {
      method: "POST",
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(json)
    };
    fetch(endpoint, requestOptions)
    .then(res => res.json())
    .then(data => {
      setCodes(data["codes"]);
      setShowModal(true);
    });
  };

  return (
    <>
      <form className="form-unit" name={props.endpointPath} onSubmit={generate}>
        <div className="form-content">
          {
          props.codeInfos.map((codeInfo, i) => {
            return (
              <div key={i}>
                {codeInfo?.radio !== undefined && <RadioButtonUnit radio={codeInfo?.radio} num={i} checkedRadioNames={checkedRadioNames} setCheckedRadioNames={setCheckedRadioNames} />}
                {codeInfo?.checkbox && <CheckboxUnit id={i} checkedList={showInputUnits} labelText={codeInfo?.checkbox.label} setCheckedList={setShowInputUnits} />}
                {showInputUnits[i] ?
                  <InputUnit
                    name={codeInfo?.inputText!.name}
                    label={codeInfo?.inputText!.label}
                    value={codeInfo?.inputText!.value}
                  /> :
                  <></>
                }
              </div>
            );
          })
          }
        </div>
        <div className="submit-button-wrapper">
          <input type={"submit"} value={props.submitValue} className="submit-button"></input>
        </div>
      </form>
      <Modal showModal={showModal} setShowModal={setShowModal} codes={codes} />
    </>
  );
}

export default FormUnit;