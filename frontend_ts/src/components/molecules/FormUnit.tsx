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
  // 選択された項目のnameを保持する配列（ラジオボタンでなければ、falseを格納する）
  const defaultCheckedRadioNames: (string)[] = props.codeInfos.map(codeInfo => codeInfo?.radio ? codeInfo.radio.selects[0].name : "");
  const [checkedRadioNames, setCheckedRadioNames] = useState(defaultCheckedRadioNames);

  const generate = (e: Event) => {
    e.preventDefault();
    const formElements: Element = document.forms[0];
    const endpoint: string = urlJoin(process.env.REACT_APP_BACKEND_URL, props.endpointPath);
    const json: {[key: string]: string} = {};
    props.codeInfos.forEach((codeInfo, i) => {
      if (checkedRadioNames[i]) {
        json[codeInfo.radio!.name] = checkedRadioNames[i];
      }

      if (showInputUnits[i] && inputText.textExists) {
        json[inputText.text.name] = formElements[inputText.text.name].value;
      }

      if (inputText.checkboxExists){
        if(showInputUnits[i] && inputText.textExists){
          json[inputText.checkbox.name] = "true";
        } else {
          json[inputText.checkbox.name] = "false";
        }
      }
      
    });
    const requestOptions = {
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
      <form className="form-unit" name={endpointPath} onSubmit={generate}>
        <div className="form-content">
          {
          inputTexts.map((inputText, i) => {
            return (
              <div key={i}>
                {inputText.radio !== undefined && <RadioButtonUnit radio={inputText.radio} num={i} checkedRadioNames={checkedRadioNames} setCheckedRadioNames={setCheckedRadioNames} />}
                {inputText.checkboxExists && <CheckboxUnit id={i} showInputUnits={showInputUnits} labelText={inputText.checkbox.label} setShowInputUnits={setShowInputUnits} />}
                {showInputUnits[i] ?
                  <InputUnit
                    name={inputText.text.name}
                    label={inputText.text.label}
                    value={inputText.text.value}
                  /> :
                  <></>
                }
              </div>
            );
          })
          }
        </div>
        <div className="submit-button-wrapper">
          <input type={"submit"} value={submitValue} className="submit-button"></input>
        </div>
      </form>
      <Modal showModal={showModal} setShowModal={setShowModal} codes={codes} />
    </>
  );
}

export default FormUnit;