import React, { useState } from "react";
import InputUnit from "../atoms/InputUnit";
import "./FormUnit.css";
import Modal from "../organisms/Modal";
import CheckboxUnit from "../atoms/CheckboxUnit";
import RadioButtonUnit from "../atoms/RadioButtonUnit";
import urlJoin from "url-join";

export default function FormUnit({inputTexts=[], submitValue="", endpointPath=""}) {
  const [codes, setCodes] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const defaultCheckList = inputTexts.map(inputText => !inputText.checkboxExists);
  const [checkedList, setCheckedList] = useState(defaultCheckList);

  // 状態管理ではなく、送信データ管理用
  // 「１つだけがtrue」はRadioButtonUnitで制御する 
  const defaultCheckedRadioNames = inputTexts.map(inputText => {
    if (inputText.radio !== undefined) {
      return inputText.radio.selects[0].name;
    } else {
      return "";
    }
  });
  const [checkedRadioNames, setCheckedRadioNames] = useState(defaultCheckedRadioNames);

  const generate = e => {
    e.preventDefault();
    const formElements = document.forms[endpointPath];
    const endpoint = urlJoin(process.env.REACT_APP_BACKEND_URL, endpointPath);
    const json = {};
    inputTexts.forEach((inputText, i) => {
      if (checkedRadioNames[i] !== "") {
        json[inputText.radio.name] = checkedRadioNames[i];
      }

      if (checkedList[i] && inputText.textExists) {
        json[inputText.text.name] = formElements[inputText.text.name].value;
      }

      if (inputText.checkboxExists){
        if(checkedList[i] && inputText.textExists){
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
                {inputText.checkboxExists && <CheckboxUnit id={i} checkedList={checkedList} labelText={inputText.checkbox.label} setCheckedList={setCheckedList} />}
                {checkedList[i] && inputText.textExists ?
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