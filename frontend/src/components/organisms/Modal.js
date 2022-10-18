import React, { useEffect } from "react";
import DeleteButtonRightside from "../atoms/DeleteButtonRightside";
import CopyButton from "../atoms/CopyButton";
import "./Modal.css";

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
    navigator.clipboard.writeText(codes.join("\n"));
    document.getElementsByClassName("notifyCopy")[0].style.display = "block";
    setTimeout(() => {
      document.getElementsByClassName("notifyCopy")[0].style.display = "none";
    }, 1000);
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
        <>
          <div className="overlay">
            <div className="modalContent">
              <DeleteButtonRightside onClick={removeModal} />
              <textarea id="textarea" cols={100} rows={20}></textarea>
              <CopyButton onClick={copyTextToClipboard} />
            </div>
          </div>
          <div className="container">
            <div className="notifyCopy">クリップボードにコピーしました！</div>
          </div>
        </>
      ) : (
        <></>
      )
    }</>
  );
}