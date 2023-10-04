// src/components/Modal/Modal.js
import * as Styled from "./Modal.styled"
import ReactPortal from "./ReactPortal";
import {useEffect} from "react"

function Modal({ children, isOpen, handleClose }) {
    useEffect(() => {
      const closeOnEscapeKey = e => e.key === "Escape" ? handleClose() : null;
      document.body.addEventListener("keydown", closeOnEscapeKey);
      return () => {
        document.body.removeEventListener("keydown", closeOnEscapeKey);
      };
    }, [handleClose]);
  
    if (!isOpen) return null;
  
    return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <Styled.Modal>
        <button onClick={handleClose} className="close-btn">
          Close
        </button>
        <Styled.ModalContent>{children}</Styled.ModalContent>
      </Styled.Modal>
    </ReactPortal>

    );
  };
  
  export default Modal;