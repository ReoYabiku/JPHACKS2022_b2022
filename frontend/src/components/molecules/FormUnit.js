import React, { useState } from "react";
import InputUnit from "../atoms/InputUnit";
import "./FormUnit.css";
import Modal from "../organisms/Modal";
import urlJoin from "url-join";

export default function FormUnit({inputTexts=[], submitValue="", endpointPath=""}) {
  const [codes, setCodes] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const generate = e => {
    e.preventDefault();
    const formElements = document.forms[endpointPath];
    const endpoint = urlJoin(process.env.REACT_APP_BACKEND_URL, endpointPath);
    const json = {};
    inputTexts.forEach(inputText => {
      json[inputText.name] = formElements[inputText.name].value;
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
              <InputUnit
                key={i}
                name={inputText.name}
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
      <Modal showModal={showModal} setShowModal={setShowModal} codes={codes} />
    </>
  );
}