import React from "react";
import "./Modal.css";

export default function Modal({showModal = true, setShowModal= f => f, codes = f => f}) {
  const removeModal = () => {
    setShowModal(false);
  }

  return (
    <>{
      showModal ? (
        <div className="overlay">
          <div className="modalContent">
            <div className="removeWrapper">
              <div className="removeBtn" onClick={removeModal}>X</div>
            </div>
            {codes.map((code, i) => <p key={i}>{code}</p>)}
          </div>
        </div>
      ) : (
        <>
          <div>none</div>
        </>
      )
    }</>
  );
}