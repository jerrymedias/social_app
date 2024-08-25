import React, { useEffect } from "react";
import { createPortal } from "react-dom";

const getModal = (children) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#353535cc",
        zIndex: "99999",
        position: "absolute",
        top: "0px",
        overflow: "hidden",
      }}>
      {children}
    </div>
  );
};

function Modal(props) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = "scroll");
  }, []);
  return createPortal(getModal(props.children), document.body);
}

export default Modal;
