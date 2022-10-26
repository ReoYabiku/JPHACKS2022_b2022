import React, { Dispatch, SetStateAction, useEffect } from "react";
import DeleteButtonRightside from "../atoms/DeleteButtonRightside";
import CopyButton from "../atoms/CopyButton";
import "./Modal.css";

type Props =  {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  codes: string[];
};

const Modal: React.FC<Props> = (props) =>  {
  const removeModal = () => {
    props.setShowModal(false);
  };

  document.onclick = (e: MouseEvent) => {
    // e.targetの型がHTMLInputElementであることを保証する
    // HTMLInputElementで良いのかは不明
    if (!(e.target instanceof HTMLInputElement)) {
      return;
    }
    if (e.target.closest(".modalContent") === null){
      removeModal()
    }
  };
  
  const copyTextToClipboard = () => {
    navigator.clipboard.writeText(props.codes.join("\n"));
    const notifyCopy = document.getElementsByClassName("notifyCopy") as HTMLCollectionOf<HTMLElement>;
    notifyCopy[0].style.display = "block";
    setTimeout(() => {
      notifyCopy[0].style.display = "none";
    }, 1000);
  };
  
  useEffect(() => {
    var textarea = document.getElementById("textarea") as HTMLInputElement;
    if (textarea != null) {
      textarea.value = props.codes.join("\n");
    }
  });

  return (
    <>{
      props.showModal ? (
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

export default Modal;