import React, { useEffect } from "react";
import "./Modal.css";
import { TiDeleteOutline } from "react-icons/ti";

export default function Modal({showModal = true, setShowModal= f => f, codes = f => f}) {
  const removeModal = () => {
    setShowModal(false);
  };

  document.onclick = (e) => {
    if (e.target.closest(".modalContent") === null){
      removeModal()
    }
  };
  
  const copyTextToClipboard = () => {
    console.log(codes);
    navigator.clipboard.writeText(codes.join("\n"));
  };
  
  useEffect(() => {
    var textarea = document.getElementById("textarea");
    if (textarea != null) {
      textarea.value = codes.join("\n");
    }
  });

  return (
    <>{
      showModal ? (
        <div className="overlay">
          <div className="modalContent">
            <div className="btnWrapper">
              <div className="removeBtn" onClick={removeModal}>
                <TiDeleteOutline size={"2rem"} />
              </div>
            </div>
            <textarea id="textarea" cols={100} rows={20}>
            </textarea>
            <div className="btnWrapper">
              <div className="copyBtn" onClick={copyTextToClipboard}>Copy</div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )
    }</>
  );
}