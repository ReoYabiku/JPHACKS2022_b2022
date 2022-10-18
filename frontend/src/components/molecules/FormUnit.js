import React, { useState } from "react";
import InputUnit from "../atoms/InputUnit";
import "./FormUnit.css";
import Modal from "../organisms/Modal";
import urlJoin from "url-join";

export default function FormUnit({inputTexts=[], submitValue=""}) {
  const [codes, setCodes] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const generate = e => {
    e.preventDefault();
    const formElements = document.forms.dataframe;
    const endpoint = urlJoin(process.env.REACT_APP_BACKEND_URL, "dataframe");
    const requestOptions = {
      method: "POST",
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({
        train: formElements.train.value,
        test: formElements.test.value
      })
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
      <form className="form-unit" name="dataframe" onSubmit={generate}>
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